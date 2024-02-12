import { createSlice } from '@reduxjs/toolkit';
import commerce from "../../lib/commerce"

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        totalQuantity: 0,
        changed: false,
    },
    reducers: {
        replaceCart(state, action) {
            state.totalQuantity = action.payload.totalQuantity;
            state.items = action.payload.items;
        },
        addItemToCart(state, action) {
            const newItem = action.payload;
            const existingItem = state.items.find(
                (item) => item.id === newItem.id
            );
            const itemQuantity = newItem.quantity || 1;
            state.totalQuantity += itemQuantity;
            state.changed = true;
            if (!existingItem) {
                state.items.push({
                    id: newItem.id,
                    price: newItem.price,
                    quantity: itemQuantity,
                    totalPrice: newItem.price,
                    name: newItem.title,
                    image: newItem.image,
                    slug: newItem.slug,
                });
                commerce.cart.add(newItem.id,)
            } else {
                existingItem.quantity++;
                existingItem.totalPrice += newItem.price;
                commerce.cart.update(newItem.id, { quantity: existingItem.quantity + 1 })
            }
        },
        increaseItemFromCart(state, action) {
            const id = action.payload;
            const existingItem = state.items.find((item) => item.id === id);
            state.totalQuantity--;
            state.changed = true;
            if (existingItem.quantity === 1) {
                state.items = state.items.filter((item) => item.id !== id);
                commerce.cart.remove(id);
            } else {
                existingItem.quantity--;
                existingItem.totalPrice -= existingItem.price
                commerce.cart.update(existingItem.id, { quantity: existingItem.quantity - 1 })
            }
        },
        removeItemFromCart(state, action) {
            const id = action.payload;

            state.changed = true;
            state.items = state.items.filter((item) => item.id !== id);
            state.totalQuantity = state.items.reduce(
                (acc, cur) => acc + cur.quantity,
                0
            );
            commerce.cart.remove(id);
        },
        updateItemQuantityFromCart(state, action) {
            const newQuantity = action.payload;

            state.items = state.items.map((item) => ({
                ...item,
                quantity: newQuantity[item.id] || item.quantity,
                totalPrice: item.price * newQuantity[item.id] || item.price,
            }));
            state.totalQuantity = state.items.reduce(
                (acc, cur) => acc + cur.quantity,
                0
            );
            state.changed = true;
        },
        clearAllFromCart(state) {
            state.changed = true;
            state.items = [];
            state.totalQuantity = 0;
            commerce.cart.delete()
        },
    },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
