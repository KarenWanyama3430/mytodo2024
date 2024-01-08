import React from 'react'
import './Header.css'

const Header =() =>{
    return(
        <div className="header">
            <div className="header__left">
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
                 <Link to="/sign up">Sign up</Link>

                 </div>


        </div>
    )
}


export default Header