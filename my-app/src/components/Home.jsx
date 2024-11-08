import React from 'react';

const Home = () => {
    return (
        <section class="py-4 pt-md-11 container-bg " id="home">
            <div class="container mt-lg-4 mt-md-0">
                <div class="row mx-lg-2 px-lg-3 mx-md-0 px-md-0">
                    <div class="col-lg-6 col-12 col-md-7">
                        <div class="title">
                            <h4 class="text-center text-lg-start fw-bold">Hello</h4>
                            <h1 class="display-3 text-center text-md-start">I'm <b class="fw-semibold">Nikhil Khatri</b>
                                <br/><b class="fw-bold">a</b> <b class="fw-semibold">UI FULL STACK DEVELOPER</b>
                            </h1>
                        </div>
                        <div class="title-description mt-lg-3 text-lg-start text-center">
                            <p>I'm a UI Fullstack Developer focused on building responsive, user-friendly web apps. I work across the entire stack, creating intuitive front-end designs and ensuring smooth, efficient back-end functionality.</p>
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
