"use client";

import { create } from 'zustand';

const useCart = create((set, get) => ({
  cart: [],
  product: {},
  openModal: true,

  setOpenModal: () => {
    set((state) => ({
      ...state,
      openModal: !state.openModal,
    }));
  },

  setProduct: ({ newProduct }) => {
    set((state) => ({
      ...state,
      product: newProduct,
    }));
  },

  addItemToCart: ({ newItem }) => {
    set((state) => ({
      ...state,
      cart: [...state.cart, newItem],
    }));
  },

  removeItemFromCart: ({ Itemindex }) => {
    set((state) => {
      const newCart = state.cart.filter((_, index) => index !== Itemindex);
      return {
        ...state,
        cart: newCart,
      };
    });
  },

  emptyCart: () => {
    set((state) => ({
      ...state,
      cart: [],
    }));
  },
}));

export default useCart;