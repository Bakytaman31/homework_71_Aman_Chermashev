import React, {Component} from 'react';
import {connect} from "react-redux";
import {completeOrder, getOrders} from "../../store/actions/ordersAction";
import './Orders.css';

class Orders extends Component {

    componentDidMount() {
        this.props.getOrders();
    };

    render() {
        const dishes = this.props.dishes;
        const orders = this.props.orders;
        console.log(Object.keys(orders).length);
        const noOrders = <h1>No Orders</h1>;
        const loading = <h1>Loading...</h1>;
        const ordersHtml = <div>
            {Object.keys(orders).map(order => {
                return(
                    <div key={order} className='orders'>
                        {Object.keys(dishes).map(dish => {
                            return (
                                <div key={dish}>
                                    {Object.keys(orders[order]).map(orderName => {
                                        if (orderName === dish) {
                                            const count = orders[order][orderName];
                                            const name = dishes[orderName].name;
                                            const price = dishes[orderName].price;
                                            return (
                                                <h2 key={orderName} >
                                                    {count} X {name}: {price*count}KGS
                                                </h2>
                                            )
                                        } else {
                                            return ''
                                        }
                                    })}
                                </div>
                            )
                        })}
                        <h2>Delivery: 150KGS</h2>
                        <h2>Total Price: </h2>
                        <button
                            onClick={() => this.props.completeOrder(order)}
                        >
                            Complete Order
                        </button>
                    </div>
                )
            })
            }
        </div>;
        return(
            <div>
                <h1>Orders</h1>
                {this.props.loading === true ? loading :
                    Object.keys(orders).length === 0 || orders === null ? noOrders : ordersHtml}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    loading: state.ordersReducer.loading,
    orders: state.ordersReducer.orders,
    dishes: state.dishesReducer.dishes
});

const mapDispatchToProps = dispatch => ({
    getOrders: () => dispatch(getOrders()),
    completeOrder: id => dispatch(completeOrder(id))
});

export default connect(mapStateToProps, mapDispatchToProps) (Orders);