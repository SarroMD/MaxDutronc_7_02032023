import DataLogements from "../../datas/logements.json";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Slide from "../../components/Slide/Slide";
import CollapseLogement from "../../components/CollapseLogement/CollapseLogement"
import Tag from "../../components/Tag/Tag";
import Host from "../../components/Host/Host"
import Star from "../../components/Star/Star"
import './FicheLogement.css'

export default function FicheLogement() {
    const params = useParams();
	const navigate = useNavigate();

    const [pickedAppart, setPickedAppart] = useState();
	useEffect(() => {
		const getData = async () => {
			const picked = DataLogements.find(({ id }) => id === params.id);
			DataLogements.map(() => setPickedAppart(picked));
			if (picked === undefined) {
				navigate("/Error404", { state: { message: "Can't get data" } });
			}
		};
		getData();
	}, );

	const slidePics = pickedAppart && pickedAppart.pictures;
	const tags = pickedAppart && pickedAppart.tags;
	const equipments = pickedAppart && pickedAppart.equipments;
	const equips = pickedAppart && equipments.map((item, index) => (
			<li key={index} className="equipList">
				{item}
			</li>
		));

	return (
		pickedAppart && (
			<div key={params.id} className="fiche-container">
				<Slide slides={slidePics} />
				<section className="hostInfo-container">
					<div className="title-tags-container">
						<div className="title-container">
							<h1>{pickedAppart.title}</h1>
							<h3>{pickedAppart.location}</h3>
						</div>
						<div className="tags-container">
							{tags.map((tag) => (
								<Tag key={tag} tag={tag} />
							))}
						</div>
					</div>
					<div className="star-host-container">
						<div className="host-container redFont">
							<Host hostName={pickedAppart.host.name} hostPic={pickedAppart.host.picture} />
						</div>
						<div className="star-container">
							<Star score={pickedAppart.rating} />
						</div>
					</div>
				</section>
				<div className="collapse-fiche-container">
					<CollapseLogement equipements={equips} description={pickedAppart.description} />
				</div>
			</div>
		)
	);
}