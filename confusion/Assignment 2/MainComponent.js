import React, { Component } from 'react';
import Home from './HomeComponent'
import Header from './HeaderComponent'
import Footer from './FooterComponent'
import Contact from './ContactComponent'
import Menu from './menuComponent';
import About from './AboutUsComponent';
import DishDetail from './DishdetailComponent';
import { DISHES } from '../shared/dishes.js';
import { COMMENTS } from '../shared/comments';
import { LEADERS } from '../shared/leaders';
import { PROMOTIONS } from '../shared/promotions';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {

	constructor(props){
		super(props);
		
		this.state = {
			dishes : DISHES,
			leaders: LEADERS,
			comments: COMMENTS,
			promotions: PROMOTIONS
		};
	}

	render() {
		
		const HomePage = () => {
			return(
				<Home dish = {this.state.dishes.filter(( dish ) => dish.featured)[0]}
				promotion = {this.state.promotions.filter(( dish ) => dish.featured)[0]}
				leader = {this.state.leaders.filter(( dish ) => dish.featured)[0]} />
			);
		}

		const DishWithID = ({match}) => {
			return (
				<DishDetail dish = { this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]}
				comments = { this.state.comments.filter((dish) => dish.dishId === parseInt(match.params.dishId,10))} />
			);
		}

		return (
			<div>
				<Header />
				<Switch>
					<Route path='/home' component = { HomePage } />
					<Route exact path='/menu' component = {() => <Menu dishes={this.state.dishes} />} />
					<Route path='/menu/:dishId' component = { DishWithID } />
					<Route exact path='/contactus' component = { Contact } />
					<Route exact path='/aboutus' component = { () => <About leaders = { this.state.leaders} /> } />
					<Redirect to="/home" />
				</Switch>
				<Footer />
			</div>
		);
	}
}

export default Main;