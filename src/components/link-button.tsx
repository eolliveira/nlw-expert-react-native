import { Link, LinkProps } from "expo-router";

type LinkButtonProps = LinkProps<string> & {
  text: string;
};

export const LinkButton = ({ text, ...rest }: LinkButtonProps) => {
  return (
    <Link className="text-slate-400 text-center text-base font-body" {...rest}>
      {text}
    </Link>
  );
};
