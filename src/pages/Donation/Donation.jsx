import { useEffect, useState } from "react";
import DonationCard from "./DonationCard";


const Donation = () => {
    const [donates, setDonates] = useState([])
    const [noData, setNoData] = useState("")

    const [cardLength, setCardLength] = useState(4)
    

    useEffect(()=>{
        const donationItems = JSON.parse(localStorage.getItem('donations'))
        if(donationItems){
            setDonates(donationItems)
        }
        else{
            setNoData("No Data Available")
        }


    },[])


    return (
        <div>
            <div>
                {
                    noData ? <p className="h-[50vh] flex justify-center items-center">{noData}</p> :
                    <div>
                        <div className=" grid grid-cols-1 lg:grid-cols-2 gap-5">
                            {
                            donates.slice(0, cardLength).map(donateCard => <DonationCard key={donateCard.id} donateCard={donateCard}></DonationCard>)   
                            }
                        </div>
                        <div className={`${cardLength === donates.length && 'hidden'} text-center my-10` }>
                            <button onClick={()=> setCardLength(donates.length)} className="bg-[#009444] px-4 py-2 text-white rounded-md">See All</button>
                        </div>
                    </div>
                }
            </div> 
        </div>
    );
};

export default Donation;