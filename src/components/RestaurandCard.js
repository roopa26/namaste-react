import React from "react";

const RestroCard = (props) => {
//     const {name,cuisine,ratingNew,cfo, delivery,image,tag} = props.resObj;
        const {distance,gold} = props.resObj;
        //console.log(props.resObj)
        const {clickUrl} = props.resObj.cardAction;
       // console.log(clickUrl);
    const {name,cuisine,ratingNew,cfo,image,locality} = props.resObj.info;
    
    return(<div className='h-full m-1  relative overflow-hidden'>
            <div className='overflow-hidden h-[250px]'>
                    {/* <img src={CDN_URL+logoImageKey} alt= "food img"/> */}
                    <img className="h-full w-full object-cover rounded-lg" src={image?.url} alt= "food image"/>
            </div>
            <div className='m-2'>
                <div className="w-full justify-between items-center flex">
                        <h3 className="text-h3HeadingColor text-lg font-medium text-ellipsis overflow-hidden whitespace-nowrap w-full mt-[8px]">{name}</h3>
                        <h5 className="text-white bg-green-700 text-white rounded-md w-10 text-center">{ratingNew?.ratings?.DINING?.rating}</h5>
                </div>
                <div className="text-subTitlesColor gap-1 text-sm">
                        <h5 className="overflow-hidden whitespace-nowrap text-ellipsis w-full mt-[8px]">{cuisine.map(x=>x.name).join(",")}</h5>
                        <h5 className="overflow-hidden whitespace-nowrap text-ellipsis w-full mt-[8px]">Cost: {cfo?.text}</h5>
                </div>
                <div className="text-restroLocalityColor flex justify-between text-sm items-center gap-1">
                        <p>{locality?.name}</p>
                        <p>{distance}</p>
                </div>
                
                   
                    {/* <p className="ellipsis">{delivery?.tag}</p> */}
            </div>
            {gold.length != 0 &&
                (<div className='flex justify-evenly w-[60%] bg-custom-gradient h-[30px] items-center absolute bottom-56 text-[#FFD385]'>
                <img style={{width:"15%"}} src="https://b.zmtcdn.com/data/o2_assets/9b1ff9e19b7fadea6c6a57e081a1f5ac1687776279.png"/>
                <div>{gold?.text} <b>{gold?.offerValue}</b></div>
           </div>)
            }
          </div>)
}

export const withPromotedRestaurantCard = (RestroCard) => {
        return (props) => {
                
                return (
                        <div>
                                <label className="absolute bg-gray-600 text-white z-10 p-1 m-2 rounded-lg">Promoted</label>
                                <RestroCard {...props}/>
                        </div>
                )
        }
}

export default RestroCard;