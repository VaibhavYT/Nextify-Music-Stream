"use client"

import AuthModal from "@/components/AuthModal";
import SubscribeModal from "@/components/SubscribeModal";
import UploadModal from "@/components/UploadModal";
import { ProductWithPrice } from "@/types";
import { useState, useEffect} from "react";


interface ModelProviderProps{
    products: ProductWithPrice[];
}
const ModalProvider: React.FC<ModelProviderProps> = ({
    products
  }) => {
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
        <SubscribeModal products={products}/>
        </>
    )
}


export default ModalProvider