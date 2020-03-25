/**
 * FancyItemInterviews.js
 * Contains the component for the fancyitem's interview
 * Future scope create style like video thumbanail..Needs bit of thinking!!
 */

import React from "react";

import {
	ItemContainer,
	ItemDetails,
	ItemIcon,
	ItemName
} from "../../../styles/componentStyles/FancyItem/FancyItemBottomContainer/FancyItemBooks";

import { FaCouch } from "react-icons/fa";

export default function FancyItemInterviews() {
	return (
		<ItemContainer>
			<ItemDetails>
				<ItemIcon>
					<FaCouch size={24} />
				</ItemIcon>
				<ItemName>Fountain head</ItemName>
			</ItemDetails>
		</ItemContainer>
	);
}
