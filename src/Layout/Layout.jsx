import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";


const Layout = () => {
    return (
        <div className="container mx-auto px-5">
            <Navbar></Navbar>
            <div className="py-10">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Layout;