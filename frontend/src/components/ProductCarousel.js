import React from "react";
import {Carousel, Image} from "react-bootstrap";
import {Link} from "react-router-dom";

const ProductCarousel = ({imagesArr, link, alt, size}) => {
	return (
		<Carousel
			className="bg-dark"
			interval={null}
			style={size && size.length === 2 && {width: size[0], height: size[1]}}
		>
			{imagesArr.map((image, i) => (
				<Carousel.Item key={i}>
					{link ? (
						<Link to={link}>
							<Image
								src={image}
								alt={alt}
								style={size && size.length === 2 && {width: size[0], height: size[1]}}
								fluid
							/>
						</Link>
					) : (
						<Image
							src={image}
							alt={alt}
							style={size && size.length === 2 && {width: size[0], height: size[1]}}
							fluid
						/>
					)}
				</Carousel.Item>
			))}
		</Carousel>
	);
};

export default ProductCarousel;
