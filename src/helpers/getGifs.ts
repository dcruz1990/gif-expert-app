export const getGifs = async (category: string) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${category}&limit=10&api_key=Ws3cnfGMb4Yws79EAlO4ZtPZoo5xEPg6`;
    const response = await fetch(url);
    const { data } = await response.json();
    return  data.map((item: any) => {
      return {
        id: item.id,
        url: item.images.downsized_medium.url,
        title: item.title,
      };
    });
    
    
  };