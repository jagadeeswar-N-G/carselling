"use client";
import { customButtonProps } from "@/types";
import React from "react";

function CustomButton({ title, buttonStyles, handleClick }: customButtonProps) {
  return (
    <button
      disabled={false}
      type={"button"}
      className={buttonStyles}
      onClick={handleClick}
    >
      <p>{title}</p>
    </button>
  );
}

export default CustomButton;
