"use client";
import React, { useState } from "react";
import styles from "./style.module.scss";
import { ICategory } from "@/types/type";
import { useRouter } from "next/navigation";
interface IProps {
  category: ICategory[];
  colors: ICategory[];
  sizes: ICategory[];
}

interface ISelected {
  category: string;
  color: string;
  size: string;
}

const Filter = ({ category, colors, sizes }: IProps) => {
  //   const [selected, setSelected] = useState<ISelected>({
  //     category: "",
  //     color: "",
  //     size: "",
  //   });
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>("");
  const [selectedColorId, setSelectedColorId] = useState<string>("");
  const [selectedSizeId, setSelectedSizeId] = useState<string>("");

  const route = useRouter();

  const goToRoute = (key: string, item: ICategory) => {
    const params = new URLSearchParams(window.location.search);

    if (params.has(key) && params.get(key) === item.name) {
      params.delete(key);

      switch (key) {
        case "category":
          setSelectedCategoryId("");
          break;
        case "color":
          setSelectedColorId("");
          break;
        case "size":
          setSelectedSizeId("");
          break;

          break;
        default:
        // code block
      }
    } else {
      params.set(key, item.name);

      switch (key) {
        case "category":
          setSelectedCategoryId(item.id);
          break;
        case "color":
          setSelectedColorId(item.id);
          break;
        case "size":
          setSelectedSizeId(item.id);
          break;

          break;
        default:
        // code block
      }
    }

    route.push(`/products?${params.toString()}`);
  };

  return (
    <div>
      {category &&
        category.map((item) => (
          <button
            onClick={() => {
              goToRoute("category", item);
            }}
            className={`${styles["btn"]} ${
              selectedCategoryId === item.id ? styles["selected"] : ""
            }`}
            key={item.id}
          >
            {item.name}
          </button>
        ))}

      <div>
        {colors &&
          colors.map((item) => (
            <button
              onClick={() => {
                goToRoute("color", item);
              }}
              className={`${styles["btn"]} ${
                selectedColorId === item.id ? styles["selected"] : ""
              }`}
              key={item.id}
            >
              {item.name}
            </button>
          ))}
      </div>
      <div>
        {sizes &&
          sizes.map((item) => (
            <button
              onClick={() => {
                goToRoute("size", item);
              }}
              className={`${styles["btn"]} ${
                selectedSizeId === item.id ? styles["selected"] : ""
              }`}
              key={item.id}
            >
              {item.name}
            </button>
          ))}
      </div>
      <div></div>
    </div>
  );
};

export default Filter;
