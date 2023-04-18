import logo from "../../images/LOGO_FOOTER.svg";
import './Footer.css';

export default function Footer() {
	return (
		<footer className="footer-container">
			<img src={logo} alt="logo de kasa" className="footer-logo" />
			<p className="footer-container__text">© 2020 Kasa. All rights reserved</p>
		</footer>
	);
}