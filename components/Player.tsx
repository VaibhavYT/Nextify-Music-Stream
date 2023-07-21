"use client";

import usePlayer from "@/hooks/usePlayer";

import useGetSongById from "@/hooks/useGetSongById";

import PlayerContent from "./PlayerContent";
import useLoadSongUrl from "./useLoadSongUrl";

const Player = () => {
  const player = usePlayer();
  const { song } = useGetSongById(player.activeId);
  //NOTE - Here we are fetching client side song not server side by the use of supabase

  const songUrl = useLoadSongUrl(song!);
  // Here we are fetching song similarly like we did for image using imageUrlPath

  if (!song || !songUrl || !player.activeId) {
    return null;
  }

  return (
    <div 
      className="
        fixed 
        bottom-0 
        bg-black 
        w-full 
        py-2 
        h-[80px] 
        px-4
      "
    >
      <PlayerContent
      
      key={songUrl}
      //NOTE - Here songUrl is passed I want to make Playlist of songs 
      
      song={song} songUrl={songUrl} />
    </div>
  );
}

export default Player;