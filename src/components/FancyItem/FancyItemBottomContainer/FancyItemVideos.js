/**
 * FancyItemVideos.js
 * Component contains the fancyitem videos, displays null if there is none present
 * Future scope: Display the video with thumbnail from API
 */
import React from "react";
import {
	ItemContainer,
	ItemDetails,
	ItemIcon,
	ItemName
} from "../../../styles/componentStyles/FancyItem/FancyItemBottomContainer/FancyItemBooks";

import { FaVideo } from "react-icons/fa";

export default function FancyItemVideos() {
	return (
		<React.Fragment>
			<ItemContainer>
				<ItemDetails>
					<ItemIcon>
						<FaVideo size={24} />
					</ItemIcon>
					<ItemName>Fountain head</ItemName>
				</ItemDetails>
				<ItemDetails>
					<ItemIcon>
						<FaVideo size={24} />
					</ItemIcon>
					<ItemName>Fountain head</ItemName>
				</ItemDetails>
				<ItemDetails>
					<ItemIcon>
						<FaVideo size={24} />
					</ItemIcon>
					<ItemName>Fountain head</ItemName>
				</ItemDetails>
				<ItemDetails>
					<ItemIcon>
						<FaVideo size={24} />
					</ItemIcon>
					<ItemName>Fountain head</ItemName>
				</ItemDetails>
				<ItemDetails>
					<ItemIcon>
						<FaVideo size={24} />
					</ItemIcon>
					<ItemName>Fountain head</ItemName>
				</ItemDetails>
				<ItemDetails>
					<ItemIcon>
						<FaVideo size={24} />
					</ItemIcon>
					<ItemName>Fountain head</ItemName>
				</ItemDetails>
				<ItemDetails>
					<ItemIcon>
						<FaVideo size={24} />
					</ItemIcon>
					<ItemName>Fountain head</ItemName>
				</ItemDetails>
				<ItemDetails>
					<ItemIcon>
						<FaVideo size={24} />
					</ItemIcon>
					<ItemName>Fountain head</ItemName>
				</ItemDetails>
				<ItemDetails>
					<ItemIcon>
						<FaVideo size={24} />
					</ItemIcon>
					<ItemName>Fountain head</ItemName>
				</ItemDetails>
			</ItemContainer>
		</React.Fragment>
	);
}
