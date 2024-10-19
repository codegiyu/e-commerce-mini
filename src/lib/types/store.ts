import { CartItem } from "@/components/cartTable/column";

export interface CartStore {
  cart: { [id: string]: CartItem }; //Record<string, CartItem>
  numberOfItemsInStore: number;
  actions: {
    addToCart: (obj: Omit<CartItem, 'quantity'>) => void;
    removeFromCart: (id: string) => void;
    clearCart: () => void;
  };
}
