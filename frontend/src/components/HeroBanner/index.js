import React, { useEffect, useState } from "react";
import "./index.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; //

const HeroBanner = ({ id, title, movies }) => {
	return (
		<div>
			<Carousel
				axis={"horizontal"}
				infiniteLoop
				showArrows={false}
				showIndicators={false}
				autoPlay
				showStatus={false}
				showThumbs={false}
				centerMode
				centerSlidePercentage={50}
				swipeable={true}
				emulateTouch={true}
				swipeScrollTolerance={5}
				interval={3000}
			>
				{movies.map((movie, index) => {
					return (
						<img
							key={`${movies[index]?.titleId}_img`}
							src={movies[index]?.thumbnails["thumb-613x1536"]?.url}
							alt={movies[index]?.title}
						/>
					);
				})}
			</Carousel>
		</div>
	);
};

export default HeroBanner;
