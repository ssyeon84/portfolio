import React, { Fragment } from "react";
import Menu from "./Menu";
import Footer from "./Footer";
import { Link } from "react-router-dom";

function Home() {
    return (
        <Fragment>
            <div>
            <Menu />
            <header className="masthead bg-primary text-white text-center">
                <div className="container d-flex align-items-center flex-column">
                <img className="masthead-avatar mb-5" src="ASSETS/assets/img/avataaars.svg" alt="..." />
                <h1 className="masthead-heading text-uppercase mb-0">Start Bootstrap</h1>
                <div className="divider-custom divider-light">
                    <div className="divider-custom-line" />
                    <div className="divider-custom-icon"><i className="fas fa-star" /></div>
                    <div className="divider-custom-line" />
                </div>
                <p className="masthead-subheading font-weight-light mb-0">Graphic Artist - Web Designer - Illustrator</p>
                </div>
            </header>
            <section className="page-section portfolio" id="portfolio">
                <div className="container">
                <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Portfolio</h2>
                <div className="divider-custom">
                    <div className="divider-custom-line" />
                    <div className="divider-custom-icon"><i className="fas fa-star" /></div>
                    <div className="divider-custom-line" />
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-6 col-lg-4 mb-5">
                    <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal1">
                        <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                        <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x" /></div>
                        </div>
                        <img className="img-fluid" src="ASSETS/assets/img/portfolio/cabin.png" alt="..." />
                    </div>
                    </div>
                    <div className="col-md-6 col-lg-4 mb-5">
                    <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal2">
                        <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                        <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x" /></div>
                        </div>
                        <img className="img-fluid" src="ASSETS/assets/img/portfolio/cake.png" alt="..." />
                    </div>
                    </div>
                    <div className="col-md-6 col-lg-4 mb-5">
                    <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal3">
                        <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                        <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x" /></div>
                        </div>
                        <img className="img-fluid" src="ASSETS/assets/img/portfolio/circus.png" alt="..." />
                    </div>
                    </div>
                    <div className="col-md-6 col-lg-4 mb-5 mb-lg-0">
                    <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal4">
                        <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                        <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x" /></div>
                        </div>
                        <img className="img-fluid" src="ASSETS/assets/img/portfolio/game.png" alt="..." />
                    </div>
                    </div>
                    <div className="col-md-6 col-lg-4 mb-5 mb-md-0">
                    <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal5">
                        <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                        <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x" /></div>
                        </div>
                        <img className="img-fluid" src="ASSETS/assets/img/portfolio/safe.png" alt="..." />
                    </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                    <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal6">
                        <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                        <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x" /></div>
                        </div>
                        <img className="img-fluid" src="ASSETS/assets/img/portfolio/submarine.png" alt="..." />
                    </div>
                    </div>
                </div>
                </div>
            </section>
            <section className="page-section bg-primary text-white mb-0" id="about">
                <div className="container">
                <h2 className="page-section-heading text-center text-uppercase text-white">About</h2>
                <div className="divider-custom divider-light">
                    <div className="divider-custom-line" />
                    <div className="divider-custom-icon"><i className="fas fa-star" /></div>
                    <div className="divider-custom-line" />
                </div>
                <div className="row">
                    <div className="col-lg-4 ms-auto"><p className="lead">Freelancer is a free bootstrap theme created by Start Bootstrap. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p></div>
                    <div className="col-lg-4 me-auto"><p className="lead">You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!</p></div>
                </div>
                <div className="text-center mt-4">
                    <Link className="btn btn-xl btn-outline-light" to="/portfolio01">
                    {/* <a className="btn btn-xl btn-outline-light" href="https://startbootstrap.com/theme/freelancer/"> */}
                    <i className="fas fa-download me-2" />
                    Free Download!
                    </Link>
                    {/* </a> */}
                </div>
                </div>
            </section>
            <section className="page-section" id="contact">
                <div className="container">
                <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Contact Me</h2>
                <div className="divider-custom">
                    <div className="divider-custom-line" />
                    <div className="divider-custom-icon"><i className="fas fa-star" /></div>
                    <div className="divider-custom-line" />
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-8 col-xl-7">
                    <form id="contactForm" data-sb-form-api-token="API_TOKEN">
                        <div className="form-floating mb-3">
                        <input className="form-control" id="name" type="text" placeholder="Enter your name..." data-sb-validations="required" />
                        <label htmlFor="name">Full name</label>
                        <div className="invalid-feedback" data-sb-feedback="name:required">A name is required.</div>
                        </div>
                        <div className="form-floating mb-3">
                        <input className="form-control" id="email" type="email" placeholder="name@example.com" data-sb-validations="required,email" />
                        <label htmlFor="email">Email address</label>
                        <div className="invalid-feedback" data-sb-feedback="email:required">An email is required.</div>
                        <div className="invalid-feedback" data-sb-feedback="email:email">Email is not valid.</div>
                        </div>
                        <div className="form-floating mb-3">
                        <input className="form-control" id="phone" type="tel" placeholder="(123) 456-7890" data-sb-validations="required" />
                        <label htmlFor="phone">Phone number</label>
                        <div className="invalid-feedback" data-sb-feedback="phone:required">A phone number is required.</div>
                        </div>
                        <div className="form-floating mb-3">
                        <textarea className="form-control" id="message" type="text" placeholder="Enter your message here..." style={{height: '10rem'}} data-sb-validations="required" defaultValue={""} />
                        <label htmlFor="message">Message</label>
                        <div className="invalid-feedback" data-sb-feedback="message:required">A message is required.</div>
                        </div>
                        <div className="d-none" id="submitSuccessMessage">
                        <div className="text-center mb-3">
                            <div className="fw-bolder">Form submission successful!</div>
                            To activate this form, sign up at
                            <br />
                            <a href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
                        </div>
                        </div>
                        <div className="d-none" id="submitErrorMessage"><div className="text-center text-danger mb-3">Error sending message!</div></div>
                        <button className="btn btn-primary btn-xl disabled" id="submitButton" type="submit">Send</button>
                    </form>
                    </div>
                </div>
                </div>
            </section>
            <Footer />
            <div className="portfolio-modal modal fade" id="portfolioModal1" tabIndex={-1} aria-labelledby="portfolioModal1" aria-hidden="true">
                <div className="modal-dialog modal-xl">
                <div className="modal-content">
                    <div className="modal-header border-0"><button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close" /></div>
                    <div className="modal-body text-center pb-5">
                    <div className="container">
                        <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">Log Cabin</h2>
                            <div className="divider-custom">
                            <div className="divider-custom-line" />
                            <div className="divider-custom-icon"><i className="fas fa-star" /></div>
                            <div className="divider-custom-line" />
                            </div>
                            <img className="img-fluid rounded mb-5" src="ASSETS/assets/img/portfolio/cabin.png" alt="..." />
                            <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                            <button className="btn btn-primary" data-bs-dismiss="modal">
                            <i className="fas fa-xmark fa-fw" />
                            Close Window
                            </button>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <div className="portfolio-modal modal fade" id="portfolioModal2" tabIndex={-1} aria-labelledby="portfolioModal2" aria-hidden="true">
                <div className="modal-dialog modal-xl">
                <div className="modal-content">
                    <div className="modal-header border-0"><button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close" /></div>
                    <div className="modal-body text-center pb-5">
                    <div className="container">
                        <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">Tasty Cake</h2>
                            <div className="divider-custom">
                            <div className="divider-custom-line" />
                            <div className="divider-custom-icon"><i className="fas fa-star" /></div>
                            <div className="divider-custom-line" />
                            </div>
                            <img className="img-fluid rounded mb-5" src="ASSETS/assets/img/portfolio/cake.png" alt="..." />
                            <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                            <button className="btn btn-primary" data-bs-dismiss="modal">
                            <i className="fas fa-xmark fa-fw" />
                            Close Window
                            </button>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <div className="portfolio-modal modal fade" id="portfolioModal3" tabIndex={-1} aria-labelledby="portfolioModal3" aria-hidden="true">
                <div className="modal-dialog modal-xl">
                <div className="modal-content">
                    <div className="modal-header border-0"><button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close" /></div>
                    <div className="modal-body text-center pb-5">
                    <div className="container">
                        <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">Circus Tent</h2>
                            <div className="divider-custom">
                            <div className="divider-custom-line" />
                            <div className="divider-custom-icon"><i className="fas fa-star" /></div>
                            <div className="divider-custom-line" />
                            </div>
                            <img className="img-fluid rounded mb-5" src="ASSETS/assets/img/portfolio/circus.png" alt="..." />
                            <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                            <button className="btn btn-primary" data-bs-dismiss="modal">
                            <i className="fas fa-xmark fa-fw" />
                            Close Window
                            </button>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <div className="portfolio-modal modal fade" id="portfolioModal4" tabIndex={-1} aria-labelledby="portfolioModal4" aria-hidden="true">
                <div className="modal-dialog modal-xl">
                <div className="modal-content">
                    <div className="modal-header border-0"><button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close" /></div>
                    <div className="modal-body text-center pb-5">
                    <div className="container">
                        <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">Controller</h2>
                            <div className="divider-custom">
                            <div className="divider-custom-line" />
                            <div className="divider-custom-icon"><i className="fas fa-star" /></div>
                            <div className="divider-custom-line" />
                            </div>
                            <img className="img-fluid rounded mb-5" src="ASSETS/assets/img/portfolio/game.png" alt="..." />
                            <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                            <button className="btn btn-primary" data-bs-dismiss="modal">
                            <i className="fas fa-xmark fa-fw" />
                            Close Window
                            </button>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <div className="portfolio-modal modal fade" id="portfolioModal5" tabIndex={-1} aria-labelledby="portfolioModal5" aria-hidden="true">
                <div className="modal-dialog modal-xl">
                <div className="modal-content">
                    <div className="modal-header border-0"><button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close" /></div>
                    <div className="modal-body text-center pb-5">
                    <div className="container">
                        <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">Locked Safe</h2>
                            <div className="divider-custom">
                            <div className="divider-custom-line" />
                            <div className="divider-custom-icon"><i className="fas fa-star" /></div>
                            <div className="divider-custom-line" />
                            </div>
                            <img className="img-fluid rounded mb-5" src="ASSETS/assets/img/portfolio/safe.png" alt="..." />
                            <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                            <button className="btn btn-primary" data-bs-dismiss="modal">
                            <i className="fas fa-xmark fa-fw" />
                            Close Window
                            </button>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <div className="portfolio-modal modal fade" id="portfolioModal6" tabIndex={-1} aria-labelledby="portfolioModal6" aria-hidden="true">
                <div className="modal-dialog modal-xl">
                <div className="modal-content">
                    <div className="modal-header border-0"><button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close" /></div>
                    <div className="modal-body text-center pb-5">
                    <div className="container">
                        <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">Submarine</h2>
                            <div className="divider-custom">
                            <div className="divider-custom-line" />
                            <div className="divider-custom-icon"><i className="fas fa-star" /></div>
                            <div className="divider-custom-line" />
                            </div>
                            <img className="img-fluid rounded mb-5" src="ASSETS/assets/img/portfolio/submarine.png" alt="..." />
                            <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                            <button className="btn btn-primary" data-bs-dismiss="modal">
                            <i className="fas fa-xmark fa-fw" />
                            Close Window
                            </button>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </Fragment>
    );
}

export default Home;