import React from 'react'
import {useSelector} from 'react-redux'
import CheckoutProduct from '../components/CheckoutProduct'


function Cart() {

  const products = useSelector(state => state.cart)
  return (
    <div>
     <h3>Cart</h3>

     <div>
      {
        products.map((item)=>(
          <CheckoutProduct itemId={item.id} price={item.price} title={item.title} image={item.image} />
        ))
      }
     </div>

    </div>
  )
}

export default Cart