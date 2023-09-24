/* eslint-disable react/prop-types */

const Donate = ({card}) => {
    const {image, title, card_text, description} = card
    return (
        <div>
            <div className=" flex justify-center relative">
                <img className="w-full rounded-lg" src={image} alt="" />
                <div className="absolute bottom-0 left-0 bg-black opacity-40 w-full  py-10 rounded-b-lg">
                    
                </div>
                
                <button className="text-white absolute bottom-5 left-10 px-6 py-2 rounded-sm" style={{background:card_text}}>Donate</button>
            </div>
            <h1 className="mt-10 font-bold text-3xl">{title}</h1>
            <p className="mt-5 mb-5">{description}</p>

        </div>
    );
};

export default Donate;