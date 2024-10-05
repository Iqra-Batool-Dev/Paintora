import React ,{useState , useEffect}from 'react'
import { Link, useLocation } from 'react-router-dom'
import posts from "../mockData/postDetails.json"
import BlackPainter from '../../assets/images/blackPainters.png'
import { SearchBar } from '../../components/SearchBar';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart , faBookmark} from "@fortawesome/free-regular-svg-icons"
function Search() {
    // getting search query and filtering data 
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const searchQuery = queryParams.get('query');
    const searchResults = posts.filter(item => item.tags.toString().toLowerCase().includes(searchQuery.toLowerCase()) || item.title.toLowerCase().includes(searchQuery.toLowerCase()) );

    // handling load more button
    const [displayPosts , setDisplayPosts] = useState([])
    const [visibleItemCount, setVisibleItemCount] = useState(8)

    // updating displayPosts by searchResults on change of searchQuery
    useEffect (()=>{
        setDisplayPosts(searchResults.slice(0 , 8))
        setVisibleItemCount(8)   
    } , [searchQuery])

    const handleLoadMore = ()=>{
        setVisibleItemCount (visibleItemCount + 8)
        console.log(visibleItemCount)
        setDisplayPosts (searchResults.slice(0 , visibleItemCount ))
    }
    //
    
    return (
    <div className=' w-[100%] '>
        <div className=' w-[100%] h-[200px] flex flex-col justify-center items-center bg-gradient-to-r from-primary-800  via-primary-600 via-primary-500 via-primary-400 via-secondary-600 via-secondary-500  to-accent-300 '>
            <div className='px-2'>
            <h1 className=' text-[2rem] md:text-[2.5rem] font-semibold text-center text-white '>Search Paintora</h1>
            <p className=' text-[0.9rem] md:text-[1.3rem]  text-gray-100 text-center'>Search {posts.length}000+ inspirations from thousands of painters </p>
            </div>
            <div className=' my-2'>
                <SearchBar/>
            </div>
            
        </div>
        <div className='flex flex-col justify-center items-center  py-5 w-[100%]'>
            <h1 className=' text-[1.3rem] '>Search results for : " <span className=' font-semibold'>{searchQuery} </span> "</h1>
            <p className=' text-[0.9rem] '>{searchResults.length} results</p>
        </div>

        {/* posts section */}
        <div className=' w-[100%] px-6 md:px-20 py-4  grid  grid-cols-1 md:grid-cols-4 gap-6  '>
        {searchResults.length > 0 ? (
            displayPosts.map((result , index)=>{
                const firstMedia = result.media[0]
                return(
                <div key={index} className='  overflow-hidden rounded-xl '>
                <Link to={`/post/${result.id}`}>
                    <div className=' thumbnail  rounded-xl overflow-hidden   '>
                        { firstMedia.type === 'image' ? (
                            <img className=' border-[1px] rounded-xl w-full  h-[200px]  ' src={firstMedia.url} alt="this is thumbnail" />
                        ) : firstMedia.type === 'video'? (
                            <video   className=' border-[1px]  rounded-xl w-full  h-[200px]'>
                                <source src={firstMedia.url} type="video/mp4"/>
                                your video is here
                            </video>
                        ) : null}
                        <p className=' w-full h-full p-3  border-[1px] bg-black/20 absolute left-0 bottom-0 hidden '>
                            {result.title}
                        </p> 
                    </div>
                    </Link>
                    <div className='flex flex-row justify-between items-center gap-3 px-2'>
                        <Link className=' flex flex-row justify-left items-center gap-2 py-2  w-fit'>
                            <img src={result.profile} alt="this is user" className=' w-6 h-6 overflow-hidden rounded-full' />
                            <span className=' text-[0.9rem] text-black'>{result.createdBy}</span>
                        </Link>
                        <div className='flex flex-row gap-3'>
                        <div className='flex flex-row items-center'>
                            <button className=' text-[0.8rem]  text-gray-800'>
                                <FontAwesomeIcon icon={faHeart} />
                            </button>
                            <span className='text-[0.6rem] ml-[2px]'>44</span>
                        </div>
                        <div className='flex flex-row items-center'>
                            <button className=' text-[0.8rem]  text-gray-800'>
                                <FontAwesomeIcon icon={faBookmark} />
                            </button>
                            <span className='text-[0.6rem] ml-[2px]'>44</span>
                        </div>
                        </div>
                    </div>
                </div>
                )
            })
        ):(
            <p>Results not found :( </p>
        )}
        </div>

        {/* load more button */}
        <div className='flex justify-center items-center  my-5'>
            <button onClick={handleLoadMore} className=' text-[0.9rem] text-primary-500 font-semibold px-10 md:px-32  py-1  border-[2px] border-primary-500 rounded-lg duration-100 hover:bg-primary-500 hover:text-white '>Load More...</button>
        </div>
    </div>
    )
}

export default Search
