import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";


const Layout = () => {
    return (
        <div className="container mx-auto px-3 mb-5">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Layout;