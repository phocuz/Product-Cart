import { createSlice } from "@reduxjs/toolkit";

const initialState= {
  cart:[],
  showCartDetails: false

}
const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
    addToCart: (state,action) =>{
         const { name, price, quantity } = action.payload;
      const totalPrice = price * quantity;
      state.cart.push({ name, price, quantity, totalPrice });
    },
     removeFromCart: (state,action) =>{
            return state.cart.filter((key,index) => index !==action.payload)
        },
    updateCartQuantity: (state, action) => {
      const { index, quantity } = action.payload;
      state.cart[index].quantity = quantity;
    },
    toggleCartDetails: (state, action) => {
      state.showCartDetails = action.payload;
    },
    }
})

export const { addToCart, removeFromCart, updateCartQuantity,toggleCartDetails} =
  cartSlice.actions;
export default cartSlice.reducer;