import React from 'react';

const Projects = () => {
    return (
        <section className="mx-lg-5 px-lg-5 mx-md-0 px-md-0 py-lg-5" id="project">
            <div className="my-lg-3 my-4 text-center">
                <h2 className="project-t mt-lg-0 mt-1 fw-bold fs-1">My Projects</h2>
            </div>
            <div className="container project-container">
                <div className="row mt-4 project-row">
                    <div className="col-lg-4 mx-lg-3 border border-2 my-2 text-center text-white fw-bold rounded-4 mb-lg-0 mb-4">Project 1</div>
                    <div className="col-lg-4 mx-lg-4 border border-2 my-2 text-center text-white fw-bold rounded-4 mb-lg-0 mb-4">Project 2</div>
                    <div className="col-lg-4 mx-lg-4 border border-2 my-2 text-center text-white fw-bold rounded-4">Project 3</div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
