import {getFirestore, doc, addDoc, getDoc, getDocs, collection, query, where, updateDoc, arrayUnion, increment, deleteDoc} from 'firebase/firestore'

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
    const db = getFirestore()
    const ordersCollection = collection(db, "orders")
    const response = await addDoc(ordersCollection, orden)
    return response
}

const getCartById = async (id) => {
    const db = getFirestore()
    const cart = doc(db, 'carrito', id);
    const snapshot = await getDoc(cart);
   return {id: snapshot.id, ...snapshot.data()};
}

const addCart = async (cart) => {
    const db = getFirestore()
    const cartsCollection = collection(db, "carrito")
    const response = await addDoc(cartsCollection, cart)
    return response
}

const updateCartWithNewItem  = async (id, item, price) => {
    const db = getFirestore()
    const cart = doc(db, "carts", id)
    updateDoc (cart, {'items': arrayUnion(item)})
    updateDoc (cart, {'total': increment(price)})
}

const updateCart= async (id, items, price) => {
    const db = getFirestore()
    const cart = doc(db, "carritos", id)
    updateDoc (cart, {'items': items})
    updateDoc (cart, {'total': increment(price)}) 
}


/* deleteCart = Borra un carrito de la base de datos. */
const deleteCart = async (id) => {
    const db = getFirestore()
    const response = await deleteDoc(doc(db, "carts", id));
    return response
}

const deleteItem = async (id, items, monto) => {
    const db = getFirestore()
    const cart = doc(db, "carts", id)
    updateDoc (cart, {'items': items})
    updateDoc (cart, {'total': increment(-monto)}) 
    updateDoc (cart, {'totalItems': increment(-1)})

}

export const productosService = {getAll, getById, deleteItem, deleteCart, updateCart, updateCartWithNewItem, addCart}