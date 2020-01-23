import React, {Component} from 'react';
import {onChange, postDish} from "../../store/actions/dishesActions";
import {connect} from "react-redux";

class AddDish extends Component {

    onChange = event => {
        this.props.onChange(event.target.name, event.target.value);
    };

    onSubmit = event => {
        event.preventDefault();
        this.props.postDish({name: this.props.name, img: this.props.img, price: this.props.price});
        this.props.history.push('/');
    };

    render() {
        return (
            <div>
                <h1>Add Dish</h1>
                <form onSubmit={this.onSubmit}>
                    <p><input type="text" name="name" placeholder="Name" autoComplete="off"/></p>
                    <p><input type="text" name="image" placeholder="Image URL" autoComplete="off"/></p>
                    <p><input type="text" name="price" placeholder="Price" autoComplete="off"/></p>
                    <button type="submit" className="btn btn-success">Add</button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    name: state.dishesReducer.name,
    img: state.dishesReducer.img,
    price: state.dishesReducer.price
});

const mapDispatchToProps = dispatch => ({
    postDish: dish => dispatch(postDish(dish)),
    onChange: (name, value) => dispatch(onChange(name, value))
});


export default connect(mapStateToProps, mapDispatchToProps)(AddDish);