import { useDispatch, useSelector } from 'react-redux'
import { DiscountedPrice } from '../utils/DiscountedPrice'
import { AiFillPlusCircle, AiFillMinusCircle } from 'react-icons/ai'
import { useState } from 'react'
import styled from 'styled-components'

import EmptyCart from '../../../images/emptycart.svg'
import './cart.css'
import { RemoveFromCart } from '../../../redux/actions/ecommerse_actions/ecommerse_actions'

const Cart = () => {

const [value , setValue] = useState('1');
  const selector = useSelector((state) => state.cartReducer);


  const dispatch = useDispatch();

  const NotFoundItem = () => {
    return (
      <div style={{ background: '#000000' }}>
        <Empty>
          <div className="cart__contain">
            <img className="cart__img" src={EmptyCart} alt="img" />

            <h1 className="empty">Empty Cart</h1>

            <p style={{ textAlign: 'center', color: '#fff' }}>
              You have no items added to cart! Start shopping.
            </p>

            <button className="shop__nowbtn">Shop Now</button>
          </div>
        </Empty>
      </div>
    )
  }

  return (
    <>
      {selector?.cartItems.length ? (
        <>
          <Main>
            <CartMain>
              <AddressContainer>
                <h3 className='mycart'>
                  My Cart ({selector?.cartItems.length})
                </h3>

                <button className="add__address">Add Address</button>

                <button className="change__address">Change</button>
              </AddressContainer>

              {selector?.cartItems?.map((item) => (
                <CardContainer key={item?._id}>
                  <Items>
                    <IMG
                     
                      src={item?.image}
                      alt="img"
                    />

                    <Details>
                      <div className="single__products">
                        <div>
                          <Company>{item?.company}</Company>
                          <div>
                            <Product className="productcart__name">
                              {item?.productName}
                            </Product>
                          </div>

                          <PriceContainer>
                            <Price style={{ marginRight: '0.75em' }}>
                              ₹{item?.price}
                            </Price>

                            <Price
                              style={{
                                textDecoration: 'line-through',
                                marginRight: '0.75em',
                              }}
                            >
                              ₹{DiscountedPrice(item.price, item.discount)}
                            </Price>

                            <p style={{ color: '#EB4D4B' }}>
                              ({item?.discount}% off)
                            </p>
                          </PriceContainer>

                          <Counter>
                            <AiFillMinusCircle style={{ color: '#fff' }} />

                            <Input type="text" value={value}/>

                            <AiFillPlusCircle style={{ color: '#fff' }} />
                          </Counter>

                          <Wishlist>
                            <WishListBTN>Add to Wishlist</WishListBTN>

                            <Remove onClick={() => dispatch(RemoveFromCart(item._id))}>Remove</Remove>
                          </Wishlist>
                        </div>
                      </div>
                    </Details>
                  </Items>
                </CardContainer>
              ))}
            </CartMain>

            <CheckoutDiv>
              <H6>PRICE DETAILS</H6>

              <hr className="hr__line" />

              <Flex>
                <span>Price</span>
                <span></span>
              </Flex>
              <Flex>
                <span>Discount</span>
                <span></span>
              </Flex>
              <Flex>
                <span>Delivery Charges</span>
                <span></span>
              </Flex>
              <hr className="hr__line" />

              <Flex>
                <span style={{fontWeight : 'bold'}}>Total Amount</span>
                <span></span>
              </Flex>
            </CheckoutDiv>
          </Main>
        </>
      ) : (
        NotFoundItem()
      )}
    </>
  )
}

export default Cart

const IMG = styled.img`

border-radius : 4px;
width : 8rem;

@media (max-width : 700px){

     width : 6rem;
}
`

const Empty = styled.div``

const H6 = styled.h4`
  color: #fff;
`
const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom : 1rem;

  
`

const CheckoutDiv = styled.div`
  padding: 1rem 1.5rem 3rem;
  flex-direction: column;
  border-radius: 0.5rem;
  background: #26273b;
  width : 25rem;
  height : 40vh;
  color : #fff;

  @media (max-width : 750px){

      width : 100%;
      height : 40vh;
  }

`

const CartMain = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 2;
  border-radius: 0.5rem;
  gap: 0.25rem;
  background: #26273b;
  
  @media (max-width : 750px){

     flex-grow : 1.5; 
  
}
  
`

const AddressContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem 2rem;
`

const CardContainer = styled.div`
  display: flex;
  width: auto;
  border-radius: 0.5rem;
  padding: 1rem;

  @media (max-width : 700px){

      width : 20rem;
  }


`

const Items = styled.div`
  display: flex;
  gap: 1.3rem;
`

const Details = styled.div`
  display: flex;
  flex-direction: column;
`

const PriceContainer = styled.div`
  display: flex;
  align-items: center;
`
const Counter = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin: 1rem 0;
`

const Wishlist = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-top: 1.4rem;

  @media(max-width : 700px){

      flex-direction : column;
      align-items : flex-start;
      gap : 0.2rem;
  }
`

const Company = styled.h4`
  color: #fff;
`

const Product = styled.p`
  color: #fff;
`

const Price = styled.p`
  color: #fff;
`

const Input = styled.input`
  width: 1rem;
  border-radius: 0.25rem;
  padding: 0.25rem 1rem;
  border: 0.1rem solid var(--color-teal-02);
  outline: none;
`

const Main = styled.div`
  display: flex;
  flex-direction: row;
  padding: 2rem 0;
  gap: 2rem;
  width: 90%;
  margin: auto;

  @media (max-width : 750px){

    flex-direction: column;

  }
`

const WishListBTN = styled.button`
  padding: 0.375em 1.5em;
  outline: none;
  text-align: center;
  border: 2px solid #ac5dd9;
  color: #ac5dd9;
  border-radius: 0.375rem;
  background: #26273b;
  letter-spacing: 0.125rem;
  cursor: pointer;


  @media (max-width : 700px){

    padding: 0.5em;
    letter-spacing : none;
    border: 1px solid #ac5dd9;
  }
`

const Remove = styled.button`
  border: none;
  outline: none;
  color: #ac5dd9;
  background: #26273b;
  padding: 0.25em 0.5em;
  letter-spacing: 0.125rem;
  cursor: pointer;

  @media (max-width : 700px){

    padding: 0.5em;
    letter-spacing: none;

  }
`
