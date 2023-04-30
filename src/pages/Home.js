import React, { Fragment } from "react";
import Menu from "./Menu";
import Footer from "./Footer";
import Portfolio from "./Portfolio";
import About from "./About";
import Stacks from "./Stacks";

function Home() {
    return (
        <Fragment>
            <div>
            <Menu />
            <header className="masthead bg-primary text-white text-center">
                <div className="container d-flex align-items-center flex-column">
                <h1 className="masthead-heading text-uppercase mb-0">SEO YEON, SONG</h1>
                <div className="divider-custom divider-light">
                    <div className="divider-custom-line" />
                    <div className="divider-custom-icon"><i className="fas fa-star" /></div>
                    <div className="divider-custom-line" />
                </div>
                <p className="masthead-subheading font-weight-light mb-0">Web & Hybrid App - Developer</p>
                </div>
            </header>
            <About />
            <Stacks />
            <Portfolio />
            <Footer />
        </div>
        </Fragment>
    );
}

export default Home;