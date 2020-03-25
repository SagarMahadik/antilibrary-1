import React from "react";
import {
	GenreContainer,
	Genre,
	GenreName
} from "../../styles/componentStyles/GenreDetails/genreCommonStyles";

import {
	TheGrandPhilisophers,
	GuidingLights,
	ArchitectsOfFuture,
	MaverickScientists,
	Luminaries,
	MenOfLetters
} from "../../styles/componentStyles/GenreDetails/genreDetails";

const GenreDetails = () => {
	return (
		<GenreContainer>
			<TheGrandPhilisophers>
				<GenreName>The Grand Philosophers!</GenreName>
			</TheGrandPhilisophers>
			<GuidingLights>
				<GenreName>Guiding Lights</GenreName>
			</GuidingLights>
			<ArchitectsOfFuture>
				<GenreName>Architects Of The Future</GenreName>
			</ArchitectsOfFuture>
			<MaverickScientists>
				<GenreName>Maveric Scientists</GenreName>
			</MaverickScientists>
			<Luminaries>
				<GenreName>Luminaries</GenreName>
			</Luminaries>
			<MenOfLetters>
				<GenreName>Men Of Letters</GenreName>
			</MenOfLetters>
		</GenreContainer>
	);
};

export default GenreDetails;
