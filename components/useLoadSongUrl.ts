import { useSupabaseClient } from "@supabase/auth-helpers-react";

import { Song } from "@/types";

const useLoadSongUrl = (song: Song) => {
  const supabaseClient = useSupabaseClient();
  // Here we are connecting to our database 

  if (!song) {
    return '';
  }
  //NOTE - This is how we fetch data from server database Tables
  
  const { data: songData } = supabaseClient
  .storage
  .from('songs')
  .getPublicUrl(song.song_path);

  return songData.publicUrl;
};

export default useLoadSongUrl;