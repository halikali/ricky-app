import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { useGetCharactersQuery } from "Services/RickAndMorty";
import { setTotalPage } from "Slices/PageSlice";
import CharacterCard from "components/CharacterCard";
import Pagination from "components/Pagination";
import style from "./homepage.module.css";

const HomePage = () => {
  const dispatch = useDispatch();

  const activePage = useSelector((state) => state.page.activePage);
  const { data, error, isLoading } = useGetCharactersQuery(activePage);
  const pageCount = data?.info?.pages;

  useEffect(() => {
    dispatch(setTotalPage(pageCount));
  }, [pageCount, dispatch]);

  return (
    <div className={style.page}>
      {isLoading && <p>Loading...</p>}
      {error && <p>error!</p>}

      <h1 className={style.title}>Rick And Morty</h1>
      <div className={style.cardWrapper}>
        {data &&
          data.results.map((character) => (
            <CharacterCard character={character} key={character.id} />
          ))}
      </div>
      <Pagination />
    </div>
  );
};

export default HomePage;
