import Navbar from "../../components/Navbar/Navbar";

const Error = () => {
    return (
        <div className=" container mx-auto px-5">
            <Navbar></Navbar>
            <div className=" w-full mt-5 flex justify-center items-center">
                <img src={'/error.jpeg'} alt="" />
            </div>
        </div>
    );
};

export default Error;