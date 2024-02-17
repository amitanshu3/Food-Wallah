import { useEffect, useState } from "react";

const useOnlineStatus=()=>{
 const [status,setstatus]=new useState(true);
 useEffect(()=>{
     window.addEventListener("offline",()=>{
        setstatus(false);
     })
     window.addEventListener("online",()=>{
        setstatus(true);
     })
 },[])
    return status;
}
export default useOnlineStatus;