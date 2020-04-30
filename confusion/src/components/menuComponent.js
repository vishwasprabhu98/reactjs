import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

const RenderMenu = ({ dish }) => {
	return (
		<Card key={dish.id} >
			<CardImg width="100%" src={dish.image} alt={dish.name} />
			<CardImgOverlay>
				<CardTitle>{dish.name}</CardTitle>
			</CardImgOverlay>
		</Card>
	);
}

const Menu = (props) => {
	const menu = props.dishes.map((dish) => {
		return (
			<div key={dish.id} className="col-12 col-md-5 mt-5">
				<RenderMenu dish = {dish} />
			</div>
		);
	});
	return (
		<div className="container">
			<div className="row">
				{ menu }
			</div>	
		</div>
	);
}


export default Menu;