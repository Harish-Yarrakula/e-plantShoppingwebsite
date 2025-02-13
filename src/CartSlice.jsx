import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
      const {name,image,cost}=action.payload;
      const exItem=state.items.find(item=>item.name === name);
      if(exItem){
        exItem.quantity++;
      }else{
        state.item.add({name,image,cost,quantity:1});
      }
    },
    removeItem: (state, action) => {
        state.item=state.items.filter(item=>item.name!==action.payload)
    },
    updateQuantity: (state, action) => {
     const {name,quantity}=action.payload;
     const exItem=state.item.find(item=>item.name===name);
     if(exItem){
        itemToUpdate.quantity=quantity;
     }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
