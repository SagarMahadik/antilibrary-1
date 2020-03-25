/**
 * File Name: appComponents.js
 * Contains the styling for the reusable components for application.
 */

import styled from "styled-components";

export const Quote = styled.div`
	display: block;
	margin: auto;
	color: rgb(253, 253, 253);
	font-size: 1.2rem;
	text-align: center;
	width: auto;
	height: auto;
	padding: 5px;
`;

export const Button = styled.div`
	display: inline-block;
	color: white;
	height: 20px;
	width: 40%;
	margin: auto;
	text-align: center;
	font-size: 1.2em;
	padding: 0.2em 0.2em 0.5em;
	border: 2px solid white;
	border-radius: 5px;
	display: block;
	position: relative;
	background-color: rgba(222, 184, 135, 0.349);
	top: 85%;
`;
