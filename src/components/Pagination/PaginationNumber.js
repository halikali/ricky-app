import { useSelector } from "react-redux/";

const PaginationNumber = ({ text }) => {
  const activePage = useSelector((state) => state.page.activePage);

  return (
    <span className={activePage === text ? "text-fuchsia-400" : null}>
      {text}
    </span>
  );
};

export default PaginationNumber;
