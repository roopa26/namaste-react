import { CDN_URL } from "../../utils/constants";

const RestroCard = (props) => {
    const {name,cuisines,rating,price, delivery,logoImageKey,tag} = props.resObj;
    
    return(<div className='res-card'>
            <div className='card-img'>
                    <img src={CDN_URL+logoImageKey} alt= "veg biriyani"/>
            </div>
            <div className='card-content'>
                    <h3>{name}</h3>
                    <h5>{cuisines.join(",")}</h5>
                    <h5>Rating : {rating.score}</h5>
                    <h5>Cost: {price}</h5>
                    <p>{delivery.tag}</p>
            </div>
            <div className='banner'>{tag}</div>
    </div>)
}

export default RestroCard;