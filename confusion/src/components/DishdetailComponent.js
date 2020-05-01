
import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom'

	//Function
	const RenderDish = ({ perticulardish }) => {
		return (
			<Card>
				<CardImg top src={perticulardish.image} alt={perticulardish.name} />
				<CardBody>
					<CardTitle>{perticulardish.name}</CardTitle>
					<CardText>{perticulardish.description}</CardText>
				</CardBody>
			</Card>
		);
	};

	//Function
	const RenderComments = ({dishcomments}) => {

		if(dishcomments != null) {
			const returncomment = dishcomments.map((eachComment) => {
				//let date = eachComment.date.split("T")
				return(
					<ul className="list-unstyled">
						<li className="mt-3">
							{eachComment.comment} 
						</li>
						<li className="mt-3"> 
							- - &nbsp;&nbsp;{ eachComment.author }, &nbsp; {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(eachComment.date)))}
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

	//Main Function
	const DishDetail = (props) => {
			if(props.dish != null){
				return (
					<div className="container">
						<div className="row">
							<Breadcrumb>
								<BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
								<BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
								<BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
							</Breadcrumb>
							<div className="col-12">
								<h3>{props.dish.name}</h3>
								<hr />
							</div>                
						</div>
						<div className="row">
							<div className="col-12 col-md-5 mt-5 ml-0">
								< RenderDish perticulardish = {props.dish} />
							</div>
							<div className="col-12 col-md-5 mt-5">
								<h4>Comments</h4>
								<RenderComments dishcomments = {props.comments} />
							</div>
						</div>
					</div>
				);
			}
			else{
				return(
					<div></div>
				);
			}
	}

export default DishDetail;