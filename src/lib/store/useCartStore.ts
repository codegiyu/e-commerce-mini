import { create } from 'zustand';
import { useShallow } from 'zustand/react/shallow';
import { SelectorFn } from '../types/general';
import { CartStore } from '../types/store';

const defaultCart: Omit<CartStore, 'actions'> = {
  cart: {},
  numberOfItemsInStore: 0,
};

export const useInitCart = create<CartStore>()((set, get) => ({
  ...defaultCart,
  actions: {
    addToCart: (obj) => {
      // const { cart, numberOfItemsInStore } = get();
      // set({ cart: { ...cart, [obj.id]: obj }, numberOfItemsInStore: numberOfItemsInStore + 1 });

      set(({ cart, numberOfItemsInStore }) => {
        return { cart: { ...cart, [obj.id]: obj }, numberOfItemsInStore: numberOfItemsInStore + 1 }
      });
    },
    removeFromCart: (id) => {
      const { cart, numberOfItemsInStore } = get();
      const newCart = structuredClone(cart);
      delete newCart[id];
      set({ cart: newCart, numberOfItemsInStore: numberOfItemsInStore - 1 });
    },
    updateItemQuantityInCart: (id, change) => {
      const { cart } = get();
      const newCart = structuredClone(cart);
      const product = newCart[id];

      product.quantity = product.quantity + change;
      product.subtotal = product.price * product.quantity;

      set({ cart: newCart });
    },
    subTotalCalculation: () =>{
      const {cart} = get();
      return Object.values(cart).reduce((total, item) => {
        return total + (item.price * item.quantity);
      }, 0);
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