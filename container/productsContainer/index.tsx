import Filter from "@/components/products/filter";
import MainProducts from "@/components/products/mainProducts";
import { ICategory, IProducts } from "@/types/type";
import React from "react";

interface IProps {
  category: ICategory[];
  colors: ICategory[];
  sizes: ICategory[];
  products: IProducts[];
}

const ProductContainer = ({ category, colors, sizes, products }: IProps) => {
  return (
    <main>
      <Filter category={category} colors={colors} sizes={sizes} />
      <MainProducts products={products} />
    </main>
  );
};

export default ProductContainer;
