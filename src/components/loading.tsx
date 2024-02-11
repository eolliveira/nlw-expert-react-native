import { ActivityIndicator, View } from "react-native";
import colors from "tailwindcss/colors";

export function Loading() {
  return (
    <View className="flex-1 bg-slate-900 text-center justify-center">
      <ActivityIndicator size={"large"} color={colors.white} />
    </View>
  );
}
