/* eslint-disable no-undef */

const Donate = ({card}) => {
    const {id, image, title, card_text, description, price} = card


    const handleAddToDonation = ()=>{
        
        const cardsArray = [];

        const donationItems = JSON.parse(localStorage.getItem('donations'))

        if(!donationItems){
            cardsArray.push(card)
            localStorage.setItem('donations', JSON.stringify(cardsArray))
            sweetAlert("Good job!", "Added To The Donation Page!", "success")
        }
        else{
            const isExist = donationItems.find(card => card.id === id)
            if(!isExist){
                cardsArray.push(...donationItems, card)
                localStorage.setItem('donations', JSON.stringify(cardsArray))
                sweetAlert("Good job!", "Added To The Donation Page!", "success")
            }
            else{
                sweetAlert("Oops...", "Already Added!", "error");
            }
            
        }
        
    }

    return (
        <div className="my-10">
            <div className=" flex justify-center relative">
                <img className="w-full rounded-lg" src={image} alt="" />
                <div className="absolute bottom-0 left-0 bg-black opacity-40 w-full  py-10 rounded-b-lg">
                    
                </div>
                
                <button onClick={handleAddToDonation} className="text-white absolute bottom-5 left-10 px-6 py-2 rounded-sm" style={{background:card_text}}>Donate ${price}</button>
            </div>
            <h1 className="mt-10 font-bold text-3xl">{title}</h1>
            <p className="mt-5 mb-5">{description}</p>

        </div>
    );
};

export default Donate;