import CarouselBanneerWrapper from "@/components/CarouselBanneerWrapper";
import MoviesCarousel from "@/components/MoviesCarousel";
import {
  getPopularMovies,
  getTopRatedMovies,
  getUpcomingMovies,
} from "@/lib/getMovies";

export default async function Home() {
  const upCommingMovies = await getUpcomingMovies();
  const toRatedMovies = await getTopRatedMovies();
  const popularMovies = await getPopularMovies();

  return (
    <main className="">
      {/* carouselBannerWrapper */}
      <CarouselBanneerWrapper />

      <div className="flex flex-col space-y-2 xl:-mt-48">
        <MoviesCarousel movies={upCommingMovies} title="Upcoming" />
        <MoviesCarousel movies={toRatedMovies} title="TopRated" />
        <MoviesCarousel movies={popularMovies} title="Popular" />
      </div>
    </main>
  );
}
