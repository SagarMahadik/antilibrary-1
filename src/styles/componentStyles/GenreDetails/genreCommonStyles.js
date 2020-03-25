/**
 * File Name : genreCommonStyles.js
 * Collection of the common styles used in the GenreDetails component
 */

import styled from "styled-components";

export const GenreContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	padding: 10px;
	margin-top: 60px;
`;

export const Genre = styled.a`
	display: block;
	margin: auto;
	color: whitesmoke;
	margin-top: 30px;
	border-radius: 7px;
	width: 95%;
	height: 200px;
	text-align: center;
	background-size: cover;
	background-position: top;
`;

export const GenreName = styled.div`
	margin-top: 80px;
	padding: 5px;
	font-size: 1.5rem;
	line-height: 1.7;
	text-align: center;
`;
