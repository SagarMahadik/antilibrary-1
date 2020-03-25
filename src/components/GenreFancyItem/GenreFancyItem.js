/**
 * File Name : GenreFancyItem.js
 * State value to be used to call the API and set Theme
 * API to be called to fetch the fancyitem for the genre
 * ThemeProvider to be used to customize according to genre
 * 1. Gradient stop color 2. overlay for fancyItem image
 * Developer Note:
 * Parallax effect to be added
 * Position sticky needs rework
 */

import React from "react";
import { ThemeProvider } from "styled-components";

import GenreFancyItemGradient from "./GenreFancyItemGradient";

import GenreFancyItemInformation from "./GenreFancyItemInformation";

import {
	GenreDetaills,
	ContentContainer,
	GradientContainer
} from "../../styles/componentStyles/GenreFancyItem/genreFancyItem";

const GenreFancyItem = () => {
	return (
		<ThemeProvider theme={{ genre: "grandPhilosophers" }}>
			<GradientContainer>
				<GenreFancyItemGradient />
				<GenreDetaills>The Grand Philosophers</GenreDetaills>
			</GradientContainer>
			<ContentContainer>
				<GenreFancyItemInformation />
				<GenreFancyItemInformation />
				<GenreFancyItemInformation />
				<GenreFancyItemInformation />
				<GenreFancyItemInformation />
				<GenreFancyItemInformation />
				<GenreFancyItemInformation />
				<GenreFancyItemInformation />
				<GenreFancyItemInformation />
			</ContentContainer>
		</ThemeProvider>
	);
};

export default GenreFancyItem;
