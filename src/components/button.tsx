import { ReactNode } from "react";
import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

type ButtonProps = TouchableOpacityProps & {
  children: ReactNode;
};

type ButtonTextProps = {
  children: ReactNode;
};

type ButtonIconProps = {
  children: ReactNode;
};

function Button({ children, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      className="h-12 bg-lime-400 rounded-md flex-row justify-center items-center"
      {...rest}
    >
      {children}
    </TouchableOpacity>
  );
}

const ButtonText = ({ children }: ButtonTextProps) => {
  return (
    <Text className="text-black font-heading mx-2 text-base ">{children}</Text>
  );
};

const ButtonIcon = ({ children }: ButtonIconProps) => {
  return children;
};

//insere elementos dentro do Button
Button.Text = ButtonText;
Button.Icon = ButtonIcon;

export { Button };
