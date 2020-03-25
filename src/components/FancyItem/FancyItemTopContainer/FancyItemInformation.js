import React from "react";
import aynRand from "../../../img/antilibraryImages/ayn_rand1.jpg";
import {
	Image,
	FancyItemName,
	FancyItemQuote,
	FancyItemImageContainer,
	FancyItemInfoContainer
} from "../../../styles/componentStyles/FancyItem/FancyItemTopContainer/FancyItemInformation";

export default function FancyItemInformation() {
	return (
		<React.Fragment>
			<FancyItemInfoContainer>
				<FancyItemImageContainer>
					<Image src={aynRand} />
				</FancyItemImageContainer>
				<FancyItemName>Ayn Rand</FancyItemName>
				<FancyItemQuote>
					Question is not who is going to let me!Question is who is
					going to stop me
				</FancyItemQuote>
			</FancyItemInfoContainer>
		</React.Fragment>
	);
}
