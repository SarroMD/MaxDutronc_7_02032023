import { useState, useRef, useEffect } from "react"; //import des hooks de base react
import Vector from "../../images/VECTOR.svg";

export default function Collapse(props) {
	const [toggle1, setToggle1] = useState(false); // je definie le state du toggle (et false par défaut)
	const [toggle2, setToggle2] = useState(false); // je definie le state du toggle (et false par défaut)
	const [heightEl, setHeightEl] = useState(); // je definie le state de la hauteur du collapse
	const refHeight = useRef(); //récupère et conserve la valeur de hauteur du collapse déplié

	useEffect(() => {
		setHeightEl(`${refHeight.current.scrollHeight}px`); //useEffect s'éxécute au montage du composant, dans ce cas, il définit la hauteur du collapse déplié lors de sa première ouverture et la conserve dans refHeight
	}, []);

	return (
		// affiche le collapse replié par défaut et l'ouvre au clic puis le referme au clic en faisant disparaitre le texte et le style
		<div className={'collapse'}>
			<div className="collapse__1">
				<div onClick={() => setToggle1(!toggle1)} className="collapse__visible">
					<h2>Description</h2>
					<img className={toggle1 ? "vector rotated" : "vector"} src={Vector} alt="vector"/>
				</div>
				<div ref={refHeight} className={toggle1 ? "collapse__toggle animated" : "collapse__toggle"} style={{ height: toggle1 ? `${heightEl}` : "0px" }}>
					<p aria-hidden={toggle1 ? "true" : "false"}>{props.description}</p>
				</div>
			</div>
			<div className="collapse__2">
				<div onClick={() => setToggle2(!toggle2)} className="collapse__visible">
					<h2>Équipements</h2>
					<img className={toggle2 ? "vector rotated" : "vector"} src={Vector} alt="vector"/>
				</div>
				<div ref={refHeight} className={toggle2 ? "collapse__toggle animated" : "collapse__toggle"} style={{ height: toggle2 ? `${heightEl}` : "0px" }}>
					<p aria-hidden={toggle2 ? "true" : "false"}>{props.equipements}</p>
				</div>
			</div>
		</div>
		
	);
}