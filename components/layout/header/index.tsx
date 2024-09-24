import Link from "next/link";
import React from "react";
import styles from "./style.module.scss";

const Header = () => {
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
        </ul>
      </div>
    </section>
  );
};

export default Header;
