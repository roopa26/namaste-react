import resArray from "../../utils/mockData";
import RestroCard from "./RestaurandCard";

const Body = () => {
    return(
    <div className='body'>
             <div className='search'>
                     <input type='text' placeholder='type here to search you favorites food'/>
             </div>
             <div className='res-container'>
                    {
                     resArray.data.map((obj)=> <RestroCard resObj = {obj}/>)
                    }
             </div>
    </div>
    )
}

export default Body;