import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Product1 extends Component {
    render() {
        return (
            <div>
                <p>Product1</p>
                <p><Link to="/">Back</Link></p>
            </div>
        );
    }
}

export default Product1;