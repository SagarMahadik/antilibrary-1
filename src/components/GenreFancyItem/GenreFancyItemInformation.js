/**
 * File Name : GenreFancyItemInformation.js
 * Contains information about the "fancyItem" of the genre
 * Modifications required : API to be called on loading to get the details
 * Details required for the components: FancyItem Name, Notable work and image
 */
import React from "react";
import {
	GenreFancyItemContainer,
	FancyItemBox,
	ImageWrapper,
	Image,
	FancyItemContent,
	NotableWork
} from "../../styles/componentStyles/GenreFancyItem/genreFancyItemInformation";

import aynRand from "../../img/antilibraryImages/ayn_rand1.jpg";

const GenreFancyItemInformation = () => {
	return (
		<GenreFancyItemContainer>
			<FancyItemBox>
				<ImageWrapper>
					<Image src={aynRand} />
				</ImageWrapper>
				<FancyItemContent>
					<h2>Ayn Rand</h2>
					<NotableWork>The Fountainhead</NotableWork>
				</FancyItemContent>
			</FancyItemBox>
		</GenreFancyItemContainer>
	);
};

export default GenreFancyItemInformation;
