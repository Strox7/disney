import { getDiscoverMovies } from "@/lib/getMovies";
import CarouselsBanner from "./CarouselsBanner";

type Props = {
  id?: string;
  keywords: string;
};

async function CarouselBanneerWrapper({ id, keywords }: Props) {
  const movies = await getDiscoverMovies(id, keywords);
  return <CarouselsBanner movies={movies} />;
}
export default CarouselBanneerWrapper;
