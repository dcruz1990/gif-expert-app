import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs"

type gifData = {
    id: string,
    url: string,
    title: string
}

type fetchGifsState = {
    data: gifData[],
    loading: boolean,
}


export const useFetchGifs = (category: string) => {
   const [state, setState] = useState<
   fetchGifsState
  >({
    data: [],
    loading: true
  });


   // onMounted de Vue
  useEffect(() => {
    
    getGifs(category).then((data) => {
      setState({
          data: data as gifData[],
          loading: false
      });
    });
  }, [category]);

   return state
}
