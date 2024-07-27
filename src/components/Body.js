import { useEffect, useState } from "react";
import RestroCard from "./RestaurandCard";
import Shimmer from "./Shimmer";

const Body = () => {
    const [listOfRestaurant, setListOfRestaurant] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [searchText,setSearchText] = useState("");
    const handleBtnClick = ()=>{
        const filteredData = listOfRestaurant.filter((res)=> res.rating.score > 4.4)
        setFilteredData(filteredData)
    }

    const handleSearchClick = () =>{
        const filterData = listOfRestaurant.filter((item)=>item.name.toLowerCase().includes(searchText.toLowerCase()));
        setFilteredData(filterData)
    }

    useEffect(()=>{
        fetchData();
    },[])

    const fetchData = async () => {
        try{
            //const responseData = await fetch('https://www.zomato.com/webroutes/getPage?page_url=/abudhabi/restaurants/in/madinat-zayed-restaurants');
            const responseData = await fetch('https://food.noon.com/_svc/mp-food-api-catalog/api/');
            if (responseData.ok) {
                console.log('Request succeeded:', responseData);
                const jsonData = await responseData.json();
                setListOfRestaurant(jsonData?.results?.slice(9));
                setFilteredData(listOfRestaurant);
                console.log(jsonData.results.slice(9));
            } else {
                console.error('Request failed:', responseData.status);
            }
        }
        catch(ex){
            console.error('Error fetching data:', error);
        }
        
        
    }

    return listOfRestaurant.length === 0?(
            <Shimmer/>
        )
   :(
            <div className='body'>
                <div className="filter">
                    <div className='search'>
                             <input type='text' value={searchText} onChange={(e)=>{setSearchText(e.target.value)}}/>
                             <button onClick={handleSearchClick}>Search</button>
                     </div>
                     <div>
                        <button onClick={handleBtnClick}>Top rated Restaurant</button>
                     </div>
                </div>
                     
                     <div className='res-container'>
                            {
                             filteredData.map((obj)=> <RestroCard key={obj.restaurantCode} resObj = {obj}/>)
                            }
                     </div>
            </div>
            )

    
}

export default Body;