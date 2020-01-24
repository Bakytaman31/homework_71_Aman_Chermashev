import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import {deleteDish, getDishes} from "../../store/actions/dishesActions";
import DishCard from "../../components/DishCard/DishCard";

class Dishes extends Component {

    componentDidMount() {
        this.props.getDishes();
    };

    render() {
        let content;
        if (this.props.loading === false) {
            content = <div>{Object.keys(this.props.dishes).map(dish => (
                    <DishCard
                        key={dish}
                        id={dish}
                        name={this.props.dishes[dish].name}
                        price={this.props.dishes[dish].price}
                        img={this.props.dishes[dish].image}
                        removeDish={this.props.deleteDish}
                    />
                )
            )}</div>
        } else {
            content = <h1>Loading...</h1>
        }
                return (
                    <div>
                        <h1>Dishes</h1>
                        <NavLink to='/add'><button className='btn btn-primary'>Add Dish</button></NavLink>
                        {content}
                    </div>
                )
        }
    }

const mapStateToProps = state => ({
    dishes: state.dishesReducer.dishes,
    loading: state.dishesReducer.loading
});

const mapDispatchToProps = dispatch => ({
    getDishes: () => dispatch(getDishes()),
    deleteDish: id => dispatch(deleteDish(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Dishes);