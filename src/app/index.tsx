import { CategoryButton } from "@/components/category-button";
import { Header } from "@/components/header";
import { FlatList, View } from "react-native";
import { CATEGORIES } from "@/utils/data/products";
import { useState } from "react";

export default function Home() {
  const [categorySelected, setCategorySelected] = useState(CATEGORIES[0]);

  const handlePressCategory = (categorySelected: string) =>
    setCategorySelected(categorySelected);

  return (
    <View className="flex-1 pt-8">
      <Header title="Faça seu pedido" cartQuantityItems={2} />
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
    </View>
  );
}
