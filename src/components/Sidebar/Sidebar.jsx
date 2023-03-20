import React, { useState } from 'react';
import "./sidebar.css";
import Logo from "../../assets/logo-2.svg";
import Home from '../Home/Home';
import About from '../About/About';
import Resume from '../Resume/Resume';
import Portfolio from '../Portfolio/Portfolio';
import Service from '../Services/Service';
import Blog from '../Blog/Blog';
import Contact from '../Contact/Contact';

const Sidebar = () => {

    const [toggle, showMenu] = useState(false);


    return (
        <>
            <aside className={toggle ? "aside show-menu" : "aside"}>
                <a href="#home" className="nav__logo">
                    <img src={Logo} alt="" />
                </a>

                <nav className='nav'>
                    <div className="nav__menu">
                        <ul className="nav__list">
                            <li className='nav_item'>
                                <a href="#home" className="nav__link">
                                    <i className="icon-home"></i>
                                </a>
                            </li>

                            <li className='nav_item'>
                                <a href="#about" className="nav__link">
                                    <i className="icon-user-following"></i>
                                </a>
                            </li>

                            <li className='nav_item'>
                                <a href="#services" className="nav__link">
                                    <i className="icon-briefcase"></i>
                                </a>
                            </li>

                            <li className='nav_item'>
                                <a href="#resume" className="nav__link">
                                    <i className="icon-graduation"></i>
                                </a>
                            </li>

                            <li className='nav_item'>
                                <a href="#work" className="nav__link">
                                    <i className="icon-layers"></i>
                                </a>
                            </li>

                            <li className='nav_item'>
                                <a href="#pricing" className="nav__link">
                                    <i className="icon-bulb"></i>
                                </a>
                            </li>

                            <li className='nav_item'>
                                <a href="#blog" className="nav__link">
                                    <i className="icon-note"></i>
                                </a>
                            </li>

                            <li className='nav_item'>
                                <a href="#contact" className="nav__link">
                                    <i className="icon-bubble"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>


                <div className="nav__footer">
                    <span className="copyright">
                        &copy; 2023 - 2024.
                    </span>
                </div>
            </aside>

            <div className={toggle ? 'nav__toggle nav__toggle-open' : 'nav__toggle'}
                onClick={() => showMenu(!toggle)}>
                <i className="icon-menu"></i>
            </div>
        </>
    )
}


export default Sidebar
