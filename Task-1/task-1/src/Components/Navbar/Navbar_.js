import React from 'react';
import './Navbar_style.css';


const Navbar_ = () => { 

    return(
        /* start navbar */
        <nav className="navbar navbar-expand-lg navbar-fixed-top container-fluid">
            <div className="container">
                <div className="d-flex flex-grow-1">
                    <a to="/" className="navbar-brand d-lg-inline-block">
                        <div className="logo_box">LOGO</div>
                    </a>
                    <div className="w-100 text-right" id="menu-button">
                        <button className="navbar-toggler" id="menu-btn" type="button" data-toggle="collapse" data-target="#myNavbar">
                            <i className="fa fa-bars"></i>
                        </button>
                    </div>
                </div>
                <div className="collapse navbar-collapse flex-grow-1 animated fadeInTop" id="myNavbar">
                    <div className="">
                    <ul className="navbar-nav ml-auto flex-nowrap">
                       <a href="#">
                            <li className="nav-item">
                                <span  className="nav-a m-2 menu-item hvr-underline-from-left">Industrial Automation</span>
                            </li>
                        </a>
                        <a href="#">
                            <li className="nav-item">
                                <span className="nav-a m-2 menu-item hvr-underline-from-left">Digital Transformation</span>
                            </li>
                        </a>
                        <a href="#">
                            <li className="nav-item">
                                <span className="nav-a m-2 menu-item hvr-underline-from-left">Outsourcing</span>
                            </li>
                        </a>
                        <a href="#">
                            <li className="nav-item">
                                <span className="nav-a m-2 menu-item hvr-underline-from-left">About</span>
                            </li>
                        </a>
                        <a href="#">
                            <li className="nav-item">
                                <span className="nav-a m-2 menu-item hvr-underline-from-left">Knowledge hub</span>
                            </li>
                        </a>
                        <a href="#">
                            <li className="nav-item">
                                <span className="nav-a m-2 menu-item hvr-underline-from-left">Innovation</span>
                            </li>
                        </a>
                        <a href="#">
                            <li className="nav-item">
                                <span className="nav-a m-2 menu-item hvr-underline-from-left">Careers</span>
                            </li>
                        </a>
                        <a href="#">
                            <li className="nav-item connect">
                                <span className="nav-a m-2 menu-item hvr-underline-from-left">CONNECT</span>
                            </li>
                        </a>
                    </ul>
                    </div>
                </div>
            </div>
        </nav>
        
    )
}



export default Navbar_
