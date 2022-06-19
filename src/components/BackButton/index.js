import { useNavigate } from "react-router-dom";

const BackButton = () => {
  let navigate = useNavigate();

  const onClickHandler = () => {
    navigate(-1);
  };

  return (
    <div onClick={() => onClickHandler()} className="cursor-pointer w-5 h-10 flex items-center text-fuchsia-500">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20 11H7.83L13.42 5.41L12 4L4 12L12 20L13.41 18.59L7.83 13H20V11Z"
          fill="currentColor"
        />
      </svg>
    </div>
  );
};

export default BackButton;
