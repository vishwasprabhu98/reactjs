import React from 'react';
import {Card, CardBody, CardTitle, CardSubtitle, CardImg, CardText} from 'reactstrap'

function RenderCard ({item}) {
	return(
		<Card className="align-items center">
			<CardImg src={item.image} alt={item.title} />
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
					<RenderCard item={props.dish} />
				</div>
				<div className="col-12 col-md m-1">
					<RenderCard item={props.promotion} />
				</div>
				<div className="col-12 col-md m-1">
					<RenderCard item={props.leader} />
				</div>
			</div>
		</div>
	);
}

export default Home;  