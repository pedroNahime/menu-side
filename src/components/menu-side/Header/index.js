import React, {Component} from 'react';
import './styles.scss'

class Header extends Component {
    render() {
        return (
            <div className="container">
                <div className="border-header">
                    <h1 className="title">Title</h1>
                    <span onClick={() => {
                        this.props.changeMenuSide()
                    }} className="close">X</span>
                </div>
            </div>
        );
    }
}

export default Header;