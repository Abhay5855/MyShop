


import { useDispatch , useSelector } from "react-redux";


const Cart = () => {


      const selector = useSelector(state => state.cartReducer);

      console.log(selector.cartItems);


      const NotFoundItem = () => {


            return (
                <div>



                </div>
            )
      }



      return (

          <>


          
          </>
      )
}

export default Cart;