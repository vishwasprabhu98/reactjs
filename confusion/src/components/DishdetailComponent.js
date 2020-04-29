
import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import { ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';

class DishDetail extends Component{

	constructor(props) {
		super(props);
	}

	renderDish(perticulardish) {
		return (
			<Card>
				<CardImg top src={perticulardish.image} alt={perticulardish.name} />
				<CardBody>
					<CardTitle>{perticulardish.name}</CardTitle>
					<CardText>{perticulardish.description}</CardText>
				</CardBody>
			</Card>
		);
	}

	renderComments(dishcomments) {

		if(dishcomments != null) {
			const returncomment = dishcomments.map((eachComment) => {
				let date = eachComment.date.split("T")
				return(
					<ul className="list-unstyled">
						<li className="mt-3">
							{eachComment.comment} 
						</li>
						<li className="mt-3"> 
							- - &nbsp;&nbsp;{ eachComment. author }, &nbsp; { date[0] }
						</li>	
					</ul>
				);
			});
			
			return (
				returncomment
			);

		} else {
			return (
				<div> No Comments </div>
			);
		}
	};

	render() {

		const dish = this.props.dishinfo;

		if(dish != null){
			
			return (
				<div className="row">
					<div className="col-12 col-md-5 mt-5 ml-0">
						{ this.renderDish( dish ) }
					</div>
					<div className="col-12 col-md-5 mt-5">
						<h4>Comments</h4>
						{ this.renderComments( dish.comments ) }
					</div>
				</div>
			);
		}
		else{
			return(
				<div></div>
			);
		}

	};
}


export default DishDetail;