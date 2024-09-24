"use client";
import { IProducts } from "@/types/type";
import React, { useState } from "react";

interface IProps {
  products: IProducts[];
}
const MainProducts = ({ products }: IProps) => {
  const [data, setData] = useState<IProducts[]>(products);
  const [customToogle, setCustomToogle] = useState<string>("");

  const breadCrumb = ["", "", "", "", ""];
  const search = (e: any) => {
    // console.log(e.target.value);
    const word = e.target.value.trim().toLowerCase();
    const filteredDFata = products.filter((item) =>
      item.title.toLowerCase().includes(word)
    );
    setData(filteredDFata);
  };
  const sort = (e: any) => {
    // const sortedData = [...products.sort((a, b) => a.price - b.price)];
    // console.log(sortedData, "sortedData");
    // setData(sortedData);
    //////////////////////////////////////
  };

  return (
    <div>
      MainProducts
      <div>
        <div>
          <input
            type="text"
            placeholder="Search"
            onChange={(e) => {
              search(e);
            }}
          />
        </div>

        <div>
          <button
            onClick={(e) => {
              sort(e);
            }}
          >
            Sort low to high
          </button>
        </div>

        <ul>
          {data && data.map((item) => <li key={item.id}>{item.title}</li>)}
        </ul>
      </div>
    </div>
  );
};

export default MainProducts;
