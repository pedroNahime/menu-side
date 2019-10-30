import React, {Component} from 'react';
import Header from "./Header";
import './style.scss'

class MenuSide extends Component {
    changeMenuSide = () => {
        this.props.changeMenuSide()
    };

    render() {
        return (
            <div className="menu-side" style={{width: this.props.open ? '250px' : '0px'}}>
                <Header changeMenuSide={this.changeMenuSide}/>

            </div>
        );
    }
}

export default MenuSide;