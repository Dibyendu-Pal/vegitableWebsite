import React from 'react'

function About() {
    return (
        <>
            <div id='about' className='grid-2 full-about-div'>
                <div className='about-box'>
                    <h2>About us</h2>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages andIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many</p>
                </div>
                <div>
                    <img className='about-img' src="images/about.jpg" alt="" />
                </div>
            </div>
            {/* <!-- vegetable --> */}
            <div id="vegetable" class="vegetable">
                <div class="container container-vegitables">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="titlepage">
                                <h2> Fresh <strong class="llow">vegetable</strong> </h2>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xl-5 col-lg-5 col-md-5 col-sm-12 ">
                            <div class="vegetable_shop">
                                <h3>Best Vegetables Shop</h3>
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages andIt is a long established fact that a reader will be distracted </p>
                            </div>
                        </div>
                        <div class="col-xl-7 col-lg-7 col-md-7 col-sm-12 ">
                            <div class="vegetable_img">
                                <figure><img src="images/v1.jpg" alt="#" /></figure>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- end vegetable --> */}
        </>

    )
}

export default About