"use client"

import AuthModal from "@/components/AuthModal";
import UploadModal from "@/components/UploadModal";
import { useState, useEffect} from "react";

const ModelProvider =()=>{
    const [isMounted,setIsMounted] = useState(false);

    // if useEffect is loaded then it means we can safely shows our model because its now client side rendering

    useEffect (()=>{
        setIsMounted(true);
    },[])

    if(!isMounted){
        return null;
    }


    return(
        <>
        <AuthModal/>
        <UploadModal/>
        </>
    )
}


export default ModelProvider