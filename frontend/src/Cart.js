import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import "./Cart.css"
import CartCard from './CartCard';
import Footer from "./Footer"
import Header from './Header';


function Cart() {
    const {cart}= useSelector((state)=>state.cart);

    const [total, settotal] = useState(0)

    useEffect(() => {
      settotal(cart.reduce((acc, curr)=> acc + Number(curr.price)*curr.qty,0))
    }, [cart])
    

  return (
    <>
    <Header/>
    <div className='cart'>
      <div className='cart-left'>
        {cart.map((prod)=>
            <CartCard key={prod._id} product={prod}/>
        )}
      </div>
      <div className='cart-right'>
        <span>SubTotal of ({cart.length}) Items</span>
        <span style={{fontWeight:700,fontSize:20}}>Total ₹ {total} </span>
        <button disabled={cart.length===0}>Proceed to Checkout</button>
      </div>
    </div>
    <Footer/>
    </>
    )
}

export default Cart