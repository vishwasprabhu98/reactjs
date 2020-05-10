import React from 'react';
import {Card, CardBody, CardTitle, CardSubtitle, CardImg, CardText} from 'reactstrap'
import { Loading } from './LoadingComponent'
import {baseUrl } from '../shared/baseUrl'

function RenderCard ({item, isLoading, errMess}) {
	if (isLoading) {
		return(
				<Loading />
		);
	}
	else if (errMess) {
		return(
			<h4>{errMess}</h4>
		);
	}
	else 
		return(
			<Card className="align-items center">
				<CardImg src={baseUrl + item.image} alt={item.title} />
				<CardBody>
					<CardTitle>{item.name}</CardTitle>
					{item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null}
					<CardText>
						{item.description}
					</CardText>
				</CardBody>
			</Card>
		);
}

function Home(props) {
	return(
		<div className="container">
			<div className="row">
				<div className="col-12 col-md m-1">
					<RenderCard item={props.dish} isLoading={props.dishesLoading} errMess={props.dishesErrMess} />
				</div>
				<div className="col-12 col-md m-1">
					<RenderCard item={props.promotion} isLoading={props.promosLoading} errMess={props.promosErrMess}/>
				</div>
				<div className="col-12 col-md m-1">
					<RenderCard item={props.leader} />
				</div>
			</div>
		</div>
	);
}

export default Home;  