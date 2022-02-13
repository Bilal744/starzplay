import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./index.css";

const Banner = ({ id, title, movies }) => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		initialSlide: 0,
	};

	useEffect(() => {}, []);

	return (
		<div className="container">
			<div className="title">{title}</div>

			{movies && (
				<Slider
					settings={settings}
					slidesToShow={1}
					slidesPerRow={10}
					arrows={false}
					infinte
				>
					{movies.map((movie, index) => {
						return (
							<img
								src={movie.thumbnails["thumb-677x474"]?.url}
								className="image item"
								alt={movie.title}
							/>
						);
					})}
				</Slider>
			)}
		</div>
	);
};

export default Banner;
