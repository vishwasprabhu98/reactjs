
import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem, Button, Modal, ModalHeader, ModalBody,
	Label, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom'
import { Control, LocalForm, Errors } from 'react-redux-form';

const required = (val) => val && val.length;
const minLength = (len) => (val) => val && (val.length > len);
const maxLength = (len) => (val) => !(val) || (val.length <= len);

class CommentForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isModalOpen: false
		}

		this.toggleModal = this.toggleModal.bind(this)
	}

	toggleModal() {
		this.setState({
			isModalOpen: !this.state.isModalOpen
		});
	}

	handleSubmit(values) {
		this.props.addComment(this.props.dishId, values.rating, values.author, values.comment);
		this.toggleModal();
	}

	render() {
		return(
			<React.Fragment>
				<Button outline onClick={this.toggleModal}><span className="fa fa-pencil"></span> Submit Comments</Button>
				<Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
					<ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
					<ModalBody>
						<LocalForm onSubmit={(values) => this.handleSubmit(values)}>
							<Row className="form-group">
								<Label htmlFor="rating" md={12}>Rating</Label>
								<Col md={{size: 12, offset: 0}}>
									<Control.select model=".rating" name="rating"
										className="form-control">
										<option defaultValue>1</option>
										<option>2</option>
										<option>3</option>
										<option>4</option>
										<option>5</option>
									</Control.select>
								</Col>
							</Row>
						
							<Row className="form-group">
								<Label htmlFor="author" md={12}>Your Name</Label>
								<Col md={12}>
									<Control.text model=".author" id="author" name="author"
										placeholder="Your Name" 
										className="form-control"
										validators = {{
											required, 
											minLength: minLength(3), 
											maxLength: maxLength(10)
										}}
										/>
									<Errors 
										className="text-danger"
										model=".autho"
										show="touched"
										messages={{
											required: 'Required ',
											minLength: 'Must be greater than 2 characters',
											maxLength: 'Must be 15 characters or less'
										}}
									/>
								</Col>
							</Row>
							<Row className="form-group">
								<Label htmlFor="comment" md={{size: 12}}>Comment</Label>
								<Col md={{size: 12}}>
									<Control.textarea model=".comment" name="comment" id="comment"
										rows = "6"
										className="form-control">
									</Control.textarea>
								</Col>
							</Row>
							<Row className="form-group mt-2">
								<Col md={{size:12}}>
									<Button type="submit" color="primary">
										Submit
									</Button>
								</Col>
							</Row>
						</LocalForm>
					</ModalBody>
				</Modal>
			</React.Fragment>
		);
	}
}


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
const RenderComments = ({dishcomments, addComment, dishId}) => {
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
			<React.Fragment>
				{returncomment}
				<CommentForm dishId={dishId} addComment={addComment}/>
			</React.Fragment>
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
							<RenderComments dishcomments = {props.comments} 
							addComment={props.addComment}
							dishId={props.dish.id} />
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