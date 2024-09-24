import { getLatestNews } from "@/api/service";
import HomeContainer from "@/container/homeContainer";

export default async function Home() {
  const latestNewsPromise = await getLatestNews();

  const [latestnews] = await Promise.all([latestNewsPromise]);

  return <HomeContainer latestnews={latestnews} />;
}
