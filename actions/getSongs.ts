import { Song } from "@/types";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";


const getSongs = async () : Promise<Song[]> =>{
    const supabase = createServerComponentClient({
        // In nextjs headers are not required for fetching data 
        cookies: cookies
    });
    const{data,error} = await supabase
            .from('songs')
            .select('*')
            .order('created_at',{ascending:false});

            if(error){
                console.log(error.message);
            }

            return (data as any) || [];
};

export default getSongs;

// this is how we can fetch data from server database