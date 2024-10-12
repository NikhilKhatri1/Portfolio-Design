import React from 'react';

const Home = () => {
    return (
        <section class="pt-4 pt-md-11" id="home">
            <div class="container mt-lg-4 mt-md-0">
                <div class="row mx-lg-2 px-lg-3 mx-md-0 px-md-0">
                    <div class="col-lg-6 col-12 col-md-7">
                        <div class="title">
                            <h4 class="text-center text-lg-start fw-bold">Hello</h4>
                            <h1 class="display-3 text-center text-md-start">I'm <b class="fw-semibold">Nikhil Khatri</b>
                                <br/><b class="fw-bold">a</b> <b class="fw-semibold">UI Designer</b>
                            </h1>
                        </div>
                        <div class="title-description mt-lg-3 text-lg-start text-center">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis culpa quam libero
                                cumque, placeat dolor, atque cupiditate est aliquid quia eaque dolorem ullam ex? Quae
                                commodi, aliquam rem qui molestias tempore libero, obcaecati a nihil beatae iste,
                                suscipit </p>
                        </div>
                        <div class="button mt-2 mb-4">
                            <a href="#" class="btn">Hire Me</a>
                            <a href="#Porfolio" class="btn btn-transparent">Portfolio</a>

                        </div>
                    </div>
                    <div class="col-lg-6 col-12 col-md-5 img-wrapper">
                        <img src="profile-2.jpg" alt="" class="image mt-2" />
                    </div>
                </div>

            </div>
        </section >
    );
};

export default Home;
