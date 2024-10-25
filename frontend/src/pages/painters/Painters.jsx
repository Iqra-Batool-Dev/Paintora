import React from 'react'
import { useState , useEffect , useCallback} from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import paintersData from "../mockData/painters.json"
import citiesData from "../mockData/cities.json"
import { Link } from 'react-router-dom'

function Painters() {
    const categories = [ "Interior Painting","Flauk Painting", "Exterior Painting",   "Furniture Painting", "Commercial Painting" ]


    
    const [searchHeading , setSearchHeading] = useState('All Painters')
    const [search , setSearch] = useState('')
    const [category , setCategory] = useState('')
    const [location , setLocation] = useState('')
    const [finalResults, setFinalResults] =useState([])
    
        // function to handle category buttons
        const handleButton = (value) => {
            if (category !== value) {
                setCategory(value); // Avoid setting state if the value is unchanged
                setSearchHeading(value || 'All Painters');
            }
        }
        // function to handle input change in search bar//
        const handleSearchInputChange = (e) => {
            setSearch(e.target.value)  
        }

        // function to handle keydown on search bar
        const handleSearchKeyDown = (e) => {
            if (e.key === "Enter") {
                // Trigger filtering by setting final results on Enter press
                applyFilters()
            }
        }
    
        // function to handle location change
        const handleLocation = (e) => {
            const selectedLocation = e.target.value
            console.log(selectedLocation)
            setLocation(selectedLocation)
        }
        
        // logic to filter the data based on the dependencies given in useEffect hook
        const applyFilters= () => {
            const filteredResults = paintersData.filter((painter) => {
                const matchesCategory = category
                    ? painter.speciality.some((value)=>value.toLowerCase().includes(category.toLowerCase()))
                    : true
    
                // const matchesSearch = search
                //     ? painter.name.toLowerCase().includes(search.toLowerCase()) ||
                //         painter.speciality.some((skill) => skill.toLowerCase().includes(search.toLowerCase()))
                //     : true
    
                const matchesLocation = location
                    ? painter.location.toLowerCase().includes(location.toLowerCase())
                    : true
    
                return matchesCategory  && matchesLocation
            })
    
            setFinalResults(filteredResults) 
        }

        // Re-run filters whenever category, location, or search changes
        useEffect(() => {
            if (category || location) {
                applyFilters(); // Only run when category or location changes
            }
        }, [category, location]);        
    


    return (
    <div className=' w-[100%] min-h-[100vh] py-4 px-6 md:px-10 '> 
        <div className=' search-heading my-5 text-[1.8rem] text-black font-bold'>{searchHeading}</div>

        {/* category buttons */}
        <div className={`  w-[100%] flex md:flex-row flex-nowrap overflow-x-scroll md:overflow-visible  gap-3  `}>
            <button className={` mb-3 px-4 py-2 text-[0.9rem] font-semibold hover:shadow-md  rounded-lg shrink-0  bg-gray-100 `} 
            onClick={()=> handleButton('')}
            >
            All
            </button>
        {
            categories.map((category, index)=>( 
                <button 
                className={` mb-3 px-4 py-2 text-[0.9rem] font-semibold hover:shadow-md  rounded-lg shrink-0  bg-gray-100 `} 
                key={index} 
                value={category}  
                onClick={()=>handleButton(category)}>
                {category}
                </button>
            ))
        }
        </div>

        <div className=' flex flex-col md:flex-row justify-between gap-5 my-10 '> 
        {/* search bar  */}
        <div className="  border-[2px] border-gray-200 rounded-lg flex flex-row justify-between items-center gap-2 px-3 hover:border-primary-300 bg-white md:w-[60%] ">
            <FontAwesomeIcon icon={faSearch} className="text-gray-400 " />
            <input
                type="search"
                placeholder="Search by keywords, skills, tags...."
                name="search"
                className="text-[1rem] text-gray-950 py-2 w-[100%]   outline-none  "
                value={search} 
                onChange={handleSearchInputChange}
                onKeyDown={handleSearchKeyDown}
            />

        {/* select menu */}
        </div>
        <select name="select" id="select" filter = "true" className=' py-2 px-5 border-[2px]  rounded-md outline-none border-gray-200 hover:border-primary-300 text-gray-400 ' 
        value={location}
        onChange={handleLocation}>
        <option selected  className='text-gray-300  text-center'>Search by location</option>
            {citiesData.map((city , index)=>(    
                <option 
                    
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
        <div className=''>
        <div className=' w-[100%]  py-4  grid  grid-cols-1  gap-6 '>
            {finalResults.map((painter, index)=>(
              <div className='overflow-hidden rounded-lg border border-primary-100 shadow-md p-6' key={index}>
              <div className=' flex flex-row justify-between items-center'>
                <Link to='///'>
                <div className='flex flex-row justify-center items-center gap-5'> 
                <img src={painter.avatar} alt="this is user" className=' w-14 h-14 overflow-hidden rounded-full' />
                <div className=' flex flex-col'>
                    <h3 className='text-lg font-semibold text-black/70'> {painter.name} </h3>
                    <p className='text-[0.9rem] text-black/70'> {painter.location} </p>
                </div>
                </div>
                </Link>
                <Link to='//' 
                  className=' text-[0.7rem] md:text-[0.9rem] text-white font-semibold px-4  py-2  bg-accent-600 rounded-[20px] duration-100 hover:bg-primary-500 hover:text-white md:block hidden '
                >
                  Get In touch
                </Link>
              </div>
              {/* posts grid */}
              <div className='w-full overflow-x-scroll  md:overflow-x-visible '>
              <div className=' w-[100%]  flex flex-row items-center md:grid lg:grid-flow-col md:grid-cols-4 md:auto-cols-[25%] gap-6 my-6 '>
                  {painter.media.map((post , index)=>(
                    (index<5 && (
                      <div className=' thumbnail  rounded-xl overflow-hidden shrink-0 '>
                        { post.type === 'image' ? (
                            <img className=' border-[1px] rounded-xl w-full  h-[200px]  ' src={post.url} alt="this is thumbnail" />
                        ) : post.type === 'video'? (
                            <video   className=' border-[1px]  rounded-xl w-full  h-[200px]'>
                                <source src={post.url} type="video/mp4"/>
                                your video is here
                            </video>
                        ) : null}
                    </div>
                    ))
                  ))

                  }
              </div>
              </div>
              <div className='flex flex-row justify-center items-center my-3'>
              <Link to='//' 
                  className=' w-full text-center  text-[0.7rem] md:text-[0.9rem] text-white font-semibold px-4  py-2  bg-accent-600 rounded-md duration-100 hover:bg-primary-500 hover:text-white md:hidden'
                >
                  Get In touch
                </Link>
              </div>
              </div>
            ))}





            {/* { 
                
                finalResults.map((item , index)=>(
                <h1 key={index}>{item.name}</h1>
            ))} */}
        </div>
        </div>
    </div>
    )
}

export default Painters
