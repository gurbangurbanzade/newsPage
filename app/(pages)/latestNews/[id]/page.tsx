import { getLatestNewsById } from "@/api/service";
import LatestNewsContainer from "@/container/latestNewsDetailContainer";
import React from "react";

interface IParams {
  params: { id: string };
}

const LatestNewsDetailPage = async ({ params }: IParams) => {
  const { id } = params;

  const newsPromise = await getLatestNewsById(id);

  const [news] = await Promise.all([newsPromise]);

  return <LatestNewsContainer news={news} />;
};

export default LatestNewsDetailPage;
