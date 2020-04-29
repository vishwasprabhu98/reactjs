import React, { Component } from 'react';
import DishesD from './dishDetails.js'
import { Media } from 'reactstrap';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';


class Menu extends Component {

	constructor (props) {
		super(props);

		this.state = {
			selectedDish: null
		};
	}

	onDishSelect(dish) {
		this.setState({ selectedDish : dish })
	};

	renderDish(dish){
		return <DishesD dishinfo = {this.state.selectedDish} />
	};

	render () {

		const menu = this.props.dishes.map((dish) => {
			return (
			<div key={dish.id} className="col-12 col-md-5 mt-5">
				<Card key={dish.id} 
				onClick={() => this.onDishSelect(dish)}>
					<CardImg width="100%" src={dish.image} alt={dish.name} />
					<CardImgOverlay>
						<CardTitle>{dish.name}</CardTitle>
					</CardImgOverlay>
				</Card>
			</div>
			);
		});


		return (
			<div className="container">
				<div className="row">
					{ menu }
				</div>	
				{this.renderDish(this.state.selectedDish)}
					
				
			</div>
		);
	}
}

export default Menu;