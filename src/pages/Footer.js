import React, { Fragment } from "react";

function Footer() {
    return (
        <Fragment>
            <footer className="footer text-center">
                <div className="container">
                <div className="row">
                    <div className="col-lg-4 mb-5 mb-lg-0">
                    <h4 className="text-uppercase mb-4">Email</h4>
                    <p className="lead mb-0">
                        mashimagomi@gmail.com
                    </p>
                    </div>
                    <div className="col-lg-4 mb-5 mb-lg-0">
                    <h4 className="text-uppercase mb-4">Blog</h4>
                    <p className="lead mb-0">
                        <a href="https://sweetsource.tistory.com/">https://sweetsource.tistory.com/</a>
                    </p>
                    </div>
                    <div className="col-lg-4">
                    <h4 className="text-uppercase mb-4">Git</h4>
                    <p className="lead mb-0">
                        <a href="https://github.com/ssyeon84">https://github.com/ssyeon84</a>
                    </p>
                    </div>
                </div>
                </div>
            </footer>
            <div className="copyright py-4 text-center text-white">
                <div className="container"><small>Copyright © SEO YEON, SONG 2023</small></div>
            </div>
        </Fragment>
    );
}
export default Footer;