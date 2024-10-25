import React ,{useState}from 'react'
import posts from "../mockData/postDetails.json"
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
    <div className='w-[100%]'>

      {/* posts section */}
      <div className=' w-[100%] px-6 md:px-20 py-4  grid  grid-cols-1 md:grid-cols-4 gap-6  '>
        {posts.length > 0 ? (
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
        <div className='flex justify-center items-center my-8'>
            <button onClick={handleLoadMore} className=' text-[0.9rem] text-primary-500 font-semibold px-10 md:px-32  py-1  border-[2px] border-primary-500 rounded-lg duration-100 hover:bg-primary-500 hover:text-white '>Load More...</button>
        </div>
    </div>
  )
}

export default Inspiration
