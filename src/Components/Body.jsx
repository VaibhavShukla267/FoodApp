import React, { useState,useEffect } from 'react'
import CardContainer from './BodyComponents/CardContainer.jsx'
import SearchBar from './BodyComponents/SearchBar.jsx'
import Shimmer from './Shimmer.jsx';
import {REST_LIST_URI} from './utils/FoodAPI.js'
import { Link } from 'react-router-dom';


function Body() {
  // const[resturantLists,setResturantList]=useState(res);
  const[resturantLists,setResturantList]=useState([]);
  const[filteredResturantsList,setfilteredResturantsList]=useState([]);
  console.log("BodyRendered");
  

  //Very Important Concept is const[resturantLists,setResturantList] this is basic array destructing 
  //  const arr=useState(res)
  //  const [resturantLists,setResturantList]=arr

  // const resturantLists=arr[0];
  // const setResturantList=arr[1];

  //  console.log("resturantList",resturantLists);
   
   useEffect(()=>{
     FetchData();
     console.log("UseEffect Rendered");
     
     
    },[])
    
    const FetchData=async()=>{
      const response=await fetch(REST_LIST_URI,{
            method: 'GET',
            headers: {
              'Accept': '*/*',
              'Accept-Language': 'en-US,en;q=0.9',
              'Cache-Control': 'no-cache',
              'Pragma': 'no-cache',
              'Sec-Fetch-Dest': 'empty',
              'Sec-Fetch-Mode': 'cors',
              'Sec-Fetch-Site': 'cross-site',
              'User-Agent': navigator.userAgent,
              'Accept-Encoding': 'gzip, deflate, br'
        },
        cache: 'no-store',
        mode: 'cors',
        credentials: 'omit'
              })
      if (!response.ok) {
      throw new Error("Failed to fetch");
    }
      const result=await response.json();
      
      // console.log("SwiggyAPi",result);
      console.log("SwiggyApiResult",result?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      
      setResturantList(result?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
      setfilteredResturantsList(result?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }  

    // // Conditional Rendering
    // if(resturantLists.length==0){
    //   return(<Shimmer />)
      
    // } 
  return resturantLists.length==0?(<Shimmer />)
  :(
    <div>
       <div className='search_bar'>

        <SearchBar resData={resturantLists} data={filteredResturantsList} setData={setfilteredResturantsList} />
         <button onClick={()=>{
        let filteredList=resturantLists.filter((rest)=>(
            rest.info.avgRating>4.3
        ))
        setfilteredResturantsList(filteredList);
      }}>Get Top Rated Resturants</button>
       </div>
        <div className='card_container'>
        <div className='card_items'>
        {/* <CardContainer title="Great Pizzas At Low Cost!!" brand="Dominos" rating="⭐⭐⭐⭐" />
        <CardContainer title="Great Biryani At High Cost!!" brand="KFC" rating="⭐⭐⭐⭐" /> */}
        {/* {
          res.map((resturants)=>(<CardContainer resData={resturants} />))
        } */}
        {
          filteredResturantsList. map((resturants)=>(
         <Link to={"/restaurants/"+resturants.info.id} key={resturants.info.id}> <CardContainer resData={resturants} /></Link>
        ))
        }
        {/* <CardContainer resData={res[0]} />
        <CardContainer resData={res[1]} />
        <CardContainer resData={res[2]} />
        <CardContainer resData={res[3]} /> */}

       
        </div>
        </div>
        
    </div>
  )
}

export default Body