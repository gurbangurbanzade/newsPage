"use client";
import { useStore } from "@/store/cart";
import { ILatestNews } from "@/types/type";
import React from "react";

interface IProps {
  latestnews: ILatestNews[];
}
const CarContainer = ({ latestnews }: IProps) => {
  const { customCart, setFields } = useStore();
  console.log("cart", customCart);

  const increment = (id: string) => {
    const newCart = customCart.map((elem) => {
      if (elem.id == id) {
        elem.count++;
      }
      return elem;
    });

    setFields({
      customCart: newCart,
    });
  };

  const decrement = (id: string) => {
    const newCart = customCart
      .map((elem, index) => {
        if (elem.id == id) {
          elem.count--;
        }
        return elem;
      })
      .filter((elem) => elem.count > 0);

    setFields({
      customCart: newCart,
    });
  };

  //   const price = customCart.reduce((acc, item) => {
  //     return acc + item.price;
  //   }, 0);

  return (
    <div>
      <h1>Cart</h1>

      <ul>
        {customCart.map((item) => {
          return (
            <li>
              {latestnews.find((elem) => elem.id == item.id)?.title}-
              {item.count}
              <button
                onClick={() => {
                  increment(item.id);
                }}
              >
                +
              </button>
              <br />
              <button
                onClick={() => {
                  decrement(item.id);
                }}
              >
                -
              </button>
            </li>
          );
        })}
      </ul>
      <h1>Total price-</h1>
    </div>
  );
};

export default CarContainer;
