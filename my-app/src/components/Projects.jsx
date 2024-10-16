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
                        <img src="project-img-1.jpg" alt="Project 1" className='img' />
                        <div className="text-content">
                            <h3>Project 1</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia tempora enim dignissimos voluptatem culpa sed consequatur cumque nisi recusandae dolor?</p>
                            <button className='btn'>Read more</button>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="content">
                        <img src="project-img-2.jpg" alt="Project 2" className='img' />
                        <div className="text-content">
                            <h3>Project 2</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia tempora enim dignissimos voluptatem culpa sed consequatur cumque nisi recusandae dolor?</p>
                            <button className='btn'>Read more</button>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="content">
                        <img src="project-img-3.jpg" alt="Project 3" className='img' />
                        <div className="text-content">
                            <h3>Project 3</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia tempora enim dignissimos voluptatem culpa sed consequatur cumque nisi recusandae dolor?</p>
                            <button className='btn'>Read more</button>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="content">
                        <img src="project-img-3.jpg" alt="Project 4" className='img' />
                        <div className="text-content">
                            <h3>Project 4</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia tempora enim dignissimos voluptatem culpa sed consequatur cumque nisi recusandae dolor?</p>
                            <button className='btn'>Read more</button>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    );
};

export default Projects;
