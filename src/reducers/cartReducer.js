import {
    ADD_TO_CART,
    REMOVE_FROM_CART,
    ADD_TO_CART_QUANTITY,
    REMOVE_FROM_CARTQUANTITY
    
  } from "../constants";

const cartReducer = (state = [], action) => {    
    switch (action.type) {
      case ADD_TO_CART:
        return [...state, action.vo];

      case REMOVE_FROM_CART:           
         return removeFromCart(state, action.vo);  
      
      case ADD_TO_CART_QUANTITY:           
         return addToCartQuantity(state, action.vo);  

      case REMOVE_FROM_CARTQUANTITY:           
         return removeFromCartQuantity(state, action.vo);       
            
      default:
        return state;
    }
  };

  // In Progress die to error
 function removeFromCart(dataProvider, vo) { 
  if(dataProvider.length === 1) return []; 
   var result = Array.from(dataProvider); 
   result.splice(dataProvider.indexOf(vo), 1);      
   return result;   
 }

 function addToCartQuantity(dataProvider, vo) {   
   var result = Array.from(dataProvider);
   for(var i=0; i<result.length; i++) {      
      if(result[i] === vo) {
         result[i].quantity = (result[i].quantity + 1);        
      }
   }
   return result; 
 }

 function removeFromCartQuantity(dataProvider, vo) {
  var result = Array.from(dataProvider);
  for(var i=0; i<result.length; i++) {      
     if(result[i] === vo && result[i].quantity > 1) {
        result[i].quantity = (result[i].quantity - 1);        
     }
  }
  return result; 
 }


export default cartReducer;