import EmptyStars from "../../images/EmptyStar.svg";
import Stars from "../../images/Star.svg";
import './Star.css'

export default function Star({ score }) {
	const stars = [1, 2, 3, 4, 5];
	return (
		<div className="star-comp">
			{stars.map((level) =>
				score >= level ? (
					<img
						key={level.toString()}
						className="star"
						src={Stars}
						alt="rating star"
					/>
				) : ( //affichage conditionnel des étoiles de score, pleine ou vide selon le score passé en props
					<img
						key={level.toString()}
						className="star"
						src={EmptyStars}
						alt="rating star"
					/>
				)
			)}
		</div>
	);
}