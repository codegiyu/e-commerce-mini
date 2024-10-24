import { CartItem } from "@/components/cartTable/column";
import { User } from "./user";
import { SignupFormInfo } from "@/pages/auth/SignupPage";

export interface CartStore {
  cart: { [id: string]: CartItem }; //Record<string, CartItem>
  numberOfItemsInStore: number;
  actions: {
    addToCart: (obj: CartItem) => void;
    removeFromCart: (id: string) => void;
    updateItemQuantityInCart: (id: string, change: -1 | 1) => void;
    subTotalCalculation:() => number;
    clearCart: () => void;
  };
}

export interface AuthStore {
  user: User | null;
  actions: {
    signup: (obj: Omit<SignupFormInfo, 'confirmPassword'>) => Promise<void>;
  };
}
