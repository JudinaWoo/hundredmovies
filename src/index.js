import "./default.css";

import Layout from "./Layout";
import SearchScreen from "./SearchScreen";
import FavoritesScreen from "./FavoritesScreen";

const body = document.getElementsByTagName("body")[0];

const searchScreen = new SearchScreen();
const favoritesScreen = new FavoritesScreen();
const layout = new Layout({
  left: searchScreen.render(),
  right: favoritesScreen.render(),
});

body.appendChild(layout.render());
