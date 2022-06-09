import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Card from './Card'

function Items() {
    const [items, setItems] = useState([])

    fetch("/api/item", {
        method: "GET",
        headers: {
            'Content-Type': "application/json"
        }
    })
        .then(res => res.json())
        .then(data => setItems(data))


    const addCartOnClick = (e) => {
        fetch(`/api/user/additemtocart/${e.currentTarget.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': window.localStorage.getItem("auth-token")
            }
        })
            .then(res => res.json())
            .then(data => console.log(data))

    }
    console.log(items);
    return (
        <>

            <div className="titlepage mx-1" style={{ "padding-bottom": "30px" }}>
                <h2> Our <strong className="llow">Vegetables</strong> </h2>
            </div>
            <div>
                <form className="d-flex pb-5 justify-content-center" role="search">
                    <input className="front-page-from-searchbar form-control me-2" type="search" placeholder="Search Vegitables" aria-label="Search" />
                    <button className="btn btn-dark px-4" type="submit">Search</button>
                </form>
            </div>
            <div>
                <div className="col">
                    <div className="container">
                        <div className="row my-2">
                            {
                                items.map(item => {
                                    return (
                                        <div className="col">
                                            <div className="card mx-auto my-2">
                                                <div>
                                                    <img className="card-img" src="images/v1.jpg" alt="Vans" />
                                                </div>
                                                <div>
                                                    <div className="card-body">
                                                        <div className='item-name-quantity'>
                                                            <h4 className="card-title">{item.name}</h4>
                                                            <div className="options d-flex flex-fill">
                                                                <select className="custom-select mr-1">
                                                                    <option selected>Weight</option>
                                                                    <option value="1">100G</option>
                                                                    <option value="2">200G</option>
                                                                    <option value="3">500G</option>
                                                                    <option value="3">1KG</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="buy d-flex justify-content-between align-items-center">
                                                            <div className="price text-success"><h5 className="mt-4">₹{item.price}</h5></div>
                                                            <a href="#hh" id={item.id} className="btn btn-danger mt-3" onClick={addCartOnClick}><i className="fas fa-shopping-cart"></i> Add to Cart</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                            {/* <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card /> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Items
