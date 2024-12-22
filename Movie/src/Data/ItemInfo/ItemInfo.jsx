import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ItemInfo = () => {
  let {id , mediatype} = useParams()
  console.log(id , mediatype);
  const [iteminfo, setiteminfo] = useState({})
  let getItemInfo = async(id , mediatype) => {
    let {data} = await axios.get(`https://api.themoviedb.org/3/${mediatype}/${id}?api_key=1907dd7e22213c1275b820c5455946aa`)
    setiteminfo(data)

  }
  useEffect(()=>{
    getItemInfo(id, mediatype)
    
    
  },[])
  return (
    <>
    <div className=" bg " style={{backgroundImage:`url(https://image.tmdb.org/t/p/original/${iteminfo.backdrop_path})`}} >
    <div className="row">
        <div className="col-md-3">
          <div className="card-image">
<img src={"https://image.tmdb.org/t/p/w500/" + iteminfo.poster_path} className='w-100' />
<img
            className="w-100"
            src={"https://image.tmdb.org/t/p/w500/" + iteminfo.profile_path}
            alt=""
          />

          </div>
        </div>
        <div className="col-md-9 " >
          <h5 className=''>Rate: {iteminfo.vote_average?.toFixed(1)}</h5>
          <h2 className='text-center'>{iteminfo.title} {iteminfo.name}</h2>
          <p className='w-100 py-5'>{iteminfo.overview}</p>
          
        </div>
      </div>
    </div>
    
      
    </>
  )
}

export default ItemInfo
