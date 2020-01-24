import React, {Component} from 'react';
import {connect} from "react-redux";
import {initDishToEdit, onChange, postEditedDish} from "../../store/actions/dishesActions";

class EditDish extends Component {

    componentDidMount() {
        const id = this.props.match.params.id;
        this.props.initDish(id);
    };

    onChange = event => {
        this.props.onChange(event.target.name, event.target.value);
    };

    onSubmit = async event => {
        event.preventDefault();
        const id = this.props.match.params.id;
        await this.props.postEditedDish({name: this.props.name, image: this.props.image, price: this.props.price}, id);
        this.props.history.push('/');
    };

    render() {
        return (
            <div>
                <h1>Edit Dish</h1>
                <form onSubmit={this.onSubmit}>
                    <p><input
                            type="text"
                            name="name"
                            placeholder="Name"
                            value={this.props.name}
                            onChange={this.onChange}
                            autoComplete="off"
                    /></p>
                    <p><input
                            type="text"
                            name="image"
                            placeholder="Image URL"
                            value={this.props.image}
                            onChange={this.onChange}
                            autoComplete="off"
                    /></p>
                    <p><input
                            type="text"
                            name="price"
                            placeholder="Price"
                            value={this.props.price}
                            onChange={this.onChange}
                            autoComplete="off"
                    /></p>
                    <button type="submit" className="btn btn-warning">Edit</button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    name: state.dishesReducer.name,
    image: state.dishesReducer.image,
    price: state.dishesReducer.price,
});

const mapDispatchToProps = dispatch => ({
    onChange: (name, value) => dispatch(onChange(name, value)),
    initDish: id => dispatch(initDishToEdit(id)),
    postEditedDish: (dish, id) => dispatch(postEditedDish(dish ,id))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditDish);