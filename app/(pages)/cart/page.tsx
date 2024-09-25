import { getLatestNews } from "@/api/service";
import CarContainer from "@/container/cartContainer";
import React from "react";

const CartPage = async () => {
  const latestNewsPromise = await getLatestNews();

  const [latestnews] = await Promise.all([latestNewsPromise]);

  return <CarContainer latestnews={latestnews} />;
};

export default CartPage;
