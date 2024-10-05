import React , {useState} from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleLeft , faAngleRight} from "@fortawesome/free-solid-svg-icons"

function MediaSlider({media}) {
    const [mediaIndex , setMediaIndex] = useState(0)
    console.log(mediaIndex)

    const showNextItem = ()=>{
        setMediaIndex ((index) => {
            if(index === media.length - 1) return 0
            return index + 1
        })
    }

    const showPrevItem = ()=>{
        setMediaIndex((index) => {
            if(index === 0) return media.length - 1
            return index - 1
        })
    }
    return (
    <div className=' w-[100%] h-[250px] md:h-[700px] relative group '>
        <div>
            { media[mediaIndex].type === 'image' ? (
                    <img className=' w-[100%] h-[250px] md:h-[700px]  ' src={media[mediaIndex].url} alt="this is thumbnail" />
                ) :media[mediaIndex].type === 'video'? (
                    <video   className='  w-[100%] h-[250px] md:h-[700px]  border-[1px] ' controls >
                        <source src={media[mediaIndex].url} type="video/mp4"/>
                            your video is here
                    </video>
                    
                ) : null} 
        </div>
        <button className='leftButton   absolute top-[50%] left-2 text-white bg-black/50 py-3 px-4 rounded  hidden group-hover:block' onClick={showPrevItem}>
                <FontAwesomeIcon icon={faAngleLeft} className=' text-[20px]'/>
        </button>
        <button className='rightButton absolute top-[50%] right-2 text-white bg-black/50 py-3 px-4 rounded hidden group-hover:block' onClick={showNextItem}>
                <FontAwesomeIcon icon={faAngleRight}  className=' text-[20px]'/>
        </button>
            
    </div>
    )
}

export default MediaSlider
