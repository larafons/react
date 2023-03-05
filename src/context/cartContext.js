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
            let cart = {items, total: totalPrice, user}
            let response = await productosService.addCart(cart)
            setCartId(response.id)
            saveCart(response.id);
        } else {
            let response = await productosService.getCartById(storedCart)
            setProducts(response.items);
            setCartId(storedCart);
            setTotal(response.totalItems);
            setTotalPrice(response.total)
        }
        
    }

    function addItem(item) {
        if (products.some(prod => prod.id === item.id)) {
            let i = products.findIndex(prod => prod.id === item.id)
            products[i].quantity++
            productosService.updateCart(cartId, products, item.price)
        } else {
            setProducts([...products, item])
            productosService.updateCartWithNewItem(cartId,item, item.price)
        }
        setTotal(total + 1)
        setTotalPrice(totalPrice + item.price)
    }

    function deleteItem(itemId) {
        console.log(itemId)
        let i = products.findIndex(prod => prod.id === itemId)
        products[i].quantity = products[i].quantity - 1
        setTotalPrice(totalPrice - products[i].price)
        productosService.deleteItem(cartId, products, products[i].price)
        if (products[i].quantity === 0) {
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