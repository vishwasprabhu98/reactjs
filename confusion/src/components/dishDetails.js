

import React, { Component } from 'react';

class dishDetails extends Component{

	constructor(props) {
		super(props);

		this.state = {
			selectedDish : this.props.dish
		};
	}

	onDishSelect(dish) {
		this.setState({ selectedDish : dish })
	};

	renderDish(dish){
		if(dish != null){
			return(
				<Card>
					<CardImg top src={dish.image} alt={dish.name} />
					<CardBody>
						<CardTitle>{dish.name}</CardTitle>
						<CardText>{dish.description}</CardText>
					</CardBody>
				</Card>
			);
		}
		else{
			return(
				<div></div>
			);
		}
	};
}

export default dishDetails;


