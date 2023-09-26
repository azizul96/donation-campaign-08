
const DonationCard = ({donateCard}) => {
    const {image, title, card_bg, card_text, card_btn_bg, category, price} = donateCard



    return (
        <div className="flex justify-start items-center gap-5  rounded-lg" style={{background:card_bg}}>
            
                <img  className="w-44 h-full  rounded-lg" src={image} alt="" />
            
            <div className="">
                <div className="py-3 pr-2">
                <h1 className="px-3 py-1 text-sm font-normal rounded-md inline-block" style={{background:card_btn_bg , color:card_text}}>{category}</h1>
                <h2 className=" text-sm font-semibold mt-2">{title}</h2>
                <p className="font-semibold text-base mb-5"  style={{color:card_text}}>${price.toFixed(2)}</p>
                <button className="btn btn-sm font-semibold rounded-md block text-white" style={{background:card_text}}>View Details</button>
                </div>
            </div>
        </div>
    );
};

export default DonationCard;