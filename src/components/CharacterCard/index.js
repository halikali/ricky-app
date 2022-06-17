import style from "./CharacterCard.module.css";

const CharacterCard = () => {
  return (
    <div className={style.characterCard}>
      <img
        src="https://images.unsplash.com/photo-1655338434907-0de0591d7665?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
        alt="character"
        className={style.avatar}
      />
      <p className={style.characterName}>Character Name</p>
    </div>
  );
};

export default CharacterCard;
