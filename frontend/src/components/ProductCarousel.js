import React from "react";
// import { Link } from 'react-router-dom'
import {Carousel, Image} from "react-bootstrap";
import {Link} from "react-router-dom";

const ProductCarousel = ({imagesArr, link, alt}) => {
	return (
		<Carousel className="bg-dark" interval={null}>
			{imagesArr.map((image, i) => (
				<Carousel.Item key={i}>
					{link ? (
						<Link to={link}>
							<Image src={image} alt={alt} fluid />
						</Link>
					) : (
						<Image src={image} alt={alt} fluid />
					)}
				</Carousel.Item>
			))}
		</Carousel>
	);
};

export default ProductCarousel;
