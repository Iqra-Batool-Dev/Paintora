import React , {useEffect , useState }from 'react'
import { useParams , Link } from 'react-router-dom'
import posts from "../mockData/postDetails.json"
import MediaSlider from '../../components/mediaSlider/MediaSlider'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart , faBookmark} from "@fortawesome/free-regular-svg-icons"
function PostDetails() {
  const {postId} = useParams()
  const [postDetails , setPostDetails] = useState([])
  console.log(postId)

  useEffect (()=>{
      const relevantPost = posts.filter(post => post.id == postId)
      setPostDetails(relevantPost)
  } , [postId])

  return (
    <div className=' w-[100%]  md:w-[90%]  mx-auto py-[30px] px-2 '>
    { postDetails.length > 0 ? (
      postDetails.map((post , index)=>{
        const media = post.media
        const obj  = media[0]
        return(
          <div key={index}>
          <h1 className=' text-[1.8rem] md:text-[2.2rem] font-medium  mb-4'>{post.title}</h1>
          <div className=' flex flex-row justify-between items-center my-4'>
              <div className=' flex flex-row justify-left items-center gap-2 py-2 '>
                  <img src={post.profile} alt="this is user" className=' w-8 h-8 md:w-10 md:h-10 overflow-hidden rounded-full' />
                  <span className =' text-[0.9rem] md:text-[1rem]'>{post.createdBy}</span>
              </div>
              <div className=' flex  flex-row  gap-4  items-center'>

              {/* like and save button for large screen */}
              <div className=' flex-row justify-between gap-4 items-center hidden md:flex '>
                <button className=' py-2 px-3 border-[1px] rounded-full '>
                  <FontAwesomeIcon icon={faHeart}  />
                </button>
                <button className=' py-2 px-[15px] border-[1px] rounded-full '>
                  <FontAwesomeIcon icon={faBookmark} />
                </button>
              </div>
                <Link to={"/login"} className=' text-[0.7rem] md:text-[0.9rem] text-white font-semibold px-4  py-2  bg-accent-600 rounded-[20px] duration-100 hover:bg-primary-500 hover:text-white '>
                Get in touch
                </Link>
              </div>
          </div>

          {/* post slider */}
          {media.length == 1 ? (
            <div className=' w-[100%] h-[250px] border-[1px] md:h-[700px] '> 
            { obj.type === 'image' ? (
                            <img className='w-[100%] h-[250px] md:h-[700px] ' src={obj.url} alt="this is thumbnail" />
                        ) : obj.type === 'video'? (
                            <video   className='w-[100%] h-[250px] md:h-[700px]   '>
                                <source src={obj.url} type="video/mp4"/>
                                your video is here
                            </video>  
                        ) : null}
            </div>
              
          ): (
          <MediaSlider media = {media}/>
          )}
          {/* like and save button for mobile */}
          <div className='flex flex-row justify-left gap-4  my-4 items-center md:hidden'>
                <button className=' py-2 px-3 border-[1px] rounded-full '>
                  <FontAwesomeIcon icon={faHeart}  />
                </button>
                <button className=' py-2 px-[15px] border-[1px] rounded-full '>
                  <FontAwesomeIcon icon={faBookmark} />
                </button>
              </div>

          <p className=' my-10 text-black text-[1rem] w-[100%] h-fit'>
            {post.description}
          </p>
          </div>
        )
      })
    ):(
        <h1>posts detailes not found</h1>
    )}
    
    </div>
  )
}

export default PostDetails
