import { zenLoop } from "@/app/shared/fonts/font";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

interface Props {
  type?: "button" | "submit" | "reset";
  isFull?: boolean;
  isPrimary: boolean;
  value: string;
  onClick: () => void;
}

const Button = ({
  type = "button",
  isFull = false,
  value,
  isPrimary,
  onClick,
}: Props) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${isFull ? "w-full block" : "w-fit"}
        hover:bg-[var(--filler2-color)] 
           transition-all duration-300 text-xl text-[var(--primary-color)] ${
             isPrimary ? "bg-[var(--deep-color)]" : "bg-[var(--filler-color)]"
           } relative px-7 py-2 rounded-md cursor-pointer overflow-hidden before:absolute before:inset-0 before:bg-white/20
           before:translate-x-[-100%] hover:before:translate-x-[100%]
           before:transition-transform before:duration-500 transform hover:scale-105 active:scale-95 ${
             zenLoop.className
           } capitalize`}
    >
      {value}
    </button>
  );
};

export default Button;
