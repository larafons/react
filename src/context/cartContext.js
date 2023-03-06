import { useState, useEffect, useContext } from "react"
import { createContext} from 'react';
import { productosService } from "../services/productos";

export const CartContext =  createContext();

export function CartProvider ({ defaultValue= 0, children }) {
    const [total, setTotal] = useState(defaultValue)
    const [totalPrice, setTotalPrice] = useState(defaultValue)
    const [products, setProducts] = useState([])
    const [cartId, setCartId] = useState(0)


    const saveCart = (id) => {
        localStorage.setItem('cartId', JSON.stringify(id));
    }

    const loadCart = async () => {
        const storedCart = JSON.parse(localStorage.getItem('cartId'));
        if (!storedCart) {
            let items = [];
            let user = {id: random(10,1000000)}
            let cart = {items, total: totalPrice, user, totalItems: 0}
            let response = await productosService.addCart(cart)
            console.log("response id"+response.id)
            setCartId(response.id)
            saveCart(response.id);
        } else {
            console.log('hay stored cart '+storedCart)
            let response = await productosService.getCartById(storedCart)
            setProducts(response.items);
            setCartId(storedCart);
            setTotal(response.totalItems);
            setTotalPrice(response.total)
        }
        
    }

    function addItem(item) {
        if (products.some(prod => prod.id === item.id)) { //si ya hay 1 producto de ese tipo
            let i = products.findIndex(prod => prod.id === item.id)
            products[i].cant++
            console.log(cartId)
            setTotal(total + 1)
            setTotalPrice(totalPrice + item.price)
            productosService.updateCart(cartId, products, item.price)
        } else { //si no
            console.log('else')
            setTotal(total + 1)
            setProducts([...products, item])
            setTotalPrice(totalPrice + item.price)
            productosService.updateCartWithNewItem(cartId, item, item.price)
        }
    }

    function deleteItem(itemId) {
        console.log(itemId)
        let i = products.findIndex(prod => prod.id === itemId)
        products[i].cant = products[i].cant - 1
        setTotalPrice(totalPrice - products[i].price)
        productosService.deleteItem(cartId, products, products[i].price)
        if (products[i].cant === 0) {
          products.splice(i,1)
        } 
        setTotal(total - 1)
    }

    function finishPurchase () {
      setProducts([])
      setTotal(0)
      setTotalPrice(0)
      localStorage.clear()
      productosService.addOrden()
  }

    function emptyCart() {
      setProducts([])
      setTotal(0)
      setTotalPrice(0)
      productosService.deleteCart(cartId)
      localStorage.clear()
    }

    function random(min, max) {
      return Math.floor((Math.random() * (max - min + 1)) + min);
  }


    return (
        <CartContext.Provider value={{total, setTotal, totalPrice, setTotalPrice, products, setProducts, addItem, deleteItem, emptyCart, finishPurchase, loadCart}}>
            {children}
        </CartContext.Provider>
    );
}