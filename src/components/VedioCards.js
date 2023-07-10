import React from 'react'

const VedioCards = ({info}) => {
  
    const {snippet,statistics,contentDetails}=info;
    const {thumbnails}=snippet;
    const {localized}=snippet
  return (
  
       
      
     <ul onClick={
         console.log('hello')
     } 
      className='shadow-lg flex-row items-center p-3 m-3  flex flex-wrap h-full'>
     <img className='w-full p-3 rounded-xl' src={thumbnails.medium.url}/> 
        <li className='ps-3 pb-3 font-bold text-lg font-sans'>{localized.title}</li>
        <li className='ps-3'>{snippet.channelTitle}</li>
        <li className='ps-3'>{statistics.viewCount} views</li>
        <li className='ps-3'>publishedAt:{snippet.publishedAt}</li>
     </ul>
   
 
   
  )
}

export default VedioCards

