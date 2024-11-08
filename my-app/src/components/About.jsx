import React from 'react';

const About = () => {
    return (
        <section class="pt-5 pt-lg-4 text-center" id="about">
            <div class="container mt-lg-4 mt-5" id="data-container">
                <div class="row mx-lg-2 px-lg-3 mx-md-0 px-md-0" id="row">
                    <div class="col-lg-5 col-12 mx-md-auto" id="about-img-wrapper">
                        <div class="about-img-wrapper">
                            <img src="about-2.jpg" width="260" height="300" class="about-img" />
                            <img src="about-2.jpg" width="260" height="300" class="about-img" />
                            <img src="about-2.jpg" width="260" height="300" class="about-img" />
                            <img src="about-2.jpg" width="260" height="300" class="about-img" />
                        </div>
                    </div>
                    <div class="col-lg-7 col-12 text-center">
                        <h3 class="section-title text-lg-start mb-lg-4 mt-lg-0 mt-4 fw-bold fs-3">Who am i?</h3>
                        <h2 class="h3 mt-lg-0 mt-1">I'm Nikhil Khatri, a UI FULL-STACK <br /> DEVELOPER</h2>
                        <p class="description my-4 ">
                            I love creating websites and apps that are both easy to use and look great. From building user-friendly designs to making sure everything works smoothly behind the scenes, I handle both the front-end and back-end. My goal is to make simple, fast, and reliable web applications that solve real problems.
                        </p>
                        <hr />
                        <ul class="about-data text-start list-unstyled row p-lg-4 my-lg-3 p-2 my-5">

                            <li class="data-item col-6 col-lg-6 mb-2">
                                <div class="row">
                                    <h5 class="data-title col-lg-4">Name:</h5>
                                    <span class="data-description col-lg-8"> Nikhil Khatri</span>
                                </div>
                            </li>

                            <li class="data-item col-6 col-lg-6">
                                <div class="row">
                                    <h5 class="data-title col-lg-4">From:</h5>
                                    <span class="data-description col-lg-8">Agra, INDIA</span>
                                </div>
                            </li>
                            <li class="data-item col-6 col-lg-6">
                                <div class="row">
                                    <h5 class="data-title col-lg-4">Email:</h5>
                                    <span class="data-description col-lg-8 text-primary">nikkhatri311@gmail.com</span>
                                </div>
                            </li>
                        </ul>
                        <div class="about-button ">
                            <a href='Nikhil Khatri UI Full Stack Developer.pdf' class="btn mb-2" download="Nikhil_Khatri_CV.pdf">Download CV</a>
                            <hr />
                            <div class="social text-center mt-lg-4 mt-4">
                                <a href="https://github.com/NikhilKhatri1" class="social-link mx-lg-2 mx-3 "><i class="bi bi-github"></i></a>
                                <a href="https://www.linkedin.com/in/nikhil-khattri/" class="social-link mx-lg-2 mx-3 "><i class="bi bi-linkedin"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
