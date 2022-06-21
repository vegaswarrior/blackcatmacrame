import React from "react";
import {Link} from "react-router-dom";
import {Card, Row, Button} from "react-bootstrap";
import Rating from "./Rating";
import ProductCarousel from "./ProductCarousel";
import "./products.css";

const Product = ({product}) => {
	return (
		<Row>
			<Card className="my-3 p-3 rounded card_card">
				<ProductCarousel
					imagesArr={product.images}
					link={`/product/${product._id}`}
					alt={product.name}
				/>

				<Card.Body>
					<Link to={`/product/${product._id}`}>
						<Card.Title as="div">
						 <Button className="product_button">
						      <strong>{product.name}</strong> 
						 </Button>
							
						</Card.Title>
					</Link>

					<Card.Text as="div">
						<Rating value={product.rating} text={`${product.numReviews} reviews`} />
					</Card.Text>

					<Card.Text as="h3" className="card_money">${product.price}</Card.Text>
				</Card.Body>
			</Card>
		</Row>
	);
};

export default Product;
