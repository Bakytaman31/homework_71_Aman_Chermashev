import React, {Component} from 'react';

class EditDish extends Component {
    render() {
        return (
            <div>
                <h1>Edit Dish</h1>
                <form>
                    <p><input type="text" name="name" placeholder="Name"/></p>
                    <p><input type="text" name="image" placeholder="Image URL"/></p>
                    <p><input type="number" name="price" placeholder="Price"/></p>
                    <button type="submit" className="btn btn-warning">Edit</button>
                </form>
            </div>
        );
    }
}

export default EditDish;