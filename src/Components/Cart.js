import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function Cart() {
  const [itemnumber, setItemnumber] = useState(1)
  const plusNumber = (e) => {
    const id = e.currentTarget.id;
    document.getElementById(id).previousElementSibling.value = parseInt(document.getElementById(id).previousElementSibling.value) + 1
  }
  const minusNumber = (e) => {
    const id = e.currentTarget.id;
    document.getElementById(id).nextElementSibling.value = parseInt(document.getElementById(id).nextElementSibling.value) - 1
  }
  const onChangeHaldle = (e) => {
    setItemnumber(e.target.value)
  }
  return (
    <section className="h-100 h-custom">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12">
            <div className="cart-card card-registration card-registration-2" style={{ borderRadius: "15px" }}>
              <div className="card-body p-0">
                <div className="row g-0">
                  <div className="col-lg-8">
                    <div className="p-5">
                      <div className="d-flex justify-content-between align-items-center mb-5">
                        <h1 className="fw-bold mb-0 text-black">Shopping Cart</h1>
                        <h6 className="mb-0 text-muted">3 items</h6>
                      </div>
                      <hr className="my-4" />

                      <div className="row mb-4 d-flex justify-content-between align-items-center">
                        <div className="col-md-2 col-lg-2 col-xl-2">
                          <img
                            src="images/v1.jpg"
                            className="img-fluid rounded-3" alt="Tomato" />
                        </div>
                        <div className="col-md-3 col-lg-3 col-xl-3">
                          <h6 className="text-black">Tomato</h6>
                          <h6 className="text-muted">500g</h6>
                        </div>
                        <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                          <button id='minus1' className="btn btn-link px-2"
                            onClick={minusNumber}>
                            <i className="fas fa-minus"></i>
                          </button>

                          <input id="form1" min="0" name="quantity" value={1} type="number"
                            className="form-control form-control-sm" onChange={onChangeHaldle} />

                          <button id='plus1' className="btn btn-link px-2"
                            onClick={plusNumber}>
                            <i className="fas fa-plus"></i>
                          </button>
                        </div>
                        <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                          <h6 className="mb-0">₹ 44.00</h6>
                        </div>
                        <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                          <a href="#!" className="text-muted"><i className="fas fa-times"></i></a>
                        </div>
                      </div>

                      <hr className="my-4" />

                      <div className="row mb-4 d-flex justify-content-between align-items-center">
                        <div className="col-md-2 col-lg-2 col-xl-2">
                          <img
                            src="images/v1.jpg"
                            className="img-fluid rounded-3" alt="Tomato" />
                        </div>
                        <div className="col-md-3 col-lg-3 col-xl-3">
                          <h6 className="text-black">Tomato</h6>
                          <h6 className="text-muted">500g</h6>
                        </div>
                        <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                          <button id='minus2' className="btn btn-link px-2"
                            onClick={minusNumber}>
                            <i className="fas fa-minus"></i>
                          </button>

                          <input id="form1" min="0" name="quantity" value={1} type="number"
                            className="form-control form-control-sm" />

                          <button id='plus2' className="btn btn-link px-2"
                            onClick={plusNumber}>
                            <i className="fas fa-plus"></i>
                          </button>
                        </div>
                        <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                          <h6 className="mb-0">₹ 44.00</h6>
                        </div>
                        <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                          <a href="#!" className="text-muted"><i className="fas fa-times"></i></a>
                        </div>
                      </div>

                      <hr className="my-4" />

                      <div className="row mb-4 d-flex justify-content-between align-items-center">
                        <div className="col-md-2 col-lg-2 col-xl-2">
                          <img
                            src="images/v1.jpg"
                            className="img-fluid rounded-3" alt="Tomato" />
                        </div>
                        <div className="col-md-3 col-lg-3 col-xl-3">
                          <h6 className="text-black">Tomato</h6>
                          <h6 className="text-muted">500g</h6>
                        </div>
                        <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                          <button id='minus3' className="btn btn-link px-2"
                            onClick={minusNumber}>
                            <i className="fas fa-minus"></i>
                          </button>

                          <input id="form1" min="0" name="quantity" value={1} type="number"
                            className="form-control form-control-sm" />

                          <button id='plus3' className="btn btn-link px-2"
                            onClick={plusNumber}>
                            <i className="fas fa-plus"></i>
                          </button>
                        </div>
                        <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                          <h6 className="mb-0">₹ 44.00</h6>
                        </div>
                        <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                          <a href="#!" className="text-muted"><i className="fas fa-times"></i></a>
                        </div>
                      </div>

                      <hr className="my-4" />

                      <div className="pt-5">
                        <h6 className="mb-0"><Link to="/items" className="text-body"><i
                          className="fas fa-long-arrow-alt-left me-2"></i>Back to shop</Link></h6>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="p-5 bg-grey">
                      <h3 className="fw-bold mb-5 mt-2 pt-1">Summary</h3>
                      <hr className="my-4" />

                      <div className="d-flex justify-content-between mb-4">
                        <h5 className="text-uppercase">items 3</h5>
                        <h5>₹ 132.00</h5>
                      </div>

                      <div className="d-flex justify-content-between mb-4">
                        <h6 className="text-uppercase">Delivery Charges</h6>
                        <h5>₹ 50</h5>
                      </div>

                      <hr className="my-4" />

                      <div className="d-flex justify-content-between mb-5">
                        <h5 className="text-uppercase">Total price</h5>
                        <h5>₹ 182.00</h5>
                      </div>

                      <button type="button" className="btn btn-dark btn-block btn-lg"
                        data-mdb-ripple-color="dark">Buy Now</button>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Cart
