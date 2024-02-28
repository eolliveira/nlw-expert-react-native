import { CategoryButton } from "@/components/category-button";
import { Header } from "@/components/header";
import { FlatList, SectionList, Text, View } from "react-native";
import { CATEGORIES, MENU, PRODUCTS } from "@/utils/data/products";
import { useRef, useState } from "react";
import { Product } from "@/components/product";
import { Link } from "expo-router";
import { useCartStore } from "@/hooks/cartStore/useCartStore";

export default function Home() {
  const cartStore = useCartStore();
  const [categorySelected, setCategorySelected] = useState(CATEGORIES[0]);

  const cartItemsQuanntity = cartStore.products.reduce(
    (total, product) => total + product.quantity,
    0
  );

  const sectionListRef = useRef<SectionList>(null);

  const handlePressCategory = (categorySelected: string) => {
    setCategorySelected(categorySelected);

    //pega index da categoria selecionada
    const categoryIndex = CATEGORIES.findIndex(
      (category) => category === categorySelected
    );

    if (sectionListRef.current) {
      sectionListRef.current.scrollToLocation({
        //começa sempre da primeira posição
        itemIndex: 0,
        animated: true,
        sectionIndex: categoryIndex,
      });
    }
  };

  return (
    <View className="flex-1 pt-8">
      <Header title="Faça seu pedido" cartQuantityItems={cartItemsQuanntity} />
      <FlatList
        data={CATEGORIES}
        keyExtractor={(category) => category}
        renderItem={({ item }) => (
          <CategoryButton
            title={item}
            isSelected={categorySelected === item}
            onPress={() => handlePressCategory(item)}
          />
        )}
        horizontal
        className="mt-5 max-h-10"
        contentContainerStyle={{ gap: 12, paddingHorizontal: 20 }}
        showsHorizontalScrollIndicator={false}
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
          <Text className="text-white font-heading text-xl mt-8 mb-3">
            {title}
          </Text>
        )}
        className="flex-1 p-5"
        contentContainerStyle={{ paddingBottom: 100 }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
