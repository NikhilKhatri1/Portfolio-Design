import React from 'react';
import { Accordion } from 'react-bootstrap';

const Qualifications = () => {
    return (
        <section className="pt-lg-5 pt-5 container-bg" id="qualification">
            <div className="mt-lg-2 mt-5 text-center">
                <h3 className="qualification-st mb-lg-4 mt-lg-0 mt-4 fw-bold fs-3">My Journey</h3>
                <h2 className="qualification-t mt-lg-0 mt-1 fw-bold fs-1 text-light">Qualification</h2>
            </div>
            <div className="row">
                <div className="offset-lg-1 offset-1 col-10 col-lg-5 fs-2 text-start my-4 mx-auto">
                    <div className="resume-education fw-bold text-center">Education</div>
                    <hr />
                    <Accordion defaultActiveKey="0" id="educationAccordion">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>B.Tech</Accordion.Header>
                            <Accordion.Body>
                                <div className="row">
                                    <h4 className="resume-title fw-bold fs-6 col-6">Anand Engineering College</h4>
                                    <h5 className="col-6 resume-date text-end fs-6 fw-bold"></h5>
                                    <p className="resume-description col-12 my-3">
                                        I completed my B.Tech in Electronics and Communication Engineering from Anand Engineering College, Agra, where I built a strong foundation in electronics, communication systems, and modern technologies in the field.
                                    </p>
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                        
                    </Accordion>
                </div>
                <div className="offset-lg-1 offset-1 col-10 col-lg-5 fs-2 text-start my-4 mx-auto">
                    <div className="resume-education fw-bold text-center">Courses</div>
                    <hr />
                    <Accordion defaultActiveKey="0" id="coursesAccordion">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Python with Data-Structure</Accordion.Header>
                            <Accordion.Body>
                                <div className="row">
                                    <h4 className="resume-title fw-bold fs-6 col-6">Coding Ninjas <a href="https://ninjasfiles.s3.amazonaws.com/certificate278050899d3f9998a701805a910f73c2096d45d.pdf" className='bi bi-arrow-up-right-square-fill'></a></h4>
                                    <h5 className="col-6 resume-date text-end fs-6 fw-bold">6 Months</h5>
                                    <p className="resume-description col-12 my-3">
                                        Completed Python with Data Structures from Coding Ninjas, mastering Python and key data structures to solve complex problems efficiently
                                    </p>
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>UI / Full-Stack with React</Accordion.Header>
                            <Accordion.Body>
                                <div className="row">
                                    <h4 className="resume-title fw-bold fs-6 col-6">Naresh IT</h4>
                                    <h5 className="col-6 resume-date text-end fs-6 fw-bold">6 Months</h5>
                                    <p className="resume-description col-12 my-3">
                                        Completing a comprehensive training program focused on UI development, gaining proficiency in key technologies including HTML, CSS, JavaScript, and front-end frameworks
                                    </p>
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
            </div>
        </section>
    );
};

export default Qualifications;
