import React from 'react';
import "./sidebar.css";
import Logo from "../../assets/logo.svg";
import Home from '../Home/Home';
import About from '../About/About';
import Resume from '../Resume/Resume';
import Portfolio from '../Portfolio/Portfolio';
import Service from '../Services/Service';
import Blog from '../Blog/Blog';
import Contact from '../Contact/Contact';

const Sidebar = () => {
    return (
        <aside className='aside'>
            <a href="#home" className="nav__logo">
                <img src={Logo} alt="" />
            </a>

            <nav className='nav'>
                <div className="nav__menu">
                    <ul className="nav__list">
                        <li className='nav_item'>
                            <a href={Home} className="nav__link">
                                <i className="icon-home"></i>
                            </a>
                        </li>

                        <li className='nav_item'>
                            <a href={About} className="nav__link">
                                <i className="icon-user-following"></i>
                            </a>
                        </li>

                        <li className='nav_item'>
                            <a href={Service} className="nav__link">
                                <i className="icon-briefcase"></i>
                            </a>
                        </li>

                        <li className='nav_item'>
                            <a href={Resume} className="nav__link">
                                <i className="icon-graduation"></i>
                            </a>
                        </li>

                        <li className='nav_item'>
                            <a href={Portfolio} className="nav__link">
                                <i className="icon-layers"></i>
                            </a>
                        </li>

                        <li className='nav_item'>
                            <a href={Blog} className="nav__link">
                                <i className="icon-note"></i>
                            </a>
                        </li>

                        <li className='nav_item'>
                            <a href={Contact} className="nav__link">
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
    )
}


export default Sidebar
