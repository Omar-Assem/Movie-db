import React from 'react'
import { Link } from 'react-router-dom'
import ItemInfo from '../ItemInfo/ItemInfo'

const MediaItem = ({item}) => {
  return (
    <>


  <div className="col-md-3 my-5">
    <Link to={`ItemInfo/${item.id}/${item.media_type}`}>
    
    <div className="card ">
      <img src={"https://image.tmdb.org/t/p/w500/" + item.poster_path} alt="" />
      <img className="w-100"src={"https://image.tmdb.org/t/p/w500/" + item.profile_path}alt=""/>
      <h5>{item.title}{item.name}</h5>
    </div>
    
    
    </Link>
  
  </div>
 






    </>
  )
}

export default MediaItem
