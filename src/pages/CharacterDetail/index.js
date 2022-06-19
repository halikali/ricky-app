import { useParams } from "react-router-dom";

import BackButton from "components/BackButton";
import { useGetCharacterByIdQuery } from "Services/RickAndMorty";
import style from "./CharacterDetail.module.css";

const CharacterDetailPage = () => {
  const params = useParams();

  const { data, error, isLoading } = useGetCharacterByIdQuery(
    params.id.split("-")[1]
  );

  return (
    <div className={style.main}>
      <div className={style.card}>
        <div className={style.backButton}>
          <BackButton />
        </div>
        <div className={style.cardBody}>
          <div className={style.detailsWrapper}>
            <img src={data?.image} alt="character" className={style.avatar} />
            <h1 className={style.title}>{data?.name}</h1>
            <p className={style.characterInfo}>
              <span className={style.label}>origin:</span>
              {data?.origin?.name}
            </p>
            <p className={style.characterInfo}>
              <span className={style.label}>gender:</span>
              {data?.gender}
            </p>
            <p className={style.characterInfo}>
              <span className={style.label}>species:</span>
              {data?.species}
            </p>
            <p
              className={style.characterInfo}
              style={{
                color: data?.status === "Alive" ? "green" : "red",
                fontWeight: "bold",
              }}
            >
              <span className={style.label}>status:</span>
              {data?.status}
            </p>
          </div>
          <div className={style.episodesWrapper}>
            <h2 className={style.title}>Episodes</h2>
            <ul className={style.episodesList}>
              {data ? (
                Array.from(data.episode)
                  .map((item, i) => (
                    <li key={i}>
                      <a
                        onClick={() =>
                          window.open(
                            `https://www.google.com/search?q=rick+and+morty+episode+${
                              item.split("episode/")[1]
                            }`
                          )
                        }
                      >
                        {item}
                      </a>
                    </li>
                  ))
              ) : (
                <p>Loading...</p>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterDetailPage;
