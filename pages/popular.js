import { useEffect, useState } from "react";
import Navigation from "../component/Navigation";
import Pagination from "../component/Pagination";
import axios from "axios";
import AnimeList from "../component/AnimeList";
import Footer from "../component/Footer";
import Search from "../component/Search";
import HeadTag from "../component/HeadTag";
import Category from "../component/Category";

const Popular = () => {
  const [page, setPage] = useState(1);
  const [topAnime, setTopAnime] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/anime?page=${page}`
      );
      //   const pagination = response.data.pagination.last_visible_page
      setTopAnime(response.data);
    } catch (error) {
      console.log("masuk ke error", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  return (
    <div className="container">
      <HeadTag title='Popular'/>
      <Navigation />
      <Search/>
      <Category title='POPULAR ANIME'/>
      <AnimeList data={topAnime} />
      <Pagination page={page} last={topAnime.pagination?.last_visible_page} setPage={setPage} />
      <Footer/>
    </div>
  );
};

export default Popular;
