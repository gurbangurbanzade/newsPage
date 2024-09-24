import { ILatestNews } from "@/types/type";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./style.module.scss";

interface IProps {
  latestnews: ILatestNews[];
}

const LatestNews = ({ latestnews }: IProps) => {
  return (
    <section>
      <Link href={"/latestNews"}>See Alls</Link>
      <div className={styles["latestNews"]}>
        {latestnews &&
          latestnews.map((news) => (
            <Link href={`/latestNews/${news.id}`}>
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
              </div>
            </Link>
          ))}
      </div>
    </section>
  );
};

export default LatestNews;
