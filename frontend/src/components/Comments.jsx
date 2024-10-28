import React, {useState} from 'react'


function comments() {

    const [comments, setComments] = useState([
        { id: 1, user: 'Ali', text: 'Great work!' },
        { id: 2, user: 'Sara', text: 'Amazing attention to detail. you work is very nice keep it up bro' },
        { id: 3, user: 'Sara', text: 'Amazing attention to detail. you work is very nice keep it up bro' },
        { id: 4, user: 'Sara', text: 'Amazing attention to detail. you work is very nice keep it up bro' },
        { id: 5, user: 'Sara', text: 'Amazing attention to detail. you work is very nice keep it up bro' },
        { id: 6, user: 'Sara', text: 'Amazing attention to detail. you work is very nice keep it up bro' }
      ])
      const [newComment, setNewComment] = useState('')
    
      const handleSubmit = (e) => {
        e.preventDefault()
        if (newComment.trim()) {
          setComments([...comments, { id: comments.length + 1, user: 'You', text: newComment }])
          setNewComment(''); // Clear input after submission
        }
      }

  return (
    <div className='flex  flex-col w-[100%] flex-wrap space-y-10 md:w-[80%] mx-auto px-6 '>
         <h2 className='text-[1.2rem] font-bold text-black/80 '>What people say about me</h2>
    
      <div className=' w-[100%] h-[300px] p-6 overflow-y-scroll bg-gray-50'>
        {comments.map((comment) => (
          <div key={comment.id} className='my-4 w-[100%] '>
                <h3 className='text-[0.9rem] font-bold text-black/80'> {comment.user} </h3>
                <p className='text-[0.9rem] text-black/80 font-medium '>{comment.text} </p>
          </div>
        ))}
      </div>

      {/* Comment Input Form */}
      <form onSubmit={handleSubmit}
        className='flex  flex-col  space-y-2 px-6'
      >
        <textarea
          type="text"
          placeholder="Add your feedback"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          className="w-full p-2 border outline-none rounded-md text-[0.9rem] text-gray-500 hover:border-gray-300 focus:border-gray-300"
        />
        <button type="submit" 
        className=" self-end px-4 py-2 bg-primary-500 text-white rounded-md hover:bg-primary-600 text-[0.9rem] md:[1rem]"
        >Submit</button>
      </form>
    </div>
  )
}

export default comments
