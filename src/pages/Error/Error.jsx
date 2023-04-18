import { Link } from "react-router-dom";
import './Error.css'

export default function Error() {
	return (
		<div className="errorContainer">
            <div className="error404Container">
			<p className="error404">404</p>
            </div>
			<p className="errorText">Oups! La page que vous demandez n'existe pas.</p>
			<Link to="/" className="errorLinkHome">
				Retourner sur la page d'accueil
			</Link>
		</div>
	);
}