import CharacterCard from "components/CharacterCard";
import style from "./homepage.module.css";

const HomePage = () => {
  return (
    <div className={style.page}>
      <h1 className={style.title}>Rick And Morty</h1>
      <div className={style.cardWrapper}>
        {Array.from({ length: 20 }).map((_, index) => (
          <CharacterCard key={index} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
