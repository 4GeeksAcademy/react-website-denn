import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Navbar from "./Navbar"
import Jumbotron from "./Jumbotron";
import Footer from "./Footer";
import Card from "./Card";
import cardContent from "./CardContent";



//create your first component
const Home = () => {
	return (
		<div className="container-fluid px-0">
			<Navbar />
			<Jumbotron />
			<div className="row" style={{ margin: 0, paddingBottom: "15px" }}>
				{cardContent.map(card => (
				<div className="col-12 col-md-6 col-lg-3 justify-content-center d-flex">
					<Card
						key={card.id}
						imagen={card.imagen}
						service={card.service}
						description={card.description}
						buttonLink={card.buttonLink}
					/>
				</div>
				))}
			</div> 

			<div>
				<Footer />
			</div>

		</div>
			);
};

			export default Home;
