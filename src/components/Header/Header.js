import React from 'react';
import Icon from './hacker.png';
import  './stylesHeader.css';
import {Link} from 'react-router-dom';

export const Header = () =>{
    return(
        <header className="main-header">
            <nav>
            <Link to="/" >
           
                <img src={Icon}  className="icon-header" alt="Перейти на главную"/>
            
            </Link>
            </nav>
           
        </header>
    )
}