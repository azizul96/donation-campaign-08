/* eslint-disable react/prop-types */
import Card from "../Card/Card";


const Cards = ({cards}) => {
    
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 my-20 px-5">
            {
              cards?.map(card => <Card key={card.id} card={card}></Card>)  
            }
        </div>
    );
};

export default Cards;