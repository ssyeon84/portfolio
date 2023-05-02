import React, { Fragment } from "react";

function Portfolio() {
    return (
        <Fragment>
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
        </Fragment>
    );
}
export default Portfolio;