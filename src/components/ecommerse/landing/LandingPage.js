import React, { useState } from "react";
import styled from "styled-components";
import Sidebar from "../sidebar/Sidebar";
import "./landing.css";
import {useDispatch, useSelector} from "react-redux"
import { RemoveFromCart } from "../../../redux/actions/ecommerse_actions/ecommerse_actions";
import { DiscountedPrice } from "../utils/DiscountedPrice";
import { data } from "../data/data";
import { AddToCart } from "../../../redux/actions/ecommerse_actions/ecommerse_actions";

const LandingPage = () => {
  const [products, setProducts] = useState(data);
  const [loading, setLoading] = useState(false);





  const dispatch = useDispatch();

  const selector = useSelector((state) => state.cartReducer);


  const AddItem = (item) => {

       dispatch(AddToCart(item));

      
  }


  console.log(selector.cartItems, 'this are cart Itesm');

  return (
    <div style={{ display: "flex", background: "#1C1C28" }}>
      
        <Sidebar products={products} setProducts={setProducts}/>
     

      {!loading && products.length ? (
        <>
          <Container>
            {products?.map((item) => (
              <Card key={item._id}>
                <div className="img__container">
                  <img className="product__img" src={item?.image} alt="img" loading="lazy"/>
                </div>

                <div className="product__details">
                  <h3>{item?.company}</h3>

                  <p className="product__name">{item?.productName}</p>

                  <div className="products__price">
                    <p style={{ marginRight: "0.75em" }}>
                      Price : ₹{item?.price}
                    </p>

                    <p
                      style={{
                        textDecoration: "line-through",
                        marginRight: "0.75em",
                      }}
                    >
                      ₹{ DiscountedPrice(item.price, item.discount)}
                    </p>

                    <p style={{ color: "#EB4D4B" }}>({item?.discount}% off)</p>
                  </div>
                </div>

                <div className="cart__container">
                  {/* <button onClick={() => AddItem(item)}>{add ? 'Remove From Cart'  : 'Add To Cart' }</button> */}

                  {

                    !selector.cartItems.find((itemID) => itemID._id === item._id)  ?  <button onClick={() => AddItem(item)} >Add To Cart</button> :  <button onClick={() =>  dispatch(RemoveFromCart(item._id))}>Remove From Cart</button>
                  }
                </div>
              </Card>
            ))}
          </Container>
        </>
      ) : (
        <p>...loading</p>
      )}
    </div>
  );
};

export default LandingPage;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 1.5em;
  margin: 2em 1em 0 0;
  backgrund: #1c1c28;
  color: #fff;
  @media (max-width: 700px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  border-radius: 6px;
  margin: 0;
  display: flex;
  flex-direction: column;
  background-color: #2d2e45;
`;
