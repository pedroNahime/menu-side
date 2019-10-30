import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Main extends Component {
    render() {
        return (
            <div>
                <p>
                    Main Page
                </p>

                <p>
                    <Link  to="/product1">Product1</Link>
                </p>
                <p>
                    <Link  to="/product2">Product2</Link>
                </p>

            </div>
        );
    }
}

export default Main;