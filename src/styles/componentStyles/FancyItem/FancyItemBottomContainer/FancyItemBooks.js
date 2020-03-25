import styled from "styled-components";

export const ItemContainer = styled.div`
	position: relative;
	display: flex;
	margin-left: 20px;
	flex-flow: column wrap;
`;

export const ItemDetails = styled.a`
	height: 42px;
	display: flex;
	flex-flow: row wrap;
	margin-top: 8px;
	width: 100%;
	align-self: center;
`;

export const ItemIcon = styled.div`
	margin-left: 20px;
	width: 12px;
	color: blueviolet;
`;

export const ItemName = styled.div`
	margin-left: 30px;
	padding: 5px;
`;
