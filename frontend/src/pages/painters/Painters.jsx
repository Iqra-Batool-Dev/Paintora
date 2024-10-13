import React from 'react'
import { useState , useEffect } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import paintersData from "../mockData/painters.json"
import citiesData from "../mockData/cities.json"

function Painters() {
    const categories = [ "Interior Painting","Flauk Painting", "Exterior Painting",   "Furniture Painting", "Commercial Painting" ]
    
    const [searchHeading , setSearchHeading] = useState('All Painters')
    const [search , setSearch] = useState('')
    const [category , setCategory] = useState('')
    const [location , setLocation] = useState('')
    const [finalResults, setFinalResults] =useState([])
    
        // function to handle category buttons
        const handleButton = (e)=>{
            const value= e.target.value
            setCategory(value)
            setSearchHeading(value)
            console.log(value)
            const searchResults = paintersData.filter(item => item.location.toString().toLowerCase().includes(category.toLowerCase()))
            setFinalResults(searchResults)
        }
        // function to handle search bar//
        const handleSearch =(e)=>{
            if(e.key === "Enter"){
                setSearch(e.target.value)
            }
    
        }
    
        // function to perform search 
        
                


    return (
    <div className=' w-[100%] py-4 px-10'> 
        <div className=' search-heading my-5 text-[1.8rem] text-black font-bold'>{searchHeading}</div>

        {/* category buttons */}
        <div className={`  w-[100%] flex flex-wrap gap-2 `}>
        {
            categories.map((category, index)=>( 
                <button 
                className={`px-3 py-2 text-[0.9rem] font-semibold hover:shadow-md  rounded-full  bg-gray-100 `} 
                key={index} 
                value={category}  
                onClick={(e)=>handleButton(e)}>
                {category}
                </button>
            ))
        }
        </div>

        {/* search bar  */}
        <div className=' flex flex-row justify-between my-10 '>
        <div className="  border-[2px] border-gray-200 rounded-lg flex flex-row justify-between items-center gap-2 px-3 hover:border-primary-300 bg-white w-[60%]">
            <FontAwesomeIcon icon={faSearch} className="text-gray-400 " />
            <input
                type="search"
                placeholder="Search by keywords, skills, tags...."
                name="search"
                className="text-[1rem] text-gray-950 py-2 w-[100%]  outline-none  "
                value={search} 
                onChange={(e)=>{setSearch(e.target.value)}}
                onKeyDown={handleSearch}
            />

        {/* select menu */}
        </div>
        <select name="select" id="select" filter = "true" className=' py-1 px-5 border-[2px]  rounded-md outline-none border-gray-200 hover:border-primary-300 text-gray-400' 
        onChange={(e)=>handleLocation(e)}>
        <option selected disabled className='text-gray-300 text-center'>Search by location</option>
            {citiesData.map((city , index)=>(    
                <option 
                    value={location}
                    key={index} 
                    className=' text-[0.9rem] ' 
                    defaultValue="location" 
                    >
                    {city}
                </option>
            ))
            }
        </select>
    
        </div>

        {/* painter cards section */}
        <div>

            { 
                
                finalResults.map((item , index)=>(
                <h1 key={index}>{item.name}</h1>
            ))}
        </div>
    </div>
    )
}

export default Painters
