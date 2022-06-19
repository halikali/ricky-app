import { Link } from "react-router-dom";

import style from "./CharacterCard.module.css";

const CharacterCard = ({ character }) => {
  const { name, image, status, id } = character;

  return (
    <Link
      to={`/details/${name.split(" ").join("+")}-${id}`}
      className={style.characterCard}
      style={{ opacity: status !== "Alive" && 0.5 }}
    >
      <img src={image} alt="character" className={style.avatar} />
      <p className={style.characterName}>{name}</p>
    </Link>
  );
};

export default CharacterCard;
