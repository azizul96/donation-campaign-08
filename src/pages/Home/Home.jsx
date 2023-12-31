import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import Cards from "../../components/Cards/Cards";
import {  useEffect, useState } from "react";


const Home = () => {
    const cards = useLoaderData()
    const [filterCards, setFilterCards] = useState([])
    

    useEffect(()=>{
        setFilterCards(cards)
    },[])

    

    const handleSubmit = e =>{
        e.preventDefault()
        const searchText = e.target.name.value.trim().toLowerCase();
        const filteredCardList = cards.filter(item => item.category.toLowerCase().indexOf(searchText)!== -1)
        setFilterCards(filteredCardList)
        console.log(searchText);
    }
    
    return (
        <div>
            <Banner handleSubmit={handleSubmit}></Banner>
            <Cards cards={filterCards}></Cards>
        </div>
    );
};

export default Home;