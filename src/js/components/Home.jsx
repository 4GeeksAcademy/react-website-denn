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
			<div className="row ps-4" style={{gap:"15px", paddingBottom: "15px"}}>
				{cardContent.map(card => (
					<Card
						key={card.id}
						imagen={card.imagen}
						service={card.service}
						description={card.description}
						buttonLink={card.buttonLink}
					/>
				))}
			</div> 

			<div>
				<Footer />
			</div>

		</div>
	);
};

export default Home;
