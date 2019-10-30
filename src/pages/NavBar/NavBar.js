import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import './style.css'

class NavBar extends Component {
    render() {
        return (
            <div>
                <NavLink exact activeClassName='active' className='normal link' to='/'>
                    Home
                </NavLink>
                <NavLink exact activeClassName='active' className='normal link' to='/product1'>
                    Product1
                </NavLink>
                <NavLink exact activeClassName='active' className='normal link' to='/product2'>
                    Product2
                </NavLink>
            </div>
        );
    }
}

export default NavBar;