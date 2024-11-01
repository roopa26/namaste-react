import React,{lazy, Suspense, useEffect, useState}  from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import {createBrowserRouter, Outlet, RouterProvider} from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import ErrorPage from './components/ErrorPage';
import RestaurantMenu from './components/RestaurantMenu';
import { Suspense } from 'react';
import userContext from './utils/UserContext';
import appStore from './utils/appStore';
import {Provider} from 'react-redux';
import Cart from './components/Cart';

const AppLayout = () =>{
const [userName, setUserName] = useState("");
        useEffect(()=>{
                setUserName("Roopa Lokesha Shetty")
        },[]);

        return(
        <Provider store = {appStore}>
                <div className='app'>
                <userContext.Provider value={{loggedInUser:userName}}>
                        <Header/>
                </userContext.Provider>
                <Outlet/>
         </div>
        </Provider>
         )
 }

 const Grocery = lazy(()=> import("./components/Grocery"))
 
const route = createBrowserRouter([
        {
                path:"/",
                element:<AppLayout/>,
                children:[
                        {
                                path:"/",
                                element:<Body/>
                        },
                        {
                                path:"/about",
                                element:<About/>
                        },
                        {
                                path:"/contact",
                                element:<Contact/>
                        },
                        {
                                path:"/restaurant/:resId/order",
                                element:<RestaurantMenu/>                     
                        },
                        {
                                path: "/grocery",
                                element:<Suspense fallback={<h1>Loading....</h1>}><Grocery/></Suspense>
                        },
                        {
                                path: "/cart",
                                element: <Cart/>
                        }
                ],
                errorElement:<ErrorPage/>      
        }
])


var root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={route}/>);