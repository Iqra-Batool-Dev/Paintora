import React , {useState} from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function SearchBar() {
    const [search , setSearch] = useState('')
    const handleSearch = (e)=>{
      setSearch(e.target.value)
      console.log(e.target.value)

    }
  return (
    <div className=" hidden border-[2px] border-gray-200 rounded-lg lg:flex lg:flex-row justify-around items-center px-2 hover:border-primary-300">
            <FontAwesomeIcon icon={faSearch} className="text-gray-400 " />
            <input
              type="search"
              placeholder="Search..."
              name="search"
              className="text-[1rem] text-gray-950 py-1 px-4  outline-none "
              value={search}
              onChange={handleSearch}
            />
          </div>
  )
}

export default SearchBar
