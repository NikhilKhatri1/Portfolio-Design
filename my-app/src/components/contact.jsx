import React from 'react';
import { Accordion } from 'react-bootstrap';

const Contact = () => {
    return (
        <section className="pt-lg-5 pt-3 mt-3 mt-lg-0 container-bg" id="contact">
            <div className="mt-lg-2 mt-5 text-center">
                <h3 className="qualification-st mb-lg-4 mt-lg-0 mt-4 fw-bold fs-1">Contact</h3>
            </div>
            <div className="row">
                <div className="offset-lg-1 offset-1 col-10 col-lg-5 fs-2 text-start my-4 mx-auto">
                    <div className="resume-education fw-bold text-center">Social Link</div>
                    <hr />
                    <div className='ms-0 ms-lg-4 contact'>
                        <a href='' className='btn bi bi-github'> <span className='ms-1'>github</span></a>
                        <a href='' className='btn mx-2 bi bi-linkedin'><a href=""></a><span className='ms-1'>Linkedin</span></a>
                        <a href='' className='btn bi bi-google'><a href=""></a><span className='ms-1'>Gmail</span></a>
                    </div>

                </div>
                <div className="offset-lg-1 offset-1 col-10 col-lg-5 fs-2 text-start my-4 mx-auto">
                    <div className="resume-education fw-bold text-center">Personal</div>
                    <hr />
                    <div className='ms-0 ms-lg-4'>
                        <h5 className=''>Phone Number : </h5>
                        <h5 >Email : </h5>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Contact;
