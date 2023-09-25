import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Donate from "./Donate";



const CardDetails = () => {
    const [card, setCards] = useState({})
    const {id} = useParams()
    const cards = useLoaderData()
    
    useEffect(()=>{
        const findCard = cards.find(card => card.id == id)
        setCards(findCard)

    },[id, cards])
    
    
    return (
        <div>
            <Donate card={card}></Donate>
        </div>
    );
};

export default CardDetails;