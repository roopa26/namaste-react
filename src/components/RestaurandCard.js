import { CDN_URL } from "../../utils/constants";

const RestroCard = (props) => {
    const {name,cuisines,rating,price, delivery,logoImageKey,tag} = props.resObj;
    
    return(<div className='res-card'>
            <div className='card-img'>
                    <img src={CDN_URL+logoImageKey} alt= "food img"/>
            </div>
            <div className='card-content'>
                    <h3 className="ellipsis">{name}</h3>
                    <h5 className="ellipsis">{cuisines.join(",")}</h5>
                    <h5 className="ellipsis">Rating : {rating.score}</h5>
                    <h5 className="ellipsis">Cost: {price}</h5>
                    <p className="ellipsis">{delivery.tag}</p>
            </div>
            <div className='banner'>{tag}</div>
    </div>)
}

export default RestroCard;