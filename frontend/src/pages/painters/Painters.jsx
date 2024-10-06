import React from 'react'
import { useState , useEffect } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import paintersData from "../mockData/painters.json"

function Painters() {
    const categories = [ "Interior Painting","Flauk Painting", "Exterior Painting",   "Furniture Painting", "Commercial Painting" ]
    const [isActive , setIsActive] = useState(null)
    const [searchHeading , setSearchHeading] = useState('All Painters')

    // function to handle category buttons
    const [category , setCategory] = useState('')
    const handleButton = (e)=>{
        const value= e.target.value
        setCategory(value)
        setSearchHeading(value)
        console.log(value)
    }
    // function to handle search bar//
    const [search , setSearch] = useState('')
    // const handleSearch =()=>{
    //     const searchResults = 

    // }

            const searchResults = paintersData.filter(item => item.speciality.toString().toLowerCase().includes(category.toLowerCase()))
            // const searchResults = paintersData.filter(item => /[item.speciality | category]/ )
    
    
    return (
    <div className=' w-[100%] py-4 px-8'> 
        <div className=' search-heading my-5 text-[1.8rem] text-black font-bold'>{searchHeading}</div>

        {/* category buttons */}
        <div className={`  w-[100%] flex flex-wrap gap-2 `}>
        {
            categories.map((category, index)=>( 
                <button className={`px-3 py-2 text-[0.9rem] font-semibold hover:bg-gray-300 rounded-full  bg-gray-200 `} key={index} value={category}  onClick={(e)=>handleButton(e)}>
                {category}
                </button>
            ))
        }
        </div>

        {/* search bar  */}
        <div className="  border-[2px] border-gray-200 rounded-lg flex flex-row justify-around items-center px-2 hover:border-primary-300 bg-white">
            <FontAwesomeIcon icon={faSearch} className="text-gray-400 " />
            <input
                type="search"
                placeholder="Search..."
                name="search"
                className="text-[1rem] text-gray-950 py-1 px-4  outline-none  "
                value={search} 
                onChange={(e)=>{setSearch(e.target.value)}}
                // onKeyDown={handleSearch}
            />
        </div>


        <div>
            {searchResults.map((item , index)=>(
                <h1 key={index}>{item.name}</h1>
            ))}
        </div>
    </div>
    )
}

export default Painters
