import {
  ActivityIndicator,
  Image,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import colors from "tailwindcss/colors";

type HeaderProps = {
  title: string;
  cartQuantityItems?: number;
};

export function Header({ title, cartQuantityItems = 0 }: HeaderProps) {
  return (
    <View className="flex-row items-center border-b pb-5 mx-5 border-slate-700">
      <View className="flex-1">
        <Image source={require("@/assets/logo.png")} className="h-6 w-36 " />
        <Text className="font-heading text-white text-xl mt-2">{title}</Text>
      </View>

      {cartQuantityItems > 0 && (
        <TouchableOpacity className="relative" activeOpacity={0.7}>
          <View className="w-4 h-4 bg-lime-300 rounded-full justify-center items-center top-2 z-10 -right-3.5">
            <Text className="text-xs font-bold text-slate-900">
              {cartQuantityItems}
            </Text>
          </View>

          <Feather name="shopping-bag" color={colors.white} size={24} />
        </TouchableOpacity>
      )}
    </View>
  );
}
