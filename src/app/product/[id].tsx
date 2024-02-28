import { Image, Text, View } from "react-native";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { PRODUCTS } from "@/utils/data/products";
import { formatCurrency } from "@/utils/functions/format-currency";
import { Feather } from "@expo/vector-icons";
import { Button } from "@/components/button";
import { LinkButton } from "@/components/link-button";
import { useCartStore } from "@/hooks/cartStore/useCartStore";

export default function Product() {
  const cartStore = useCartStore();
  const navigation = useNavigation();
  const { id } = useLocalSearchParams();
  const product = PRODUCTS.filter((p) => p.id === id)[0];

  const handleAddProduct = () => {
    cartStore.add(product);
    navigation.goBack();
  };

  return (
    <View className="flex-1">
      <Image
        source={product.cover}
        resizeMode="cover"
        className="w-full h-52"
      />
      <View className="flex-1 p-5 mt-8">
        <Text className="text-2xl text-lime-400 font-heading my-2">
          {formatCurrency(product.price)}
        </Text>
        <Text className="text-slate-400 font-body mb-5 leading-6">
          {product.description}
        </Text>

        {product.ingredients.map((ingredient) => (
          <Text key={ingredient} className="text-slate-400 font-body text-base">
            {"\u2022"} {ingredient}
          </Text>
        ))}
      </View>
      <View className="p-5 pb-8 gap-5">
        <Button onPress={handleAddProduct}>
          <Button.Icon>
            <Feather name="plus-circle" size={20} />
          </Button.Icon>
          <Button.Text>Adicionar ao pedido</Button.Text>
        </Button>
        <LinkButton text="Voltar ao cardápio" href="/" />
      </View>
    </View>
  );
}
