import { useDispatch, useSelector } from 'react-redux'

import styled from 'styled-components'

import EmptyCart from '../../../images/emptycart.svg'
import './cart.css'

const Cart = () => {
  const selector = useSelector((state) => state.cartReducer)

  console.log(selector.cartItems)

  const NotFoundItem = () => {
    return (
      <div style={{ background: '#000000' }}>
        <CartContainer>
          <div className="cart__contain">
            <img className="cart__img" src={EmptyCart} alt="img" />

            <h1 className="empty">Empty Cart</h1>

            <p style={{ textAlign: 'center', color: '#fff' }}>
              You have no items added to cart! Start shopping.
            </p>

            <button className="shop__nowbtn">Shop Now</button>
          </div>
        </CartContainer>
      </div>
    )
  }

  return <>
  {

    selector?.cartItems.length ?  <>


    <div className='cart__display'>

    </div>





    
    
    
    </> : NotFoundItem()

  }

      
  
  </>
}

export default Cart

const CartContainer = styled.div`
  display: flex;
  padding: 2rem 0;
  width: 90%;
`
