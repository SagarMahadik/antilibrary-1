import React from "react";
import { ThemeProvider } from "styled-components";

import FancyItemTopContainer from "./FancyItemTopContainer/FancyItemTopContainer";

import FancyItemBottomContainer from "./FancyItemBottomContainer/FancyItemBottomContainer";

export default function FancyItem() {
	return (
		<ThemeProvider theme={{ genre: "luminaries" }}>
			<FancyItemTopContainer />
			<FancyItemBottomContainer />
		</ThemeProvider>
	);
}
