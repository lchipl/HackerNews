import React from 'react';
import Icon from './y18.gif';
import  './stylesHeader.css';
import {Link} from 'react-router-dom';


export const Header = () =>{
    return(
        <header className="main-header">

            <div className="icon-header"><img src={Icon} /></div>
            <nav>
               <Link to="/" ><li><button className="btn btn-primary"> <strong>На главную</strong> </button>    </li></Link>
            </nav>
        </header>
    )
}