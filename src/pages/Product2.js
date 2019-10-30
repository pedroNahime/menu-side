import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Product2 extends Component {
    render() {
        return (
            <div>
                <p>Product2</p>
                <p><Link to="/">Back</Link></p>
            </div>
        );
    }
}

export default Product2;