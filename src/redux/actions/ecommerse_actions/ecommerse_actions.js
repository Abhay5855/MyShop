import { ADDAUTH, ADDTOCART, REMOVEFROMCART } from "../../action_constants/actionConstants"




export const addAuth = (data) => {


     return {

         type : ADDAUTH,
         payload : data,
     }
}



export const AddToCart = (data) => {

       return {

           type : ADDTOCART,
           payload : data,
       }
}


export const RemoveFromCart = (id) => {

      return {

           type : REMOVEFROMCART,
           payload : id,
      }
}