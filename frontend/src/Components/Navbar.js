import React, { useEffect, useState } from 'react'
import { Link, useLocation } from "react-router-dom";

function Navbar() {
    // const changeActive = (e) => {
    //     e.preventDefault()
    //     const allItems = document.getElementsByClassName("nav-link")
    //     for (let index = 0; index < allItems.length; index++) {
    //         const element = allItems[index];
    //         element.classList.remove("active")
    //     }
    //     const id = e.currentTarget.id;
    //     document.getElementById(id).classList.add("active")
    // }
    const location = useLocation()
    const [path, setPath] = useState()
    useEffect(() => {
        setPath(location.pathname)
    }, [location])
    console.log(path);

    return (
        <nav className="navbar navbar-expand-lg bg-white fixed-top">
            <div className="container-fluid">
                <span className="navbar-brand" href="/" style={{ color: "#488d1c" }}>Tasty Treats</span>
                <div className="navbar-toggler" style={{ border: "none" }}>
                    <Link className='react-router-Link' to='/cart'><i className="fa-icon fa-solid fa-cart-shopping me-2"></i></Link>
                    <Link className='react-router-Link' to='/myAccount'><i className="fa-icon fa-solid fa-user me-4"></i></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link id='home-link' className={`nav-link ${path === '/' ? "active" : ""} `} aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link id='about-link' className={`nav-link ${path === '/about' ? "active" : ""} `} to="/about">About</Link>
                        </li>
                        {/* <li className="nav-item">
                            <a id='contact-link' className={`nav-link ${path === '/contact' ? "active" : ""} `} href="/contact">Contact Us</a>
                        </li> */}
                        <li className="nav-item">
                            <Link id='menu-link' className={`nav-link ${path === '/items' ? "active" : ""} `} to="/items">Vegitables</Link>
                        </li>
                    </ul>
                </div>
                <div className='cart-account-div'>
                    <Link className='react-router-Link' to='/cart'>Cart<i className="fa-icon fa-solid fa-cart-shopping ms-2"></i></Link>
                    <Link className='react-router-Link me-1' to='/myAccount'>Account<i className="fa-icon fa-solid fa-user ms-2"></i></Link>
                </div>
                {/* <i className="fa-icon fa-solid fa-cart-shopping ms-2"></i>
                <i className="fa-icon fa-solid fa-user ms-2"></i> */}

            </div>
        </nav>
    )
}

export default Navbar