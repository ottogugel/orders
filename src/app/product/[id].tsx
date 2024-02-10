import { Image, Text, View } from "react-native";
import { useLocalSearchParams, useNavigation, Redirect } from 'expo-router'
import { Feather } from '@expo/vector-icons'

import { useCartStore } from "@/stores/card-store";

import { PRODUCTS } from "@/utils/data/products";
import { formatCurrency } from "@/utils/functions/format-currency";

import { Button } from "@/components/button";
import { LinkButton } from "@/components/link-button";

export default function Product() {
  const cartStore = useCartStore();
  const { id } = useLocalSearchParams()

  const navigation = useNavigation()

  console.log(id)

  const product = PRODUCTS.find((item) => item.id === id)
  console.log(product)
  console.log(cartStore.products)

  function handleAddToCart() {
  if(product){
  cartStore.add(product)
  navigation.goBack()
    }
  }

  // Verificar
  if(!product) {
    return <Redirect href="/" />
  }

  return (
    <View className="flex-1">
      <Image
        source={product.cover}
        className="w-full h-52"
        resizeMode="cover"
      />

      <View className="p-5 flex-1">
        <Text className="text-slate-400 font-heading text-xl">
          {product.title}
        </Text>

        <Text className="text-lime-400 text-2xl font-heading my-2">
          {formatCurrency(product.price)}
        </Text>

        <Text className="text-slate-400 font-body text-base leading-6 mb-3">
          {product.description}
        </Text>

        {product.ingredients.map((ingredient) => (
          <Text
            key={ingredient}
            className="text-slate-400 font-body text-base leading-6"
          >
            {"\u2022"} {ingredient}
          </Text>
        ))}

        <View className="p-5 pb-8 gap-5">
          <Button onPress={handleAddToCart}>
            <Button.Icon>
              <Feather name="plus-circle" size={20} />
            </Button.Icon>

            <Button.Text>Add to order</Button.Text>
          </Button>

          <LinkButton title="Back to menu" href="/" />
        </View>
      </View>
    </View>
  );
}
