import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { MENU_URL } from '../utils/constants';
import {useParams} from "react-router-dom";

const RestaurantMenu = () => {
    const [menuList, setMenuList] = useState(null);
    const [resDetails, setResDetails] = useState(null);
    const {resId} = useParams();
    //console.log(resId);

    useEffect(()=>{
        fetchMenu();
    },[]);

    const fetchMenu = async () => {
        try{
            const menu_url = MENU_URL.replace(':resId',resId)
            console.log(menu_url)
            const data = await fetch("https://www.zomato.com/webroutes/getPage?page_url=/abudhabi/punjab-highway-restaurant-tourist-club-area-al-zahiyah/order");
            const jsonData = await data.json();
            setMenuList(jsonData.page_data.order.menuList.menus);
            setResDetails(jsonData.page_data.sections)
           // console.log(jsonData.page_data.order);
            // console.log(jsonData.page_data.sections);
            
        }
        catch(ex){
            console.log(ex)
        }
    }
    return menuList==null? (<Shimmer/>):

    (<div>
        <h1>{resDetails.SECTION_BASIC_INFO.name}</h1>
        <p>{resDetails.SECTION_BASIC_INFO.cuisine_string}</p>
        <p>{resDetails.SECTION_RES_CONTACT.locality_verbose}</p>
        <h1>Menu</h1>
        <ul>
            {
                menuList.map((obj,index)=>{
                    const {categories} = obj.menu
                    const items = categories.map((ct)=>ct.category.items).flat();
                   // console.log("items: ",items[0].item.max_price);
                //    console.log("first item: ",items[0]);
                   
                /* {console.log(obj.menu.name+" --- "+obj.menu.categories.map((obj)=>{console.log(obj.category.items)}))} */
                console.log(obj.menu.id);
                    return (
                        <>
                            <h4>{obj.menu.name}</h4>
                            <ul key={obj.menu.id}>
                                 {items.map((item) => <li>{item.item.name}-{item.item.max_price} AED</li>)} 
                            </ul>
                        </>
                )})
            }
        </ul>
    </div>)
}

export default RestaurantMenu;