import LatestNews from "@/components/home/latestNews";
import { ILatestNews } from "@/types/type";
import React from "react";

interface IProps {
  news: ILatestNews;
}
const LatestNewsDetailContainer = ({ news }: IProps) => {
  return (
    <main>
      <h1>Detail page</h1>

      <h2>{news.title}</h2>
      {/* <LatestNews latestnews={latestnews} /> */}
    </main>
  );
};

export default LatestNewsDetailContainer;
