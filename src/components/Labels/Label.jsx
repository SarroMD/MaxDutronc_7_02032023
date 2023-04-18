export default function Label({ cover, title }) {
	return (
		<article className="label-logement">
			<img src={cover} alt="location" />
			<div className="label-logement__container">
				<p className="label-logement__title">{title}</p>
			</div>
		</article>
	);
}