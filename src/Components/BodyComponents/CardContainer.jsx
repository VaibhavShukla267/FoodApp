// import React, { useEffect, useState } from 'react'
import { FoodImage } from '../utils/FoodImg';
import {motion} from 'motion/react'


function CardContainer({resData}) {
  // const[hasLiked,setHasLiked]=useState(false)
  // const[count,setCount]=useState(0);
  console.log(resData);


  // useEffect(()=>{
  //   console.log(`Title:${resData?.info?.name},LikedCount:${hasLiked}`);
    
  // },[hasLiked])
  
  const {cloudinaryImageId,name,locality,cuisines,avgRating}=resData.info;
  
  return (
 
        
          <motion.div
      whileHover={{ scale: 1.05, boxShadow: "0px 4px 15px rgba(0,0,0,0.2)" }}
      transition={{ type: "spring", stiffness: 300 }}
      className="card"
      style={{
        padding: "1rem",
        borderRadius: "1rem",
        background: "white",
        cursor: "pointer",
        width: "250px"
      }} >
            <img src={FoodImage+cloudinaryImageId}></img>
            <p>{name}</p>
            <p>Location:{locality}</p>
            <p>Cuisines:{cuisines?.join(",")}</p>
            <h4>Rating:{avgRating}</h4>
            <button>OrderNow!!</button>
            {/* <button  onClick={()=>{setHasLiked(!hasLiked); setCount((prev)=>setCount(prev+1))}}>{hasLiked?"❤️":"🤍"}</button> */}
          </motion.div>
   

  )
}

export default CardContainer