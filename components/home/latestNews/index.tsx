"use client";
import { ILatestNews } from "@/types/type";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./style.module.scss";
import { useStore } from "@/store/cart";

interface IProps {
  latestnews: ILatestNews[];
}

const LatestNews = ({ latestnews }: IProps) => {
  const { customCart, customFav, setFields } = useStore();

  const addToCart = (id: string) => {
    console.log(id);

    // const newCount = productCount + 1;
    // const newCart = [...customCart, id];

    const foundProd = customCart.find((elem) => elem.id == id);

    if (foundProd) {
      const newCart = customCart.map((elem) => {
        if (elem.id === foundProd.id) {
          elem.count = elem.count + 1;
        }
        return elem;
      });
      setFields({
        customCart: newCart,
      });
    } else {
      setFields({
        customCart: [...customCart, { id: id, count: 1 }],
      });
    }
  };
  const addToFav = (id: string) => {
    const foundProd = customFav.find((elem) => elem == id);

    console.log(foundProd, "find fav");

    if (foundProd) {
      const newFav = customFav.filter((elem) => elem != id);

      setFields({
        customFav: newFav,
      });
    } else {
      setFields({
        customFav: [...customFav, id],
      });
    }
  };

  return (
    <section>
      <Link href={"/latestNews"}>See Alls</Link>
      <div className={styles["latestNews"]}>
        {latestnews &&
          latestnews.map((news) => (
            <div
              key={news.id}
              // href={`/latestNews/${news.id}`}
            >
              <div className={styles["cart"]}>
                <div className={styles["cart__imgBox"]}>
                  <Image
                    src={news.cover}
                    alt="news"
                    fill={true}
                    style={{ objectFit: "cover", objectPosition: "center" }}
                  />
                </div>
                <p>{news.title}</p>
                <>
                  <button
                    onClick={() => {
                      addToCart(news.id);
                    }}
                  >
                    Add to cart
                  </button>
                </>
                <>
                  <button
                    onClick={() => {
                      addToFav(news.id);
                    }}
                  >
                    Add to Fav
                  </button>
                </>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};

export default LatestNews;
