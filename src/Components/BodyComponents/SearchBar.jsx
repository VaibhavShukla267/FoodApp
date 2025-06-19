import { useState } from 'react'
import { SearchLogo } from '../utils/FoodImg'


function SearchBar({resData,data,setData}) {
  const[searchText,setSearchText]=useState("")
  // console.log("SearchBarRendered");
  console.log(data);
  

 
  return (
   
      <div className='search_field'>

        <input className='search' type="text" value={searchText} onChange={(e)=>setSearchText(e.target.value)} placeholder='Search For Good Food!!'></input>

    <button onClick={()=>{
      console.log({searchText})
     const filteredResturants= resData.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()))
     setData(filteredResturants);
    }
    } ><img src={SearchLogo}></img></button>
      </div>
     
   
  )
}

export default SearchBar