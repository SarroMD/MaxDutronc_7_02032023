import { useState, useRef, useEffect } from "react";
import Vector from "../../images/VECTOR.svg";
import './Collapse.css'

export default function Collapse() {
	const [toggle1, setToggle1] = useState(false);
	const [toggle2, setToggle2] = useState(false);
	const [toggle3, setToggle3] = useState(false);
	const [toggle4, setToggle4] = useState(false);
	const [height, setHeight] = useState();
	const refHeight = useRef();

	useEffect(() => {
		setHeight(`${refHeight.current.scrollHeight}px`);
	}, []);

	return (
		<div className={'collapse'}>
			<div className="collapse__1">
				<div onClick={() => setToggle1(!toggle1)} className="collapse__visible">
					<h2>Fiabilité</h2>
					<img className={toggle1 ? "vector rotated" : "vector"} src={Vector} alt="vector"/>
				</div>
				<div ref={refHeight} className={toggle1 ? "collapse__toggle animated" : "collapse__toggle"} style={{ height: toggle1 ? `${height}` : "0px" }}>
					<p aria-hidden={toggle1 ? "true" : "false"}>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.</p>
				</div>
			</div>
			<div className="collapse__2">
				<div onClick={() => setToggle2(!toggle2)} className="collapse__visible">
					<h2>Respect</h2>
					<img className={toggle2 ? "vector rotated" : "vector"} src={Vector} alt="vector"/>
				</div>
				<div ref={refHeight} className={toggle2 ? "collapse__toggle animated" : "collapse__toggle"} style={{ height: toggle2 ? `${height}` : "0px" }}>
					<p aria-hidden={toggle2 ? "true" : "false"}>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
				</div>
			</div>
			<div className="collapse__3">
				<div onClick={() => setToggle3(!toggle3)} className="collapse__visible">
					<h2>Service</h2>
					<img
						className={toggle3 ? "vector rotated" : "vector"}
						src={Vector}
						alt="vector"
					/>
				</div>
				<div
					ref={refHeight}
					className={toggle3 ? "collapse__toggle animated" : "collapse__toggle"}
					style={{ height: toggle3 ? `${height}` : "0px" }}
				>
					<p aria-hidden={toggle3 ? "true" : "false"}>Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.</p>
				</div>
			</div>
			<div className="collapse__4">
				<div onClick={() => setToggle4(!toggle4)} className="collapse__visible">
					<h2>Sécurité</h2>
					<img
						className={toggle4 ? "vector rotated" : "vector"}
						src={Vector}
						alt="vector"
					/>
				</div>
				<div
					ref={refHeight}
					className={toggle4 ? "collapse__toggle animated" : "collapse__toggle"}
					style={{ height: toggle4 ? `${height}` : "0px" }}
				>
					<p aria-hidden={toggle4 ? "true" : "false"}>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p>
				</div>
			</div>
		</div>
		
	);
}