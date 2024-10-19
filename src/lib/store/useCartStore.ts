import { create } from 'zustand';
import { useShallow } from 'zustand/react/shallow';
import { SelectorFn } from '../types/general';
import { CartStore } from '../types/store';
import { CartItem } from '@/components/cartTable/column';

const defaultCart: Omit<CartStore, 'actions'> = {
  cart: {},
  numberOfItemsInStore: 0,
};

export const useInitCart = create<CartStore>()((set, get) => ({
  ...defaultCart,
  actions: {
    addToCart: (obj) => {
      const newCartItem: CartItem = {
        ...obj,
        quantity: 1,
      }

      // const { cart, numberOfItemsInStore } = get();
      // set({ cart: [...cart, newCartItem], numberOfItemsInStore: numberOfItemsInStore + 1 });

      set(({ cart, numberOfItemsInStore }) => {
        return { cart: { ...cart, [obj.id]: newCartItem }, numberOfItemsInStore: numberOfItemsInStore + 1 }
      });
    },
    removeFromCart: (id) => {
      const { cart, numberOfItemsInStore } = get();
      const newCart = structuredClone(cart);
      delete newCart[id];

      set({ cart: newCart, numberOfItemsInStore: numberOfItemsInStore - 1 });
    },
    clearCart: () => {
      // set(defaultCart);
      set({ cart: {}, numberOfItemsInStore: 0 });
    },
  }
}));

export const useCartStore = <T>(selector: SelectorFn<CartStore, T>) => {
  const state = useInitCart(useShallow(selector));
  return state;
};