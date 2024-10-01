"use client";
import { useStore } from "@/store/cart";
import React, { useEffect, useState } from "react";

const AboutContainer = () => {
  const { color, size, category, colorId, categoryId, sizeId, setFields } =
    useStore();

  const [data, setData] = useState([]);
  const [colors, setColors] = useState([]);
  const [sizes, setSizes] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  const fetchProd = async () => {
    const resp = await fetch("http://localhost:3000/products");

    const data = await resp.json();

    let newFilter = data;
    if (color) {
      newFilter = [...newFilter].filter((item) => item.color == colorId);
    }
    if (size) {
      newFilter = [...newFilter].filter((item) => item.size == sizeId);
    }
    if (category) {
      newFilter = [...newFilter].filter((item) => item.category == categoryId);
    }
    // setData(data);

    console.log(newFilter, "newFilter");
    setFilteredData(newFilter);
  };
  const fetchColor = async () => {
    const resp = await fetch("http://localhost:3000/colors");

    const data = await resp.json();
    setColors(data);
  };
  const fetchSizes = async () => {
    const resp = await fetch("http://localhost:3000/sizes");

    const data = await resp.json();
    setSizes(data);
  };
  const fetchCategories = async () => {
    const resp = await fetch("http://localhost:3000/category");
    const data = await resp.json();
    setCategories(data);
  };

  useEffect(() => {
    fetchProd();
    fetchColor();
    fetchSizes();
    fetchCategories();
  }, []);

  const doFilter = (id: string, type: string) => {
    console.log("filter");
    console.log(id, "id");

    let newFilter = data.length == filteredData.length ? data : filteredData;
    console.log(newFilter, "newFilter");
    if (color) {
      newFilter = [...newFilter].filter((item) => item.color == id);
    }
    if (size) {
      newFilter = [...newFilter].filter((item) => item.size == id);
    }
    if (category) {
      newFilter = [...newFilter].filter((item) => item.category == id);
    }

    setFilteredData(newFilter);
  };

  useEffect(() => {
    fetchProd();
  }, [color, size, category, colorId, categoryId, sizeId]);

  return (
    <main>
      <h1>AboutContainer</h1>
      <button
        onClick={() => {
          setFields({ color: false, size: false, category: false });
        }}
      >
        reset filter
      </button>
      {colors &&
        colors.map((item, index) => (
          <button
            onClick={() => {
              // doFilter(item.id, "color");
              setFields({ color: true, colorId: item.id });
            }}
            key={index}
          >
            {item.name}
          </button>
        ))}
      <hr />
      {sizes &&
        sizes.map((item, index) => (
          <button
            onClick={() => {
              // doFilter(item.id, "size");
              setFields({ size: true, sizeId: item.id });
            }}
            key={index}
          >
            {item.name}
          </button>
        ))}
      <hr />
      {categories &&
        categories.map((item, index) => (
          <button key={index}>{item.name}</button>
        ))}
      <hr />
      <ul>
        {filteredData &&
          filteredData.map((item) => <li key={item}>{item.title}</li>)}
      </ul>
    </main>
  );
};

export default AboutContainer;
