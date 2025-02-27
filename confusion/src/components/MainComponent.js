import React, { Component } from 'react';
import Home from './HomeComponent'
import Header from './HeaderComponent'
import Footer from './FooterComponent'
import Contact from './ContactComponent'
import Menu from './menuComponent';
import About from './AboutUsComponent';
import DishDetail from './DishdetailComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { postComment, fetchDishes, fetchPromos, fetchComments, fetchLeaders, postFeedback } from '../redux/ActionCreators';
import { actions } from 'react-redux-form';
import { CSSTransition, TransitionGroup} from 'react-transition-group';

const mapStateToProps = state => {
	return {
		dishes: state.dishes,
		comments: state.comments,
		promotions: state.promotions,
		leaders: state.leaders
	}
}

const mapDispatchToProps = dispatch => ({
	postComment: (dishId, rating, author, comment) => dispatch(postComment(dishId, rating, author, comment)),
	fetchDishes: () => dispatch(fetchDishes()),
	resetFeedbackForm: () => dispatch(actions.reset('feedback')),
	fetchPromos: () => dispatch(fetchPromos()),
	fetchComments: () => dispatch(fetchComments()),
	fetchLeaders: () => dispatch(fetchLeaders()),
	// postFeedback: (firstname, lastname, telnum, email, agree, contactType, message) => postFeedback(firstname, lastname, telnum, email, agree, contactType, message)
	postFeedback: (valuesObject) => postFeedback(valuesObject)
});

class Main extends Component {
	// eslint-disable-next-line
	constructor(props){
		super(props);
	}

	componentDidMount() {
		this.props.fetchDishes();
		this.props.fetchPromos();
		this.props.fetchComments();
		this.props.fetchLeaders();
	}

	render() {
		
		const HomePage = () => {
			return(
				<Home dish = { this.props.dishes.dishes.filter(( dish ) => dish.featured)[0] }
				dishesLoading = { this.props.dishes.isLoading }
				dishesErrMess = { this.props.dishes.errMess }
				promotion = { this.props.promotions.promos.filter(( dish ) => dish.featured)[0] }
				promosLoading = { this.props.promotions.isLoading }
				promosErrMess = { this.props.promotions.errMess }
				leader = { this.props.leaders.leaders.filter(( dish ) => dish.featured)[0] }
				leadersLoading = { this.props.leaders.isLoading }
				leadersErrMess = { this.props.leaders.errMess } />
			);
		}

		const DishWithID = ({match}) => {
			return (
				<DishDetail dish = { this.props.dishes.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]}
				isLoading={ this.props.dishes.isLoading }
				errMess={ this.props.dishes.errMess }
				comments = { this.props.comments.comments.filter((dish) => dish.dishId === parseInt(match.params.dishId,10))}
				commentsErrMess={ this.props.comments.errMess }
				postComment={ this.props.postComment } />
			);
		}

		return (
			<div>
				<Header />
				<TransitionGroup>
					<CSSTransition key={this.props.location.key} classNames="page" timeout={300}>
						<Switch>
							<Route path='/home' component = { HomePage } />
							<Route exact path='/menu' component = {() => <Menu dishes={this.props.dishes} />} />
							<Route path='/menu/:dishId' component = { DishWithID } />
							<Route exact path='/contactus' component = {() => <Contact resetFeedbackForm={this.props.resetFeedbackForm} postFeedback = {this.props.postFeedback}/>} />
							<Route exact path='/aboutus' component = { () => <About leaders = { this.props.leaders.leaders} isLoading = {this.props.leaders.isLoading} errMess = {this.props.leaders.errMess}/> } />
							<Redirect to="/home" />
						</Switch>
					</CSSTransition>
				</TransitionGroup>
				<Footer />
			</div>
		);
	}
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));