import { useState } from "react";
import Vector from "../../images/VECTOR.svg";
import './CollapseLogement.css'

export default function Collapse(props) {
	const [toggle1, setToggle1] = useState(false);
	const [toggle2, setToggle2] = useState(false);

	return (
		<div className={'collapse-logement'}>
			<div className="collapse-logement__1">
				<div onClick={() => setToggle1(!toggle1)} className="collapse__visible">
					<h2>Description</h2>
					<img className={toggle1 ? "vector rotated" : "vector"} src={Vector} alt="vector"/>
				</div>
				<div className={toggle1 ? "collapse__toggle animated" : "collapse__toggle"} style={{ height: toggle1 ? "auto" : "0px" }}>
					<p aria-hidden={toggle1 ? "true" : "false"}>{props.description}</p>
				</div>
			</div>
			<div className="collapse-logement__2">
				<div onClick={() => setToggle2(!toggle2)} className="collapse__visible">
					<h2>Équipements</h2>
					<img className={toggle2 ? "vector rotated" : "vector"} src={Vector} alt="vector"/>
				</div>
				<div className={toggle2 ? "collapse__toggle animated" : "collapse__toggle"} style={{ height: toggle2 ? "auto" : "0px" }}>
					<p aria-hidden={toggle2 ? "true" : "false"}>{props.equipements}</p>
				</div>
			</div>
		</div>
		
	);
}