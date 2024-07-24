import { useState } from "react";
import resArray from "../../utils/mockData";
import RestroCard from "./RestaurandCard";

const Body = () => {
    const [listOfRestaurant, setListOfRestaurant] = useState(resArray.data);
    const handleBtnClick = ()=>{
        const filteredData = listOfRestaurant.filter((res)=> res.rating.score > 4.4)
        setListOfRestaurant(filteredData);
    }
    return(
    <div className='body'>
             <div className='search'>
                     <input type='text' placeholder='type here to search you favorites food'/>
             </div>
             <div>
                <button onClick={handleBtnClick}>Filter Resstaurant</button>
             </div>
             <div className='res-container'>
                    {
                     listOfRestaurant.map((obj)=> <RestroCard key={obj.restaurantCode} resObj = {obj}/>)
                    }
             </div>
    </div>
    )
}

export default Body;