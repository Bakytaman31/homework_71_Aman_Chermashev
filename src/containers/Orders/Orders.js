import React, {Component} from 'react';
import {connect} from "react-redux";
import {getOrders} from "../../store/actions/ordersAction";

class Orders extends Component {

    componentDidMount() {
        this.props.getOrders();
    };

    render() {
        if (this.props.loading === true) {
            return (
                <div>
                    <h1>Loading...</h1>
                </div>
            )
        } else {
            return (
                <div>
                    <h1>Orders</h1>
                </div>
            )
        }
    }
}

const mapStateToProps = state => ({
    loading: state.ordersReducer.loading,
    orders: state.ordersReducer.orders
});

const mapDispatchToProps = dispatch => ({
    getOrders: () => dispatch(getOrders())
});

export default connect(mapStateToProps, mapDispatchToProps) (Orders);