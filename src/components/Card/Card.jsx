/* eslint-disable react/prop-types */

import { Link } from "react-router-dom"

const Card = ({card}) => {
    
    const {id, image, title, card_bg, card_text, card_btn_bg, category} = card


    return (
        <div>
            <Link to={`/cards/${id}`}>
                <div className="rounded-lg " style={{background:card_bg}}>
                    <figure><img className="w-full" src={image} alt="" /></figure>
                    <div className="px-5">
                        
                        <div className="mt-5">
                            <button className="px-4 py-2 font-semibold rounded-md" style={{background:card_btn_bg , color:card_text}}>{category}</button>
                        </div>
                        <h2 className="font-semibold mt-2 pb-5" style={{color:card_text}}>{title}</h2>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Card;