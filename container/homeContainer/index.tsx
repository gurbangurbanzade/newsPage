import LatestNews from "@/components/home/latestNews";
import { ILatestNews } from "@/types/type";
import React from "react";

interface IProps {
  latestnews: ILatestNews[];
}
const HomeContainer = ({ latestnews }: IProps) => {
  return (
    <main>
      <h1>HomeContainer</h1>
      <LatestNews latestnews={latestnews} />
    </main>
  );
};

export default HomeContainer;
