import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
// import './styles/main.scss'
import Main from "./pages/Main";
import Product1 from "./pages/Product1";
import Product2 from "./pages/Product2";
import NavBar from "./pages/NavBar/NavBar";
import MenuSide from "./components/menu-side";

class App extends Component {
    constructor(props){
        super(props);
        this.state ={
            open: false
        };
    }

    changeMenuSide = () => {
        this.setState({open: !this.state.open})
    };
    render() {
        return (
            <BrowserRouter>
                <button onClick={() => {this.changeMenuSide()}}>Abre SideBar</button>
                <MenuSide open={this.state.open} changeMenuSide={this.changeMenuSide}/>
                <NavBar/>
                <Switch>
                    <Route axact path="/product1" component={Product1}/>
                    <Route axact path="/product2" component={Product2}/>
                    <Route axact path="/" component={Main}/>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;
