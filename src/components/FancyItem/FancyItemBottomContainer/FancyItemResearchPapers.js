/**
 * FancyItemResearchPapers.js
 * Contains the researh papers of technical fancyitems
 * Future scope: Create paper like style for the component
 */

import React from "react";
import {
	ItemContainer,
	ItemDetails,
	ItemIcon,
	ItemName
} from "../../../styles/componentStyles/FancyItem/FancyItemBottomContainer/FancyItemBooks";

import { FaArchive } from "react-icons/fa";

export default function FancyItemResearchPapers() {
	return (
		<React.Fragment>
			<ItemContainer>
				<ItemDetails>
					<ItemIcon>
						<FaArchive size={24} />
					</ItemIcon>
					<ItemName>Fountain head</ItemName>
				</ItemDetails>
			</ItemContainer>
		</React.Fragment>
	);
}
