

const Banner = () => {
    return (
        
            <div className="hero   z-10" >
                <img className="opacity-10" src={'/banner.png'} alt="" />
            <div className="hero-content text-center text-neutral-content">
                <div className=" relative z-50">
                <h1 className="mb-5 text-3xl font-bold text-black">I Grow By Helping People In Need</h1>
                
                <div className="absolute top-20 w-full ">
                <input id="coupon-input" type="text" placeholder="Search here...." className="input input-bordered w-full pr-16" />
                <button id="apply-btn"
                    className="btn btn-success bg-[#FF444A] border-none absolute top-0 right-0 rounded-l-none text-white" >Search</button>
                </div>
                </div>
            </div>
            </div>
            
    );
};

export default Banner;