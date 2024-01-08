import React from 'react'
import './Header.css'
// import logo from '../Assets/logo.png';


const Header =() =>{
    return(
        <div className="header">
            <div className="header__left">
            {/* <img src={logo} alt="Logo" /> */}
                <h2>Santorini</h2>
            </div>
            <div className="header__center">
            <ul className="header__lists">
                <li><a href="#">Home</a></li>
                <li><a href="#">Goals</a></li>
                <li><a href="#">Todos</a></li>
                <li><a href="#">Rewards</a></li>
                <li><a href="#">Community</a></li>
                
                </ul>
                 </div>
                 <div className="header__right">
                 <li><a href="#">Sign up</a></li>
                

                 </div>


        </div>
    )
}


export default Header