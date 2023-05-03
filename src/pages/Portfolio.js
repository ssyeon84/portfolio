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
                    {/* 1라인 */}
                    <div className="col-md-6 col-lg-4 mb-5 bg-secondary">
                    <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#episodeModal">
                        <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                        <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x" /></div>
                        </div>
                        {/* <img className="img-fluid" src="ASSETS/assets/img/portfolio/episode.png" alt="episode" /> */}
                    </div>
                    </div>
                    <div className="col-md-6 col-lg-4 mb-5">
                    <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#buynowModal">
                        <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                        <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x" /></div>
                        </div>
                        <img className="img-fluid" src="ASSETS/assets/img/portfolio/buynow.png" alt="buynow" />
                    </div>
                    </div>
                    <div className="col-md-6 col-lg-4 mb-5">
                    <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#salaryingModal">
                        <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                        <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x" /></div>
                        </div>
                        <img className="img-fluid" src="ASSETS/assets/img/portfolio/salarying.png" alt="salarying" />
                    </div>
                    </div>
                    {/* 2라인 */}
                    <div className="col-md-6 col-lg-4 mb-5">
                    <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#nexusModal">
                        <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                        <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x" /></div>
                        </div>
                        <img className="img-fluid" src="ASSETS/assets/img/portfolio/nexus.png" alt="nexus" />
                    </div>
                    </div>
                    <div className="col-md-6 col-lg-4 mb-5">
                    <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#skonModal">
                        <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                        <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x" /></div>
                        </div>
                        <img className="img-fluid" src="ASSETS/assets/img/portfolio/skon.png" alt="skon" />
                    </div>
                    </div>
                    <div className="col-md-6 col-lg-4 mb-5">
                    <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#moceanModal">
                        <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                        <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x" /></div>
                        </div>
                        <img className="img-fluid" src="ASSETS/assets/img/portfolio/mocean.png" alt="mocean" />
                    </div>
                    </div>
                    {/* 3라인 */}
                    <div className="col-md-6 col-lg-4">
                    <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#samsungModal">
                        <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                        <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x" /></div>
                        </div>
                        <img className="img-fluid" src="ASSETS/assets/img/portfolio/samsung.jpg" alt="samsung" />
                    </div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                    <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#electronicModal">
                        <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                        <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x" /></div>
                        </div>
                        <img className="img-fluid" src="ASSETS/assets/img/portfolio/electronic.jpg" alt="electronic" />
                    </div>
                    </div>
                </div>
                </div>
            </section>
            {/* 모달 팝업 */}
            <div className="portfolio-modal modal fade" id="episodeModal" tabIndex={-1} aria-labelledby="episodeModal" aria-hidden="true">
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
                            <img className="img-fluid rounded mb-5" src="ASSETS/assets/img/portfolio/episode.png" alt="..." />
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
            <div className="portfolio-modal modal fade" id="buynowModal" tabIndex={-1} aria-labelledby="buynowModal" aria-hidden="true">
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
                            <img className="img-fluid rounded mb-5" src="ASSETS/assets/img/portfolio/buynow.png" alt="..." />
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
            <div className="portfolio-modal modal fade" id="salaryingModal" tabIndex={-1} aria-labelledby="salaryingModal" aria-hidden="true">
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
                            <img className="img-fluid rounded mb-5" src="ASSETS/assets/img/portfolio/salarying.png" alt="..." />
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
            <div className="portfolio-modal modal fade" id="nexusModal" tabIndex={-1} aria-labelledby="nexusModal" aria-hidden="true">
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
                            <img className="img-fluid rounded mb-5" src="ASSETS/assets/img/portfolio/nexus.png" alt="..." />
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
            <div className="portfolio-modal modal fade" id="skonModal" tabIndex={-1} aria-labelledby="skonModal" aria-hidden="true">
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
                            <img className="img-fluid rounded mb-5" src="ASSETS/assets/img/portfolio/skon.png" alt="..." />
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
            <div className="portfolio-modal modal fade" id="moceanModal" tabIndex={-1} aria-labelledby="moceanModal" aria-hidden="true">
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
                            <img className="img-fluid rounded mb-5" src="ASSETS/assets/img/portfolio/mocean.png" alt="..." />
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
            <div className="portfolio-modal modal fade" id="samsungModal" tabIndex={-1} aria-labelledby="samsungModal" aria-hidden="true">
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
                            <img className="img-fluid rounded mb-5" src="ASSETS/assets/img/portfolio/samsung.jpg" alt="..." />
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
            <div className="portfolio-modal modal fade" id="electronicModal" tabIndex={-1} aria-labelledby="electronicModal" aria-hidden="true">
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
                            <img className="img-fluid rounded mb-5" src="ASSETS/assets/img/portfolio/electronic.jpg" alt="..." />
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