import { Outlet } from "react-router-dom";
import Footer from "./footer/Footer";
import Navbar from "./navbar/Navbar";

const Layout = () => {
  return (
    <div className=" ">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
