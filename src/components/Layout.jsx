import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet /> {/* Renders child routes */}
      </main>
      <Footer />
    </>
  );
};

export default Layout;