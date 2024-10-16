import React from 'react'
import { useState } from "react"
import { Link } from 'react-router-dom'

const CreatePost = () => {

    const [files, setFiles] = useState([])
    const [title, setTitle] = useState('')
    const [description , setDescription] = useState('')
    const [tags, setTags] = useState([])
    const [inputTag, setInputTag] = useState('')
    
    console.log(description)
    
    const tagSuggestions = ["wall paint", "pink Wall" ,"water proof" , "home exterior", "white paint", "furniture paint" , "white and gold" ]

    const handleAddTag = () => {
        if (inputTag &&  tags.length < 5) {
          setTags([...tags, inputTag]);
          setInputTag('')
        }
      }
    
      const handleSuggestionClick = (suggestion) => {
        // handleAddTag(suggestion); // Add the selected suggestion
        if (suggestion &&  tags.length < 5) {
            setTags([...tags, suggestion]);
            setInputTag('')
      }}

      const handleRemoveTag = (tagToRemove) => {
        setTags(tags.filter((tag) => tag !== tagToRemove))
      }


  
    const handleFileChange = (event) => {
      const selectedFiles = Array.from(event.target.files)
      setFiles(selectedFiles)
    }


const handleUpload = () => {
    // Perform your upload logic here, such as sending files to a backend
    console.log("Uploading files:", files)
  }

    const handleCancel= ()=>{
        setFiles([])
    }
    
    console.log(tags)
  return (
    <div className=" w-[100%] flex flex-col items-center border-[1px] ">
      <div className=" w-[100%] md:w-[80%] bg-white p-8 md:shadow-md md:rounded-lg my-3 ">
        <h1 className="text-[1.5rem] font-bold mb-6 text-center w-[100%] text-black/80">
          Share your work here
        </h1>

        <div className="border-dashed border-2 border-gray-300 rounded-md p-6 mb-4 text-center w-[100%] hover:border-accent-300">
        <label
                  htmlFor="file-upload"
                  className=" cursor-pointer "
                >
          
              <img
                src="https://via.placeholder.com/100"
                alt="Upload"
                className="mx-auto mb-4"
              />
              <p className="mb-2 text-[0.9rem] md:[1rem] text-black/70">
                <strong >Drag and drop an image</strong>, or
              </p>
              <span className='underline text-primary-500'>Browse</span>
              <input
                type="file"
                multiple
                id="file-upload"
                className="hidden"
                onChange={handleFileChange}
              />
              <p className="text-[0.9rem] md:[1rem] text-gray-500">
                Minimum 1600px width recommended. Max 10MB each (20MB for
                videos)
              </p>
              <ul className=" w-[100%] list-disc mt-4 text-left ml-4 text-gray-600 text-[0.9rem] md:[1rem]">
                <li>High resolution images (png, jpg)</li>
                <li>Videos (mp4)</li>
                <li>Only upload media you own the rights to</li>
              </ul>
          </label>
        </div>
        


        {/* showing the images or videos that a user browsed */}
        <div className="mt-4 flex  flex-row  gap-4 w-[100%]">
  {files.length > 0 ? (
    files.map((file, index) => {
      const fileURL = URL.createObjectURL(file); // Generate a temporary URL

      if (file.type.startsWith("image/")) {
        // Render Image Preview
        return (
          <div key={index} className="relative">
            <img
              src={fileURL}
              alt={file.name}
              className="w-full h-48 object-cover rounded-md"
            />
          </div>
        );
      } else if (file.type.startsWith("video/")) {
        // Render Video Preview
        return (
          <div key={index} className="relative">
            <video
              src={fileURL}
              controls
              className="w-full h-48 object-cover rounded-md"
            />
          </div>
        );
      } else {
        // Handle unsupported file types (if needed)
        return (
          <p key={index} className="text-sm text-gray-500 max-w-full">
            Unsupported file type: {file.name}
          </p>
        );
      }
    })
  ) : (
    <p className="text-[0.9rem] md:[1rem] text-gray-500 mb-4 ">No files selected.</p>
  )}
</div>

{/* Title Input */}
<div className=' my-3 w-[100%]'>
        <label htmlFor="" className=' font-bold text-[1rem] text-black/70'>Add Title</label>
        <input
          type="text"
          placeholder="Give me a title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border rounded-md outline-none hover:border-gray-300 focus:border-gray-300 text-[0.9rem]"
          maxLength={80}
        />
        <p className="text-sm text-gray-500 w-full text-right">{title.length} / 80 max</p>
      </div>

      {/* Category and Subcategory Dropdowns */}
      
      {/* description of post */}

      <div className='flex flex-col my-3'>
        <label htmlFor="description" className='font-bold text-[1rem] text-black/70'> Add Description</label>
        <textarea 
            name="description"  
            rows="10"  
            placeholder='Enter a description about your painting work...'
            className='w-[100%] outline-none border hover:border-gray-300 focus:border-gray-300 text-[0.9rem]'
            onChange={(e)=> setDescription(e.target.value)}

            />
      </div>

      {/* Keywords Input with Suggestions */}
      <div className='w-[100%] my-2'>
        <p className=" font-bold text-[1rem] text-black/70 ">Add relevant Tags </p>
        <div className="flex items-center space-x-2 w-[100%]">
          <input 
            type="text"
            value={inputTag}
            onChange={(e) => setInputTag(e.target.value)}
            className="w-full p-2 border rounded-md outline-none hover:border-gray-300 focus:border-gray-300 text-[0.9rem]"
            placeholder="Enter keyword"
            onKeyDown={(e) => e.key === 'Enter' && handleAddTag()}
          />
          <button
            type="button"
            onClick={handleAddTag}
            className="px-4 py-2 bg-primary-500 text-white rounded-md hover:bg-primary-600 text-[0.9rem] md:[1rem]"
          >
            Add
          </button>
        </div>

        {/* Suggested Tags Autocomplete */}
        {inputTag && (
          <ul className="border rounded-md mt-2 w-[100%] ">
            {tagSuggestions
              .filter((tag) => tag.toLowerCase().startsWith(inputTag.toLowerCase()))
              .map((suggestion, index) => (
                <li
                  key={index}
                  onClick={() => handleSuggestionClick(suggestion)}
                  className="p-2 cursor-pointer hover:bg-gray-100"
                >
                  {suggestion}
                </li>
                
              ))}
          </ul>
        
        )}
        

        {/* Display Added Tags */}
        <div className="my-2 flex flex-wrap gap-2 w-[100%]">
          {tags.map((tag, index) => (
            <div
              key={index}
              className="flex items-center bg-gray-200 px-2 py-1 rounded-md"
            >
              {tag}
              <button
                onClick={() => handleRemoveTag(tag)}
                className="ml-2 text-red-500 text-[0.9rem] md:[1rem]"
              >
                ✕
              </button>
            </div>
          ))}
        </div>

        <p className="text-[0.9rem] md:[1rem] text-gray-500 mt-1 w-[100%]">
          {tags.length} / 5 tags maximum. Use letters only.
        </p>
      </div>

        {/* last buttons............................. */}
        <div className="flex justify-between w-[100%] mb-3 mt-5">
            <button className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300 text-[0.9rem] md:[1rem]"
            onClick={handleCancel}
            >
            Cancel
            </button>
            <Link className="px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 text-[0.9rem] md:[1rem]" >
            Continue
            </Link>
        </div>
        </div>
    </div>
    );
}

export default CreatePost;

