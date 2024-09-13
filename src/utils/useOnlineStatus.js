import { useEffect, useState } from "react"

const useOnlineStatus = () => {
    const [onlineStatus, setOnlineStatus] = useState(true);

    useEffect(()=>{
        //console.log("useEffect of online status called");
        window.addEventListener('offline',()=>{
           // console.log("offlineEventListnercalled");
            setOnlineStatus(false);
        });

        window.addEventListener('online',()=>{
           // console.log("onlineEventListnercalled");
            setOnlineStatus(true);
        })
    },[])

    //console.log("returning onlinestatus ",onlineStatus);
    return onlineStatus
}

export default useOnlineStatus;