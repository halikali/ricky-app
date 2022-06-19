import { Route, Routes } from "react-router-dom";

import routes from "routes";
import style from "./app.module.css";

const App = () => {
  return (
    <div className={style.main}>
      <Routes>
        {routes.map((item) => (
          <Route path={item.path} key={item.name} element={item.component} />
        ))}
      </Routes>
    </div>
  );
};

export default App;
