import { Pressable, PressableProps, Text, View } from "react-native";
import clsx from "clsx";

type CategoryButtonProps = PressableProps & {
  title: string;
  isSelected?: boolean;
};

export function CategoryButton({
  title,
  isSelected,
  ...rest
}: CategoryButtonProps) {
  return (
    <Pressable
      className={clsx(
        "bg-slate-800 px-4 justify-center rounded-md h-10",
        isSelected && "border-2 border-lime-700"
      )}
      {...rest}
    >
      <Text className="font-subtitle text-slate-100 text-sm">{title}</Text>
    </Pressable>
  );
}
