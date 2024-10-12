import { CartItem } from "@/components/cartTable/column";

export interface CartStore {
  cart: CartItem[];
  numberOfItemsInStore: number;
  actions: {
    addToCart: (obj: Omit<CartItem, 'quantity'>) => void;
    clearCart: () => void;
  };
}
