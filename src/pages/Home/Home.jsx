import DataLogements from "../../datas/logements.json";
import Banner from "../../components/Banner/Banner";
import Label from "../../components/Labels/Label";
import { Link } from "react-router-dom";

export default function Home() {

 	return (
		<>
    <Banner />
    <div className="labels-container">
      {DataLogements.map((appart, id) => (
        <div className="label_logement" key={id}>
          <Link className="link_label_logement" to={`/logement/${appart.id}`}>
            <Label cover={appart.cover} title={appart.title} />
          </Link>
        </div>
      ))}
    </div>
  </>
);
}