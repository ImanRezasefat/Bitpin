import { ButtonProps as DefaultButtonProps } from "@headlessui/react";

type ButtonType = "contained" | "outline";
type Color = "primary" | "secondary" | "danger";
type Rounded = "default" | "sm" | "lg" | "xl" | "xxl" | "none" | "full";

export interface ButtonProps extends DefaultButtonProps {
  buttonType?: ButtonType;
  color?: Color;
  rounded?: Rounded;
}
