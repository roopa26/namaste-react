import { useState, useEffect } from "react";
import { MENU_URL } from './constants';

const useRestaurantMenu = (resId) => {

    const [resDetails, setResDetails] = useState(null);
    const [menuList, setMenuList] = useState(null);
    
    useEffect(()=>{
        fetchMenu();
    },[]);

    const fetchMenu = async () => {
        try{
            const menu_url = MENU_URL.replace(':resId',resId)
           // console.log(menu_url)
           const data = await fetch(menu_url);
            // const data = await fetch("https://www.zomato.com/webroutes/getPage?page_url=/abudhabi/punjab-highway-restaurant-tourist-club-area-al-zahiyah/order");
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

    return {resDetails,menuList};
}

export default useRestaurantMenu;