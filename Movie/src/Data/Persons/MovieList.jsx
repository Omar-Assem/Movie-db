import axios from "axios";
import { useEffect, useState } from "react";
import MediaItem from "../Buttoms/MediaItem";


const Persons = () => {
 
  const [trendingMovie, setTrendingMovie] = useState([])
  const [trendingTV, setTrendingTV] = useState([])
  const [treindingPeople, setTrendingPeople] = useState([])

  async function getApi(mediatype, callback) {
    try {
      let { data } = await axios.get(
        `https://api.themoviedb.org/3/trending/${mediatype}/week?api_key=1907dd7e22213c1275b820c5455946aa`
      );
      callback(data.results);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }


  useEffect(()=>{
    getApi( "movie", setTrendingMovie)
    getApi( 'tv', setTrendingTV)
    getApi( 'person' ,setTrendingPeople)
  },[])
  

  
  return (<>
  <h1 className="text-center my-4">Trending Movies</h1>
  <div className="row">
    {trendingMovie.map((item , index)=> <MediaItem key={index} item={item}/> )}
    <h1 className="text-center my-4">Trending TV</h1>
    {trendingTV.map((item , index)=> <MediaItem key={index} item={item}/> )}
    <h1 className="text-center my-4">Trending Cast</h1>
    {treindingPeople.map((item , index)=> <MediaItem key={index} item={item}/> )}

 
  </div>

  </>

  );
};

export default Persons;

