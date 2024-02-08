import { useState, useRef } from 'react';
import { View, FlatList, SectionList, Text } from 'react-native';
import { Link } from 'expo-router';

import { CATEGORIES, MENU } from '@/utils/data/products'
import { Header } from '@/components/header';
import { CategoryButton } from '@/components/category-button';
import { Product } from '@/components/product';

export default function Home() {

  // Definir que vai sempre começar da categoria 0 ao ser selecionado.
  const [category, setCategory] = useState(CATEGORIES[0])

  // Referenciar a lista de cada categoria.
  const sectionListRef = useRef<SectionList>(null)

  // Ao clicar na categoria vai mudar o estado.
  function handleCategorySelect(SelectedCategory: string) {
    console.log(SelectedCategory)
    setCategory(SelectedCategory)

    const sectionIndex = CATEGORIES.findIndex((category) => category === SelectedCategory)

    // Navegando pela categoria
    console.log(sectionIndex);
    if(sectionListRef.current){
      sectionListRef.current.scrollToLocation({
        animated: true,
        sectionIndex,
        itemIndex: 0,
      })
    }
  }

  return (
    <View className="flex-1 pt-8">
      <Header title="Make your order" cartQuantityItems={5} />

      {/* LISTAGEM DAS CATEGORIAS */}
      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <CategoryButton
            title={item}
            isSelected={item === category}
            onPress={() => handleCategorySelect(item)}
          />
        )}
        horizontal
        className="max-h-10 mt-5"
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ gap: 12, paddingHorizontal: 20 }}
      />

      <SectionList
        ref={sectionListRef}
        sections={MENU}
        keyExtractor={(item) => item.id}
        stickySectionHeadersEnabled={false}
        renderItem={({ item }) => (
          <Link href={`/product/${item.id}`} asChild>
            <Product data={item} />
          </Link>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <Text className="text-white text-base font-heading mt-8 mb-3">
            {title}
          </Text>
        )}
        className="flex-1 p-5"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
      />
    </View>
  );
}