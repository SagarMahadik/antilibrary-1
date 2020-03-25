/**
 * Name :FancyItemBooks.js
 * Contains the fancyitem Books if there are some, the component displays null if there is none
 * Future scope: To render the Book cover image with 3d style. Check for Gimp or css
 */

import React from "react";
import {
	ItemContainer,
	ItemDetails,
	ItemIcon,
	ItemName
} from "../../../styles/componentStyles/FancyItem/FancyItemBottomContainer/FancyItemBooks";
import { FaBook } from "react-icons/fa";

export default function FancyItemBooks() {
	return (
		<React.Fragment>
			<ItemContainer>
				<ItemDetails>
					<ItemIcon>
						<FaBook size={24} />
					</ItemIcon>
					<ItemName>Fountain head</ItemName>
				</ItemDetails>
			</ItemContainer>
		</React.Fragment>
	);
}
