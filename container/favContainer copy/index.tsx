"use client";
import { useStore } from "@/store/cart";
import React from "react";

const FavContainer = () => {
  const { customFav, setFields } = useStore();
  console.log("customFav", customFav);

  return <div>Counter</div>;
};

export default FavContainer;
