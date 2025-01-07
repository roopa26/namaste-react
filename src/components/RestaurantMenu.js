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
    const [isMobileDevice, setIsMobileDevice] = useState(false);

    useEffect(()=>{
        if(window.innerWidth <= 768)
            setIsMobileDevice(true);
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
        const selectedMenu = isMobileDevice()?subMenu : subMenu.find(item => item.menuName === value);
    
        if (selectedMenu) {
            setMenuSelected(selectedMenu);
        }
    }

    return menuList==null || subMenu.length==0? (<Shimmer/>):

    (<div className='font-[Okra, Helvetica, sans-serif] m-10'>
        <h1 className='text-black font-[500] text-[3.6rem]'>{resDetails.SECTION_BASIC_INFO.name}</h1>
        <p className='text-[#828282] font-[300] text-[1.6rem]'>{resDetails.SECTION_BASIC_INFO.cuisine_string}</p>
        <p className='text-[1.6rem] text-[#9C9C9C]'>{resDetails.SECTION_RES_CONTACT.locality_verbose}</p>
        <h1>Menu</h1><br></br>
        <hr></hr>
        <div className='flex justify-center  items-start mt-10 h-full'>
            {isMobileDevice() || 
            <section className='p-4 w-[20%] cursor-pointer border-2  ml-6rem  border-gray-500 bg-slate-400 text-white sticky top-20'>
                {subMenu.map((obj)=>{
                    return(
                     <h1 onClick={(e)=>{handleMenuClick(e)}} className='p-2 text-[1.2rem]' key={obj.menuId}>{obj.menuName}</h1>)
                })}
            </section>
            }
            <section className='ml-11 h-full flex flex-wrap border-black pl-6'>
                 {<RestaurantSubMenu menu={menuSelected}/>}
            </section>
        </div>
    </div>)
}

export default RestaurantMenu;