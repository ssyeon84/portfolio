import React, { Fragment } from "react";

function Popup({id, title, imgPath, period, skill, work}) {
    return (
        <Fragment>
        <div className="portfolio-modal modal fade" id={id} tabIndex={-1} aria-labelledby={id} aria-hidden="true">
            <div className="modal-dialog modal-xl">
                <div className="modal-content">
                    <div className="modal-header border-0"><button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close" /></div>
                    <div className="modal-body pb-5">
                    <div className="container">
                        <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0 text-center">{title}</h2>
                            <div className="divider-custom">
                            <div className="divider-custom-line" />
                            <div className="divider-custom-icon"><i className="fas fa-star" /></div>
                            <div className="divider-custom-line" />
                            </div>
                            <img className="img-fluid rounded mb-5" src={imgPath} alt="..." />
                            <p className="mb-2 text-left">
                                <b>프로젝트명 :</b> {title}
                            </p>
                            <p className="mb-2 text-left">
                                <b>진행기간 :</b> {period}
                            </p>
                            <p className="mb-2 text-left">
                                <b>사용기술 :</b> {skill}
                            </p>
                            <p className="mb-2 text-left">
                                <b>수행업무 :</b> {work}
                            </p>
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
export default Popup;