
const DonationCard = ({donateCard}) => {
    const {image, title, card_bg, card_text, card_btn_bg, category, price} = donateCard



    return (
        <div className="flex justify-start items-center gap-5 mx-5 rounded-lg" style={{background:card_bg}}>
            <div>
                <img  className="w-56 h-48" src={image} alt="" />
            </div>
            <div>
                <h1 className="px-3 py-1 text-sm font-normal rounded-md inline-block" style={{background:card_btn_bg , color:card_text}}>{category}</h1>
                <h2 className="font-semibold mt-2">{title}</h2>
                <p className="font-semibold text-base mb-5"  style={{color:card_text}}>${price.toFixed(2)}</p>
                <button className="px-4 py-2 font-semibold rounded-md block text-white" style={{background:card_text}}>View Details</button>
            </div>
        </div>
    );
};

export default DonationCard;