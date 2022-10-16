import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import LikeButton from './Like.js'
import EditForm from './Edit.js'
export default function MainBlog() {
    let url= 'http://localhost:3000/blogs'

    let [post,setPost]=useState([])
    let[loading,SetLOading]=useState(true)
    let getAllPost= async ()=>{

        let response= await fetch(url)

        let data= await response.json()

        setPost(data)
        SetLOading(false)

    }
        useEffect(()=>{
            getAllPost()
        },[])
        
  return (
    <div >

         <div className='p-16 grid grid-cols-2  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5 '>

      {loading? ("Fetching Blogs"):(

        post.map((post)=>{

          return(

             <div className='rounded overflow-hidden shadow-lg'>
             
              <p class="text-gray-700 text-base">
                {post.blog}
              </p>
             
              {/* <button onClick={<EditForm/>}>Edit</button> */}
              </div>
              
          )

        })

      )}

    </div>
    </div>
            
           
          )
        }
