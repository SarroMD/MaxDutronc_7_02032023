import { useState } from "react";
import VectorLeft from "../../images/Vector-left.svg";
import VectorRight from "../../images/Vector-right.svg";
import './Slide.css'

export default function Slide({ slides }) {
	const [current, setCurrent] = useState(0);
	const length = slides.length;

	const nextSlide = () => {
		setCurrent(current === length - 1 ? 0 : current + 1);
	};
	const prevSlide = () => {
		setCurrent(current === 0 ? length - 1 : current - 1);
	};

	return (
		<section id="slider-container">
			{length > 1 && (
				<img src={VectorLeft} alt="gauche" onClick={prevSlide} className="leftVector" />
			)}
			{length > 1 && (
				<img src={VectorRight} alt="droite" onClick={nextSlide} className="rightVector" />
			)}
			{slides.map((slide, index) => (
				<div key={index} className={current === index ? "slider" : "slider"}>
					{index === current && <img src={slide} alt="appartement à louer" />}
					{index === current && (
						<span className="slider__number">
							{current + 1}/{length}
						</span>
					)}
				</div>
			))}
		</section>
	);
}