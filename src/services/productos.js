import {getFirestore, doc, addDoc, getDoc, getDocs, collection, updateDoc, arrayUnion, increment, deleteDoc} from 'firebase/firestore'

//import { vinilos } from "../data/vinilos"; 
//const getAll = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//         resolve(vinilos);
//         }, [100]);
//     });
// };

// const getById = (id) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//         resolve(vinilos.find((elem) => elem.id.toString() === id));
//         }, [100]);
//     });
// };

const getAll = async () => {
    const db = getFirestore();
    const itemsCollection = collection(db, "vinilos")
    const snapshot = await getDocs(itemsCollection);
    const c = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data()}));
    return c
}

const getById = async (id) => {
    const db = getFirestore();
    const itemDoc = doc(db, 'vinilos', id);
    const snapshot = await getDoc(itemDoc);

    const item= { id: snapshot.id, ...snapshot.data()}
    return item
}

const addOrden = async (orden) => {
    console.log(orden)
    const db = getFirestore()
    const ordersCollection = collection(db, "orden")
    const response = await addDoc(ordersCollection, orden)
    return response
}

const getCartById = async (id) => {
    const db = getFirestore()
    const cart = doc(db, 'carrito', id);
    const snapshot = await getDoc(cart);
    console.log('cart '+snapshot.id)
   return {id: snapshot.id, ...snapshot.data()};
}

const addCart = async (cart) => {
    const db = getFirestore()
    const cartsCollection = collection(db, "carrito")
    const response = await addDoc(cartsCollection, cart)
    return response
}

const updateCartWithNewItem  = async (id, item, price) => {
    console.log(item)
    const db = getFirestore()
    const cart = doc(db, "carrito", id)
    updateDoc (cart, {'items': arrayUnion(item)})
    updateDoc (cart, {'total': increment(price)})
    updateDoc (cart, {'totalItems': increment(1)})
}

const updateCart= async (id, items, price) => {
    console.log("update "+id)
    const db = getFirestore()
    const cart = doc(db, "carrito", id)
    updateDoc (cart, {'items': items})
    updateDoc (cart, {'total': increment(price)}) 
    updateDoc (cart, {'totalItems': increment(1)})
}

const deleteCart = async (id) => {
    const db = getFirestore()
    const response = await deleteDoc(doc(db, "carts", id));
    return response
}

const deleteItem = async (id, items, monto) => {
    const db = getFirestore()
    const cart = doc(db, "carrito", id)
    updateDoc (cart, {'items': items})
    updateDoc (cart, {'total': increment(-monto)}) 
    updateDoc (cart, {'totalItems': increment(-1)})

}

export const productosService = {getAll, getCartById, deleteItem, addOrden, deleteCart, updateCart, updateCartWithNewItem, addCart}