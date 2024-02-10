import { View } from "react-native";
import { Header } from "@/components/header";
import { useCartStore } from "@/stores/card-store";
import { Product } from "@/components/product";


export default function Cart() {
  const cartStore = useCartStore();
  return (
    <View className="flex-1 pt-8">
      <Header title="Seu carrinho" />

      <View className="p-5 flex-1">
        {
          cartStore.products.map((product) => (
            <Product key={product.id} data={product} />
          ))
        }
      </View>
    </View>
  );
}
