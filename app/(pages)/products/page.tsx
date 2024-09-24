import {
  getAllCategory,
  getAllColors,
  getAllProducts,
  getAllSizes,
} from "@/api/service";
import ProductContainer from "@/container/productsContainer";
import React from "react";

// {
//     category?:string;
//     color?:string;
//     size?:string;
// }

const ProductsPage = async ({ searchParams }: any) => {
  const categoryPromise = await getAllCategory();
  const colorsPromise = await getAllColors();
  const sizesPromise = await getAllSizes();
  const productsPromise = await getAllProducts(searchParams);

  const [category, colors, sizes, products] = await Promise.all([
    categoryPromise,
    colorsPromise,
    sizesPromise,
    productsPromise,
  ]);

  return (
    <ProductContainer
      category={category}
      colors={colors}
      sizes={sizes}
      products={products}
    />
  );
};

export default ProductsPage;
