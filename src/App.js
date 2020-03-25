import React from "react";
import { createGlobalStyle } from "styled-components";
import "./App.css";
import Login from "./components/Login/Login";
import GenreDetails from "./components/GenreDetails/GenreDetails";
import GenreFancyItem from "./components/GenreFancyItem/GenreFancyItem";
import FancyItem from "./components/FancyItem/FancyItem";
import GlobalStyle from "../src/styles/applicationStyles/globalStyles";

function App() {
	return (
		<React.Fragment>
			<GlobalStyle />
			<FancyItem />
		</React.Fragment>
	);
}

export default App;
