import React from 'react';

const Header = () => {
    return (
        <div class="header-wrapper sticky-top">
            <header class="header mx-lg-5 px-lg-5 mx-md-0 px-md-0">
                <nav class="navbar navbar-expand-lg navbar-dark mx-lg-4 px-lg-4 mx-md-0 px-md-0">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="#">Nikhil Khatri</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                    <a class="nav-link active mx-lg-2" aria-current="page" href="#home" id="active">Home</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link mx-lg-2" href="#about">About</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link mx-lg-2" href="#qualification">Qualification</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link mx-lg-2" href="#project">Projects</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link mx-lg-2" href="#portfolio">Portfolio</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link mx-lg-2" href="#contact">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    );
};

export default Header;
