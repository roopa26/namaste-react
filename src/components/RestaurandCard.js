import { CDN_URL } from "../utils/constants";

const RestroCard = (props) => {
//     const {name,cuisine,ratingNew,cfo, delivery,image,tag} = props.resObj;
        const {distance,gold} = props.resObj;
        //console.log(props.resObj)
        const {clickUrl} = props.resObj.cardAction;
       // console.log(clickUrl);
    const {name,cuisine,ratingNew,cfo,image,locality} = props.resObj.info;
    
    return(<div className='res-card'>
            <div className='card-img'>
                    {/* <img src={CDN_URL+logoImageKey} alt= "food img"/> */}
                    <img src={image?.url} alt= "food img"/>
            </div>
            <div className='card-content'>
                <div className="restroNameHeading">
                        <h3 className="ellipsis">{name}</h3>
                        <h5 className="ellipsis">{ratingNew?.ratings?.DINING?.rating}</h5>
                </div>
                <div className="restroSubTiles">
                        <h5 className="ellipsis">{cuisine.map(x=>x.name).join(",")}</h5>
                        <h5 className="ellipsis">Cost: {cfo?.text}</h5>
                </div>
                <div className="restroLocality">
                        <p>{locality?.name}</p>
                        <p>{distance}</p>
                </div>
                
                   
                    {/* <p className="ellipsis">{delivery?.tag}</p> */}
            </div>
            {gold.length != 0 &&
                (<div className='banner'>
                <img style={{width:"15%"}} src="https://b.zmtcdn.com/data/o2_assets/9b1ff9e19b7fadea6c6a57e081a1f5ac1687776279.png"/>
                <div>{gold?.text} <b>{gold?.offerValue}</b></div>
           </div>)
            }
    </div>)
}

export default RestroCard;