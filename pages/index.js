import AnimeList from "../component/AnimeList";
import Footer from "../component/Footer";
import Navigation from "../component/Navigation";
import Search from "../component/Search";
import axios from "axios";

export default function Home({data}) {
  return (
    <div>
      <Navigation />
      <Search />
      <AnimeList data={data} />
      <Footer/>
    </div>
  );
}

export const getStaticProps = async () => {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_BASE_URL}/top/anime?limit=8`
  );
  const animeData = response.data;
  return {
    props: {
      data: animeData,
    },
  };
};


