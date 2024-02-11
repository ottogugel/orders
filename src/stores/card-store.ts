import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware"
import AsyncStorage from "@react-native-async-storage/async-storage";

import { ProductProps } from "@/utils/data/products";
import * as cartInMemory from "./helpers/cart-In-memory";



export type ProductsCartProps = ProductProps & {
  quantity: number;
};

type StateProps = {
  products: ProductsCartProps[];
  add: (product: ProductProps) => void;
  remove: (productId: string) => void;
  clear: () => void;
};

// Guardar e compartilhar o estado com todos os componentes.
export const useCartStore = create(
  persist<StateProps>((set) => ({
  products: [],

  // Usando o método de add onde vai receber o produto com um determinado tipo.
  add: (product: ProductProps) =>
    set((state) => ({
      products: cartInMemory.add(state.products, product),
    })),
  //  Remover o produto do carrinho
  remove: (productId: string) =>
    set((state) => ({
      products: cartInMemory.remove(state.products, productId),
    })),
  // Limpeza do carrinho
  clear: () => set(() => ({ products: [] }))
}), {
  name: "nlw-expert:cart",
  storage: createJSONStorage(() => AsyncStorage)
}));
