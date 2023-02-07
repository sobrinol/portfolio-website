import { Component } from "react";
import {MenuData} from "./MenuData";
import "./NavbarStyles.css";

class Navbar extends Component{
    state = {
        clicked: false
    };

    handleClick = () =>{
        this.setState({clicked:
             !this.state.clicked})
    }

    render(){
        return(
            <nav className = "NavbarItems">
                <a href = "poop">
                    <h1 className = "logo">
                        <i className = "fab fa-reacteurope"></i>
                    </h1>
                </a>
                <div className = "menu-icons" onClick = {this.handleClick}>
                    <i className = {this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
                </div>
                <ul className = {this.state.clicked ? "nav-menu active" : "nav-menu"}>
                    {MenuData.map((item,index) =>{
                        return(
                            <li key = {index}>
                                <a href = {item.url} className = {item.cName}>
                                    {item.title}
                                </a>
                            </li>
                        )
                    })}
                    
                </ul>
            </nav>
        );
    }
}

export default Navbar;