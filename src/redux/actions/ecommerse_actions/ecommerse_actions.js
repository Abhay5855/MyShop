import { ADDAUTH, ADDTOCART } from "../../action_constants/actionConstants"




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