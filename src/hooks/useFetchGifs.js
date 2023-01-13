import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";


export const useFetchGifs = (category) => {
    const [ gifs , setGifs ] = useState([])
    const [loading, setLoading] = useState(true)
    const getImages = async (images) => {
        setGifs(await getGifs(category));   
        setLoading(false);  
    }

    useEffect(()=>{
        getImages();
    },[])

  return {
    images: gifs,
    isLoading: loading
  }
}

