import React from 'react';

const Qualifications = () => {
    return (
        <section className="pt-lg-5 pt-5" id="qualification">
            <div className="mt-lg-2 mt-5 text-center">
                <h3 className="qualification-st mb-lg-4 mt-lg-0 mt-4 fw-bold fs-3">My Journey</h3>
                <h2 className="qualification-t mt-lg-0 mt-1 fw-bold fs-1 text-light">Qualification</h2>
            </div>
            <div className="row">
                <div className="offset-lg-1 offset-1 col-10 col-lg-5 fs-2 text-start my-4 mx-auto">
                    <div className="resume-education fw-bold text-center">Education</div>
                    <hr />
                    {/* Accordion for Education */}
                </div>
                <div className="offset-lg-1 offset-1 col-10 col-lg-5 fs-2 text-start my-4 mx-auto">
                    <div className="resume-education fw-bold text-center">Courses</div>
                    <hr />
                    {/* Accordion for Courses */}
                </div>
            </div>
        </section>
    );
};

export default Qualifications;
