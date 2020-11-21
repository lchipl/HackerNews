import React from 'react';
import Icon from './y18.gif';
import  './stylesHeader.css';
export const Header = () =>{
    return(
        <header className="main-header">

            <div className="icon-header"><img src={Icon} /></div>
            <nav>
                <li> <strong>На главную</strong>     </li>
            </nav>
        </header>
    )
}