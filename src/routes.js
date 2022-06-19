import CharacterDetailPage from "pages/CharacterDetail";
import HomePage from "pages/HomePage";

const Routes = [
  {
    name: "home",
    path: "/",
    component: <HomePage />,
  },
  {
    name: "details",
    path: "/details/:id",
    component: <CharacterDetailPage />,
  },
];

export default Routes;
