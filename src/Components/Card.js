import React, { useState } from 'react'

function Card() {
    

    return (
        <div className="col">
            <div className="card mx-auto my-2">
                <div>
                    <img className="card-img" src="images/v1.jpg" alt="Vans" />
                </div>
                <div>
                    <div className="card-body">
                        <div className='item-name-quantity'>
                            <h4 className="card-title">Tomato</h4>
                            <div className="options d-flex flex-fill">
                                <select className="custom-select mr-1">
                                    <option selected>Color</option>
                                    <option value="1">Green</option>
                                    <option value="2">Blue</option>
                                    <option value="3">Red</option>
                                </select>
                            </div>
                        </div>
                        <div className="buy d-flex justify-content-between align-items-center">
                            <div className="price text-success"><h5 className="mt-4">$125</h5></div>
                            <a href="#hh" className="btn btn-danger mt-3"><i className="fas fa-shopping-cart"></i> Add to Cart</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card