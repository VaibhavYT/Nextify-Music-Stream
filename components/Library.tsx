"use client";
import { TbPlaylist } from "react-icons/tb";
import { AiOutlinePlus } from "react-icons/ai";

import React from "react";
import useAuthModal from "@/hooks/useAuthModal";
import { useUser } from "@/hooks/useUser";
import MediaItem  from "./MediaItem";
import useUploadModal from "@/hooks/useUploadModal";
import { Song } from "@/types";
import useOnPlay from "@/hooks/useOnPlay";

interface LibraryProps{
  songs:Song[];
}

const Library: React.FC<LibraryProps>= ({
  songs
}) => {

  const authModal = useAuthModal();
  const {user,subscription} = useUser();
  const UploadModal = useUploadModal();

  const onPlay = useOnPlay(songs);
  // This is used to play songs

  const onClick = () => {

    if(!user){
      return authModal.onOpen();
    }

    // TODO : Check for subscription
    
    return UploadModal.onOpen();
    //Handle upload later
  };
  return (
    <div className="flex flex-col">
      <div
      className="
      flex
      items-centre
      justify-between
      px-5
      pt-4
      "
      >
        <div className="
        inline-flex
        items-centre
        gap-x-2
        ">
            <TbPlaylist className="text-neutral-400" size={26}/>
            <p 
            className="text-neutral-400
            font-medium
            text-md
            "
            >
              Your Library
            </p>
        </div>
        <AiOutlinePlus
        onClick={onClick}
        size={20}
        className="
        text-neutral-400
        cursor-pointer
        hover:text-white
        transition
        "
        />
      </div>
      <div className="
      flex
      flex-col
      gap-y-2
      mt-4
      px-3
      ">
       {songs.map((item)=>(
        <MediaItem
        onClick={(id: string)=>onPlay(id)}
        key={item.id}
        data= {item}
        
        />
       ))}
      </div>
    </div>
  );
};

export default Library;