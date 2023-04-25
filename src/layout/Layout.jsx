import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div id="main-wrapper">
      <Header />
      <div className="page-wrapper">
      </div>
      <Footer />
    </div>
  );
};

export default Layout;