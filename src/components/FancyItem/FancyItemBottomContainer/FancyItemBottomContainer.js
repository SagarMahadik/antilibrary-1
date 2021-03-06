/**
 * File Name : FancyItemBottomContainer.js
 * Component contains the subcomponents of the bottom part of the FancyItem Page
 * The subcomponents are not refactored as future scope requires these to be separate
 * List of sub-components : Books | Videos | Research Papers | Link to the interview
 */

import React from "react";
import FancyItemBooks from "../FancyItemBottomContainer/FancyItemBooks";
import FancyItemVideos from "../FancyItemBottomContainer/FancyItemVideos";
import FancyItemResearchPapers from "../FancyItemBottomContainer/FancyItemResearchPapers";
import FancyItemInterviews from "../FancyItemBottomContainer/FancyItemInterviews";
import { FancyItemBottomPart } from "../../../styles/componentStyles/FancyItem/fancyItemContainer";

export default function FancyItemBottomContainer() {
	return (
		<FancyItemBottomPart>
			<FancyItemBooks />
			<FancyItemVideos />
			<FancyItemResearchPapers />
			<FancyItemInterviews />
		</FancyItemBottomPart>
	);
}
