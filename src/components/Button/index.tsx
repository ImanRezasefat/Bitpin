"use client";
import React from "react";
import { cva, VariantProps } from "class-variance-authority";
import { Button as HeadlessButton } from "@headlessui/react";
import { ButtonProps } from "./button.types";
const buttonStyle = cva("flex flex-row gap-x-4", {
  variants: {
    buttonType: {
      contained: "hover:bg-opacity-75 text-white bg-[--color]",
      outline:
        "bg-transparent border border-[--color] text-[--color] bg-white ",
    },
    color: {
      primary: ["[--color:theme(colors.primary)]"],
      secondary: ["[--color:theme(colors.secondary)]"],
      danger: ["[--color:theme(colors.danger)]"],
    },
    size: {
      default: ["text-base", "py-2", "px-4"],
      small: ["text-sm", "py-1", "px-2"],
      large: ["text-lg", "py-3", "px-6"],
      xxl: ["text-2xl", "py-4", "px-8"],
    },
    rounded: {
      default: "rounded-md",
      sm: "rounded-sm",
      lg: "rounded-lg",
      xl: "rounded-xl",
      xxl: "rounded-2xl",
      none: "rounded-none",
      full: "rounded-full",
    },
  },
  compoundVariants: [
    {
      buttonType: "contained",
      size: "default",
      color: "primary",
      rounded: "default",
    },
  ],
  defaultVariants: {
    buttonType: "contained",
    size: "default",
    color: "primary",
    rounded: "default",
  },
});

export const Button = ({
  rounded,
  buttonType,
  color,
  children,
  ...props
}: ButtonProps) => {
  return (
    <HeadlessButton
      type="button"
      className={buttonStyle({
        buttonType,
        color,
        rounded,
      })}
      {...props}>
      {children}
    </HeadlessButton>
  );
};
