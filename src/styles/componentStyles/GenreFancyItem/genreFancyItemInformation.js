/**
 * File Name : genreFancyItemInformation.js
 * Variable styles : textcolor and gradient set according to the theme
 * Check "theme" in the "styles/applicationStyles" for more info.
 * Developer Note : ImageWrapper style needed some patch work to get overlay gardient in shape
 */

import { textColor, gradient } from "../../applicationStyles/genreTheme";
import styled from "styled-components";

export const GenreFancyItemContainer = styled.div`
	text-decoration: none;
	color: white;
`;

export const FancyItemBox = styled.div`
	display: flex;
	flex-direction: row;
	width: 100%;
	margin-top: 5px;
	margin-bottom: 5px;
	margin-left: 10px;
	padding: 15px;
`;

export const ImageWrapper = styled.div`
	display: inline-block;
	width: 80px;
	height: 80px;
	border-radius: 50%;
	background: ${gradient};
`;

export const Image = styled.img`
	width: 80px;
	height: 80px;
	object-fit: cover;
	border-radius: 50%;
	position: relative;
	display: block;
	z-index: -1;
`;

export const FancyItemContent = styled.div`
	text-align: left;
	margin-left: 1.8em;
	text-decoration: none;
	color: white;
`;

export const NotableWork = styled.p`
	margin-top: -10px;
	color: ${textColor};
`;
