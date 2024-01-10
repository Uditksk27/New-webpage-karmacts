import React, {useState} from "react";
// import MenuItems from './MenuItems';
import {Link} from 'react-router-dom'
import { MenuItems } from "./MenuItems";
import './Dropdown.css'

function Dropdown() {
    const [click, setclick] = useState(false)

    const handleClick = () => setclick(!click)
    return(
        <>
            <ul onClick={handleClick} className={click ? 'dropdown-menu-clicked' : 
            'dropdown-menu'}>
                {MenuItems.map((item, index) => {
                    return (
                        <li key={index}>
                            <Link className={item.cName} 
                            to={item.path} 
                            onClick={() => setclick(false)}>
                                {item.title}
                            </Link>
                        </li>
                    );
                } )}
            </ul>
        </>
    )
}

export default Dropdown