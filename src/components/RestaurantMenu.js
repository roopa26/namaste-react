import { useEffect, useState } from 'react';
import useRestaurantMenu from '../utils/useRestaurantMenu';
import RestaurantSubMenu from './RestaurantSubMenu';
import Shimmer from "./Shimmer";
import {useParams} from "react-router-dom";

const RestaurantMenu = () => {
    // const [menuList, setMenuList] = useState(null);
    // const [resDetails, setResDetails] = useState(null);
    const {resId} = useParams();
    const {resDetails,menuList} = useRestaurantMenu(resId);
    const [subMenu, setSubMenu] = useState([])
    const [menuSelected, setMenuSelected] = useState(null)

    useEffect(()=>{
        if(menuList!=null){
            let result = menuList.map((obj,index)=>{
                const {categories} = obj.menu
                const items = categories.map((ct)=>ct.category.items).flat();
                
                return { menuId: obj.menu.id, menuName: obj.menu.name, items: items };
            })
            setSubMenu(result);
            //setMenuSelected(subMenu[0]?.items)
        }
       
    },[menuList])


    useEffect(()=>{
        const menuSelected = subMenu[0]?.items
        setMenuSelected(subMenu[0])
    },[subMenu])

    const handleMenuClick = (e)=>{
        const value=e.target.textContent;
        const selectedMenu = subMenu.find(item => item.menuName === value);
    
        if (selectedMenu) {
            setMenuSelected(selectedMenu);
        }
    }

    return menuList==null || subMenu.length==0? (<Shimmer/>):

    (<div className='font-[Okra, Helvetica, sans-serif]'>
        <h1 className='text-black font-[500] text-[3.6rem]'>{resDetails.SECTION_BASIC_INFO.name}</h1>
        <p className='text-[#828282] font-[300] text-[1.6rem]'>{resDetails.SECTION_BASIC_INFO.cuisine_string}</p>
        <p className='text-[1.6rem] text-[#9C9C9C]'>{resDetails.SECTION_RES_CONTACT.locality_verbose}</p>
        <h1>Menu</h1><br></br>
        <hr></hr>
        <div className='flex justify-between items-start m-8'>
            <section className='p-4 w-[40%]'>
                {subMenu.map((obj)=>{
                    return(
                     <h1 onClick={(e)=>{handleMenuClick(e)}} className='p-4 text-[1.5rem]' key={obj.menuId}>{obj.menuName}</h1>)
                })}
            </section>
            <section className='border-l-2 border-gray-500 ml-4 p-4 w-[60%]'>
                 {<RestaurantSubMenu menu={menuSelected}/>}
            </section>
        </div>
    </div>)
}

export default RestaurantMenu;