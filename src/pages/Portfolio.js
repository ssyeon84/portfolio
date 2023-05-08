import React, { Fragment } from "react";
import Popup from "./portfolio/Popup";

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
                    <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#episodeModal">
                        <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                        <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x" /></div>
                        </div>
                        <img className="img-fluid-100" src="ASSETS/assets/img/portfolio/episode.png" alt="episode" />
                    </div>
                    <div>💻 Episode 2.0 서비스 개발 및 운영</div>
                    </div>
                    <div className="col-md-6 col-lg-4 mb-5">
                    <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#buynowModal">
                        <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                        <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x" /></div>
                        </div>
                        <img className="img-fluid-100" src="ASSETS/assets/img/portfolio/buynow.png" alt="buynow" />
                    </div>
                    <div>💻 바이나우 앱 개발 (사이드 프로젝트)</div>
                    </div>
                    <div className="col-md-6 col-lg-4 mb-5">
                    <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#salaryingModal">
                        <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                        <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x" /></div>
                        </div>
                        <img className="img-fluid-100" src="ASSETS/assets/img/portfolio/salarying.png" alt="salarying" />
                    </div>
                    <div>💻 Salarying 서비스 개발</div>
                    </div>
                    <div className="col-md-6 col-lg-4 mb-5">
                    <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#nexusModal">
                        <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                        <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x" /></div>
                        </div>
                        <img className="img-fluid-100" src="ASSETS/assets/img/portfolio/nexus.png" alt="nexus" />
                    </div>
                    <div>💻 Nexus 사내 채팅 앱 개발</div>
                    </div>
                    <div className="col-md-6 col-lg-4 mb-5">
                    <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#skonModal">
                        <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                        <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x" /></div>
                        </div>
                        <img className="img-fluid-100" src="ASSETS/assets/img/portfolio/skon.png" alt="skon" />
                    </div>
                    <div>💻 SKON SK 사내 앱 서비스 개발</div>
                    </div>
                    <div className="col-md-6 col-lg-4 mb-5">
                    <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#moceanModal">
                        <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                        <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x" /></div>
                        </div>
                        <img className="img-fluid-100" src="ASSETS/assets/img/portfolio/mocean.png" alt="mocean" />
                    </div>
                    <div>💻 모션 렌터카 앱 개발</div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                    <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#samsungModal">
                        <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                        <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x" /></div>
                        </div>
                        <img className="img-fluid-100" src="ASSETS/assets/img/portfolio/samsung.jpg" alt="samsung" />
                    </div>
                    <div>💻 삼성 웹 서비스 개발</div>
                    </div>
                    <div className="col-md-6 col-lg-4">
                    <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#electronicModal">
                        <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                        <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x" /></div>
                        </div>
                        <img className="img-fluid-100" src="ASSETS/assets/img/portfolio/electronic.jpg" alt="electronic" />
                    </div>
                    <div>💻 한국 전력공사 내부 서비스 개발</div>
                    </div>
                </div>
                </div>
            </section>
            {/* 모달 팝업 */}
            <Popup id={'episodeModal'} title={'Episode 2.0 서비스'} imgPath={'ASSETS/assets/img/portfolio/episode.png'} 
                period={'2022년 10월 1일 → 2023년 9월 1일'}
                skill={'Java / Spring / Angular / Flutter'}
                work={'관리자 웹 및 사용자 앱 서비스 개발 및 운영'} />
            <Popup id={'buynowModal'} title={'바이나우 앱 - 사이드프로젝트'} imgPath={'ASSETS/assets/img/portfolio/buynow.png'} 
                period={'2022년 12월 1일 → 2022년 12월 30일'}
                skill={'Flutter'}
                work={'Flutter 기반의 크로스플랫폼 앱 개발 (기존 개발된 웹사이트를 Flutter 웹뷰와 FCM 연동을 통한 앱 배포 작업 사이드 프로젝트)'} />
            <Popup id={'salaryingModal'} title={'Salarying 서비스'} imgPath={'ASSETS/assets/img/portfolio/salarying.png'} 
                period={'2022년 6월 1일 → 2022년 9월 30일'}
                skill={'Angular / HTML / CSS'}
                work={'Angular 기반의 프론트엔드 웹 개발'} />
            <Popup id={'nexusModal'} title={'Nexus 사내 채팅앱'} imgPath={'ASSETS/assets/img/portfolio/nexus.png'} 
                period={'2022년 4월 1일 → 2022년 5월 30일'}
                skill={'Flutter'}
                work={'Flutter 기반의 크로스플랫폼 앱 개발'} />
            <Popup id={'skonModal'} title={'SKON SK 사내앱 서비스'} imgPath={'ASSETS/assets/img/portfolio/skon.png'} 
                period={'2021년 7월 1일 → 2022년 3월 30일'}
                skill={'Java / Spring / Angular / Flutter'}
                work={'관리자 웹 및 사용자 앱 서비스 개발'} />
            <Popup id={'moceanModal'} title={'모션 렌터카 앱'} imgPath={'ASSETS/assets/img/portfolio/mocean.png'} 
                period={'2021년 4월 21일 → 2021년 6월 30일'}
                skill={'Flutter'}
                work={'Flutter 기반의 크로스플랫폼 앱 개발'} />
            <Popup id={'samsungModal'} title={'삼성 웹 서비스'} imgPath={'ASSETS/assets/img/portfolio/samsung.jpg'} 
                period={'2011년 12월 1일 → 2014년 6월 1일'}
                skill={'Java / Javascript / JSP / HTML / CSS'}
                work={'삼성닷컴 및 삼성 계열사의 다양한 내부 웹 서비스를 개발'} />
            <Popup id={'electronicModal'} title={'한국 전력공사 내부 서비스'} imgPath={'ASSETS/assets/img/portfolio/electronic.jpg'} 
                period={'2010년 2월 1일 → 2011년 11월 1일'}
                skill={'Java / Javascript / JSP / HTML / CSS'}
                work={'한국 전력공사의 다양한 내부 웹 서비스를 개발'} />
        </Fragment>
    );
}
export default Portfolio;