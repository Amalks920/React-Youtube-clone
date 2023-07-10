import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice'
import {  useSearchParams } from 'react-router-dom'
import CommentsContainer from './CommentsContainer'


const  WatchPage=()=>{
  const [searchParams]=useSearchParams()
  
  console.log(searchParams.get('v'))
  const dispatch=useDispatch()

  useEffect(()=>{
    dispatch(closeMenu())
  },[])
  
  
  return (
  
    <div className='w-screen h-screen'>
    <iframe className='w-3/4 h-3/4' src="https://www.youtube.com/embed/NPtBkw5uD-0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    <CommentsContainer />
    </div>
    
   
  )
  
}

export default WatchPage