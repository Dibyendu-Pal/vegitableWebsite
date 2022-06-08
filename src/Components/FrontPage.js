import React from 'react'

function FrontPage() {
    return (
        <div id='home' className='front-page-full-div grid-2'>
            <div className='frontpage-left-div'>
                <span>Welcome to</span>
                <h1>Tasty Treats</h1>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal </p>
                <form className="d-flex pb-5" role="search">
                    <input className="front-page-from-searchbar form-control me-2" type="search" placeholder="Search Vegitables and Fruits" aria-label="Search" />
                    <button className="btn btn-dark px-5" type="submit">Search</button>
                </form>
                <div className='d-flex'>
                    <button className="btn btn-dark py-3 px-4 me-4" type="submit">Contact</button>
                    <button className="btn btn-dark py-3 px-4" type="submit">Vegitables</button>
                </div>
            </div>
            <div>
                <img className='front-page-img pt-4' src="images/img2.png" alt="" />
            </div>
        </div>
    )
}

export default FrontPage