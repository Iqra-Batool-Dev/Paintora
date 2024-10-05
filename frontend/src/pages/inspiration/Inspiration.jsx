import React ,{useState}from 'react'
import posts from "../mockData/posts.json"
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart , faBookmark} from "@fortawesome/free-regular-svg-icons"


function Inspiration() {

      // handling load more button
      const [displayPosts , setDisplayPosts] = useState(posts.slice(0, 8))
      const [visibleItemCount, setVisibleItemCount] = useState(8)
  
      const handleLoadMore = ()=>{
          setVisibleItemCount (visibleItemCount + 8)
          console.log(visibleItemCount)
          setDisplayPosts (posts.slice(0 , visibleItemCount ))
      }
      //

  return (
    <div>
      {/* posts section */}
      <div className=' w-[100%] px-6 md:px-20 py-4  grid  grid-cols-1 md:grid-cols-4 gap-6  '>
        {posts.length > 0 ? (
            displayPosts.map((result , index)=>{
                return(
                <div key={index} className='  overflow-hidden rounded-xl '>
                <Link to={`/post/${result.id}`} >
                    <div className=' thumbnail  rounded-xl overflow-hidden  relative group'>
                    <img className=' rounded-xl w-full  h-[200px]  ' src={result.image} alt="this is thumbnail" />
                        <p className=' w-full h-fit text-white font-semibold pb-6 pt-2 px-3 bg-gradient-to-t from-black/50 to-black/20 to-black/5 absolute left-0 bottom-0 hidden group-hover:block'

                        >
                            {result.title}
                            </p> 
                    </div>
                    </Link>
                    <div className='flex flex-row justify-between items-center gap-3'>
                        <Link className=' flex flex-row justify-left items-center gap-2 py-2  w-fit'>
                            <img src={result.profile} alt="this is user" className=' w-6 h-6 overflow-hidden rounded-2xl' />
                            <span className=' text-[0.9rem]'>{result.createdBy}</span>
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
        <div className='flex justify-center items-center my-8'>
            <button onClick={handleLoadMore} className=' text-[0.9rem] text-primary-500 font-semibold px-10 md:px-32  py-1  border-[2px] border-primary-500 rounded-lg duration-100 hover:bg-primary-500 hover:text-white '>Load More...</button>
        </div>
    </div>
  )
}

export default Inspiration
