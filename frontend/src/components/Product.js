import React from "react";
import {Link} from "react-router-dom";
import {Card, CardGroup} from "react-bootstrap";
import Rating from "./Rating";
import ProductCarousel from "./ProductCarousel";
import "./products.css";




const Product = ({product}) => {
	return (

		<Card className="my-3 p-3 rounded Product_card" style={{height: "555px", width: "350px", margin: "10px"}}>
			<ProductCarousel
				imagesArr={product.images}
				link={`/product/${product._id}`}
				alt={product.name}
			/>

			<Card.Body>
				<Link to={`/product/${product._id}`}>
					<Card.Title as="div">
						<strong>{product.name}</strong>
					</Card.Title>
				</Link>
                 
				<Card.Text as="div">
					<Rating value={product.rating} text={`${product.numReviews} reviews`} />
				</Card.Text>

				<Card.Text as="h3">$<span className="text-success">{product.price}</span></Card.Text>
		
			</Card.Body>
		</Card>
	);
};

export default Product;
