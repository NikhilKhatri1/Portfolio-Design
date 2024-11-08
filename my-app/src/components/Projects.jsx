import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// Import required modules
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';
// import './swiperStyle.css';

const Projects = () => {
    return (
        <section className="py-lg-5 py-3" id="Project">
            <div className="my-lg-5 my-4 text-center">
                <h2 className="project-t fw-bold fs-1">My Projects</h2>
            </div>
            <div className='ms-auto me-auto card-wrapper border-4 border-white d-flex justify-content-center align-items-center'>
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={'auto'}
                    loop={true}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 150,
                        modifier: 2.5,
                        slideShadows: true,
                    }}
                    autoplay:true
                    modules={[EffectCoverflow, Autoplay]}
                    className="mySwiper"
                >
                    {/* SwiperSlide components should be directly inside Swiper */}
                    <SwiperSlide className="content">
                        <img src="project-1.png" alt="Project 1" className='img' />
                        <div className="text-content">
                            <h3>Doctor Appointment App</h3>
                            <p>The Doctor Appointment Web App allows admins to manage customer details, doctors, and payments, while customers can update their personal information.</p>
                            <a className='text-decoration-none text-white btn' href="https://prescriptoappointment.netlify.app/">Read more</a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="content">
                        <img src="project-2.png" alt="Project 2" className='img' />
                        <div className="text-content">
                            <h3>Property Management App</h3>
                            <p>The Property Management Web App allows admins to manage customer details, properties, and payments, while customers can update their personal information.</p>
                            <a href="https://propertymanagemenapp1.netlify.app/" className='text-decoration-none text-white btn'>Read more</a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="content">
                        <img src="project-4.png" alt="Project 3" className='img' />
                        <div className="text-content">
                            <h3>Nike Landing Page</h3>
                            <p> I built a dynamic Nike webpage with React.js for the front-end and Node.js for the back-end, focusing on delivering a sleek, responsive design that aligns with Nike's brand and enhances user interaction</p>
                            <a href="https://nikewebpagetrail.netlify.app/" className='btn text-decoration-none text-white'>Read more</a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="content">
                        <img src="project-3.png" alt="Project 4" className='img' />
                        <div className="text-content">
                            <h3>Lazarev Landing Page</h3>
                            <p>This is a sleek, interactive digital product design agency website, showcasing cutting-edge UI/UX design</p>
                            <a href="https://lazarevlandingpage.netlify.app/" className='text-decoration-none text-white btn'>Read more</a>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    );
};

export default Projects;
