import React, { Fragment } from "react";

function About() {
    return (
        <Fragment>
        <section className="page-section mb-0" id="about">
            <div className="container">
                <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">About</h2>
                <div className="divider-custom">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                    <div className="divider-custom-line"></div>
                </div>
                <div className="row">
                    <div className="col-lg-4 ms-auto masthead2">
                        <p className="lead">
                        <img className="masthead-avatar2 mb-5" src="assets/assets/img/ssy.jpg" alt="profile" />
                        </p>
                    </div>
                    <div className="col-lg-6 me-auto">
                            <p className="lead">
                                <h4>안녕하세요.<br/>웹 앱 개발자 송서연 입니다!</h4>
                            </p>
                            <p className="mb-3">

                            </p>
                            <h6>✏ 학력</h6>
                            <p className="lead2">
                                <b>인천전문대학 컴퓨터정보과 졸업</b><br/>- 2008.03. ~ 2010.02 졸업
                            </p>
                            <p className="mb-3"/>
                            <h6>💻 경력</h6>
                            <p className="lead2">
                                <b>㈜ 넥스트나우 기업부설연구소 책임연구원</b> (2021.04 ~ 현재)<br/>
                                <b>㈜ 블릭스소프트 개발팀 대리</b> (2011.12 ~ 2014.06)<br/>
                                <b>㈜ 넥스챌 개발팀 사원</b> (2010.02 ~ 2011.11)<br/>
                            </p>
                            <h6>📙 자격증</h6>
                            <p className="lead2">
                                <b>정보처리 기사</b> (2011.06.24)<br/>
                                <b>정보처리 산업기사</b> (2009.05.29)<br/>
                            </p>
                        
                    </div>
                </div>
            </div>
        </section>
        </Fragment>
    )
}
export default About;