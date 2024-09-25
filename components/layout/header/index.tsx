"use client";
import Link from "next/link";
import React from "react";
import styles from "./style.module.scss";
import { useStore } from "@/store/cart";

const Header = () => {
  const { customCart } = useStore();

  // const count = customCart.reduce((acc, item) => {
  //   return acc + item.count;
  // }, 0);

  let count = 0;

  for (let i = 0; i < customCart.length; i++) {
    count += customCart[i].count;
  }

  const navElements = [
    { title: "Home", href: "/" },
    { title: "About", href: "/about" },
    { title: "FAQ", href: "/faq" },
    {
      title: "Category",
      href: "/category",
      subMenu: [
        { title: "World", href: "/category/world" },
        { title: "Sport", href: "/category/sport" },
        { title: "Magazine", href: "/category/magazina" },
      ],
    },
  ];
  return (
    <section>
      <div className={styles["header"]}>
        <ul className={styles["header__nav"]}>
          {navElements &&
            navElements.map((navElement, index) => (
              <li
                className={navElement.subMenu && styles["parent"]}
                key={index}
              >
                <Link href={navElement.href}>{navElement.title}</Link>

                {navElement.subMenu && (
                  <ul className={styles["header__nav__subMenu"]}>
                    {navElement.subMenu.map((subMenu, index) => (
                      <li key={index}>
                        <Link href={subMenu.href}>{subMenu.title}</Link>{" "}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}

          <li>
            <Link href="/cart">
              Cart
              <span>-{count}</span>
            </Link>
          </li>
          <li>
            <Link href="/fav">
              Favorites
              <span>-{2}</span>
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Header;
