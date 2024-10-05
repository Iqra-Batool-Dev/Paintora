import React , {useState} from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from 'react-router-dom';

function SearchBar() {
    const [search , setSearch] = useState('')
    const navigate = useNavigate()
    const handleSearch = (e)=>{
    if(e.key === "Enter"){
      navigate(`/search?query=${search}`)
    }

    }
  return (
    <div className="  border-[2px] border-gray-200 rounded-lg flex flex-row justify-around items-center px-2 hover:border-primary-300 bg-white">
            <FontAwesomeIcon icon={faSearch} className="text-gray-400 " />
            <input
              type="search"
              placeholder="Search..."
              name="search"
              className="text-[1rem] text-gray-950 py-1 px-4  outline-none  "
              value={search} 
              onChange={(e)=>{setSearch(e.target.value)}}
              onKeyDown={handleSearch}
            />
          </div>
  )
}
        

function MobileSearchBar() {
  const [search , setSearch] = useState('')
  const [close , setClose] = useState(false)
  const navigate = useNavigate()
  const handleSearch = (e)=>{
  if(e.key === "Enter"){
    navigate(`/search?query=${search}`)
    setClose(!close)
  }

  

  }
return (
  <div className={` w-full h-full lg:hidden bg-black/50 backdrop-blur-sm  fixed top-0 left-0 ${close? "hidden" : "block"} ` }>
    <div className=" flex flex-col gap-3 px-3 py-5 w-[100%]  h-[200px]  absolute top-0 left-0  bg-blend-overlay bg-white border-[1px]  lg:hidden   ">
        <div className=" w-[90%] mx-auto mt-2  border-[2px] border-gray-200 rounded-lg flex flex-row justify-between items-center px-2 hover:border-primary-300 ">
          <FontAwesomeIcon icon={faSearch} className="text-gray-400 " />
          <input
            type="search"
            placeholder="Search..."
            name="search"
            className="text-[1rem] text-gray-950 py-1 px-4  outline-none  w-[95%] "
            value={search} 
            onChange={(e)=>{setSearch(e.target.value)}}
            onKeyDown={handleSearch}
          />
        </div>
    </div>
  </div>
)
}
export {SearchBar , MobileSearchBar}
