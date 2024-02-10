import { ProductProps } from "@/utils/data/products";
import { create } from "zustand";
import * as cartInMemory from './helpers/cart-In-memory'


export type ProductsCartProps = ProductProps & {
  quantity: number
}

type StateProps = {
  products: ProductsCartProps[]
  add: (product: ProductProps) => void
};

// Guardar e compartilhar o estado com todos os componentes.
export const useCartStore = create<StateProps>((set) => ({
  products: [],

  // Usando o método de add onde vai receber o produto com um determinado tipo.
  add: (product: ProductProps) => set((state) => ({
    products: cartInMemory.add(state.products, product)
  })),
}))