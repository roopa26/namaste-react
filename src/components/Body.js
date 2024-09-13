import { useEffect, useState } from "react";
import RestroCard,{withPromotedRestaurantCard, withGoldDiscount} from "./RestaurandCard";
import Shimmer from "./Shimmer";
import { BASE_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
    const [listOfRestaurant, setListOfRestaurant] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [searchText,setSearchText] = useState("");
    const onlineStatus = useOnlineStatus();
    const PromotedRestaurantCard = withPromotedRestaurantCard(RestroCard);

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
            //https://www.zomato.com/webapi/searchapi.php?city=57
            //const responseData = await fetch('https://www.zomato.com/webroutes/getPage?page_url=/abudhabi/restaurants/in/madinat-zayed-restaurants');
            //card section has info link, nav section in info link has order link
            //https://www.zomato.com/webroutes/getPage?page_url=/abudhabi/maharani-dawat-indian-cuisine-restaurant-al-markaziya/order
            //https://www.zomato.com/webroutes/getPage?page_url=/abudhabi/maharani-dawat-indian-cuisine-restaurant-al-markaziya/info
            //const responseData = await fetch('https://food.noon.com/_svc/mp-food-api-catalog/api/');
            //const responseData = await fetch(`${BASE_URL}abudhabi/restaurants/in/mussafah-sanaiya-restaurants`);
            const responseData = await fetch(`https://www.zomato.com/webroutes/getPage?page_url=/abudhabi/restaurants/`);
            if (responseData.ok) {
                const jsonData = await responseData.json();

                //console.log(jsonData?.page_data?.sections?.SECTION_SEARCH_RESULT?.slice(1))
                var resultArray = jsonData?.page_data?.sections?.SECTION_SEARCH_RESULT?.slice(1);
                setListOfRestaurant(resultArray);
                setFilteredData(resultArray);
            } else {
                console.error('Request failed:', responseData);
            }
        }
        catch(ex){
            console.error('Error fetching data:', error);
        }
        
        
    }

    if(onlineStatus === false) return <h1>Looks like you are offline. Please check your internet connection</h1>

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
                     <div className='w-full flex flex-wrap justify-center'>
                            {
                             filteredData.map((obj)=> {
                                const resName = obj.cardAction.clickUrl.split('/')[2];
                                return <Link className="m-2 w-1/5 h-[450px]" key={obj?.info?.resId} to={"/restaurant/"+resName+"/order"}>
                                        {obj.isPromoted? <PromotedRestaurantCard resObj = {obj}/> : <RestroCard resObj = {obj}/>}
                                       </Link>
                             }
                            )
                            }
                     </div>
            </div>
            )

    
}

export default Body;