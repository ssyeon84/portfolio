import React, { Fragment } from "react";

function Stacks() {
    return (
        <Fragment>
            <section className="page-section  bg-primary text-white mb-0" id="stacks">
                <div className="container">
                    <h2 className="page-section-heading text-center text-uppercase text-white mb-0">Stacks</h2>
                    <div className="divider-custom divider-light">
                        <div className="divider-custom-line" />
                        <div className="divider-custom-icon"><i className="fas fa-star" /></div>
                        <div className="divider-custom-line" />
                    </div>
                    <div className="row divider-custom">
                        <div className="col-lg-8 text-center">
                            <h3>Flutter</h3>
                            <p className="lead2">
                            Flutter를 사용하여 Android 및 iOS 앱을 개발 및 출시해 본 경험이 있습니다.<br/>
                            Flutter 의  상태관리 및 위젯 개발 그리고 다트 언어에 익숙합니다.
                            </p>
                            <h3>Angular</h3>
                            <p className="lead2">
                            Angular 프레임 워크를 이용하여 웹사이트를 개발 및 출시해 본 경험이 있습니다.<br/>
                            SPA(Single Page Application)에 대한 이해도 및 타입스크립트와 자바스크립트 언어에 익숙합니다.
                            </p>
                            <h3>Git</h3>
                            <p className="lead2">
                            Git을 활용한 소스코드 버전 관리 및 협업을 할 수 있습니다.
                            </p>
                            <h3>JAVA & SpringBoot</h3>
                            <p className="lead2">
                            객체지향 프로그래밍에 대해 이해하고 <br/>
                            Java 에서 제공하는 클래스와 메소드를 적절하게 사용할 수 있습니다.<br/>
                            Spring boot 기반으로 Rest API를 개발해 본 경험이 있습니다.
                            </p>
                            <h3>AWS</h3>
                            <p className="lead2">
                            AWS 클라우드 서비스를 이용하여 웹 & 앱 서비스를 배포 및 운영할 수 있습니다.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}
export default Stacks;