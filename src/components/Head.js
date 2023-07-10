import React, { useEffect, useState } from 'react'
import { toggleMenu } from '../utils/appSlice'
import { useDispatch, useSelector } from 'react-redux'
import { YOUTUBE_SEARCH_API_URL } from '../utils/constants'
import { cacheResults } from '../utils/searchCacheSlice'

const Head = () => {
  const [searchQuery,setSearchQuery]=useState('')
  const [searchQueryData,setSearchQueryData]=useState('')
  const [showSuggestion,setShowSuggestion]=useState(true)
  const [isLoginOrLogout,setIsLoginOrLogout]=useState(false)

  const searchCache=useSelector((store)=>store.search)
  console.log(searchCache[searchQuery])
  
const dispatch=useDispatch()


useEffect(()=>{
  const timer=setTimeout(()=>{
    if(searchCache[searchQuery]){
      setSearchQueryData(searchCache[searchQuery])
    }else{
    searchYoutubeApi()
    }
  },200)
   
  return ()=> clearTimeout(timer)},[searchQuery]
  )



const searchYoutubeApi=async ()=>{
  
  console.log('api called')
  const data=await fetch(YOUTUBE_SEARCH_API_URL+searchQuery)
  const json=await data.json()
  setSearchQueryData(json[1])

  //update cache

  dispatch(
    cacheResults({
      [searchQuery]:json[1]
    })
  )
}


  const toggleMenuHandler=()=>{
    dispatch(toggleMenu())
  }

  const showLoginLogout=(p)=>{
    setIsLoginOrLogout(p)
  
  }

  return (
  
    <div className='grid grid-flow-col  shadow-lg p-8'>
    <div className='flex items-center col-span-1'>
        <img  onClick={
          ()=>{
            toggleMenuHandler()
          }
        } className="h-10 ml-2" alt='icon'  src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAY1BMVEX///8AAADPz89LS0uWlpaPj4/4+PhfX1/29vawsLAdHR3b29v8/PzExMQzMzOEhIRzc3MPDw+hoaGysrLq6uo8PDwXFxfh4eFkZGRXV1fGxsZGRkaHh4fX19d6enqnp6e7u7sLhoRgAAAChUlEQVR4nO3di1LCQAyF4eWOCIgIqPWC7/+UWhm8jZNs2Z3JJP2/J8gZK+1u02xKAAAAAAAAAAAAAAAAABDfcjWZjfyYTVbLTvl2rwN/Nrv8gBPrYi80ycw33VtXerH9NCvgwbrOAoeciGvrKous9YA31jUWutEC3ltXWOxeSfhgXWCxBzng3Lq+CuZiwivr8iq4EhNurMurYCMm9H2rOJFvGNbVVdHzhJ6f2M4WYsJH6/IqeBQTel03/SSvoYbW5VUwFBOmW+v6it3KAdPRusBiRyVhWlhXWEj+JW29WJdY6EVN6PzhW71GW1vrKgtscwKm1FjXebEmL+DHOtjjhvDHskle+/7JOPa2abofd9jyPpleD/24ztoKBgAAAAAAAAAAPs2b49iPY9PlvVPrbWT9Lqmz0VuHfEOf7QoLpZPm27N1qRdT29hPZtZ1FpjlBPTdJiw3CH+6s66x0J0W0H+zvnbb8P7JzGDwLAdcWtdXgfyp5cq6vApWwS9S7ab4ZF1eBU9iQv8twlqTsHV1VfT8bxj//zD+b2n8+2GEZxoxoOfV75nyXBpgbaH20vr+GCFjfdiDNX4P9mk8/9povzJfwu+Xpvh73q3o7y0AAAAAAAAAAIAjwedE7cbeZiavO836mvt8050/r83vzD25WehL+LmJvme0Zsy+jD+/1GeTwjd1Bq3va7SlXaf+m4SVWdDx53nHn8kef65+hLMRDmJC6+qq6HlCb2um/8jnzPhcNv0mtwl77/JuyZ3e/lv11Q+Bw5+71oOz89x/25UxOML3DSPjDMsenEMa/yzZ5HcNlXsecHJ6pvNrtwMulo2zc7mbbudyAwAAAAAAAAAAAAAAAIBP7y86VZGfUH/eAAAAAElFTkSuQmCC' />
        <img className="h-16 ml-2" alt='youtube-img' src="https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6.jpg" />
        </div>

        <div className=' grid grid-cols-12  grid-rows-2 '>
          <div className='col-span-10 row-span-2 '>
            <input  value={searchQuery} onChange={
               e=>  setSearchQuery(e.target.value)
            }
             
            
            className='h-full w-full   rounded-s-full' placeholder=""/>
            </div>
            <div className='col-span-2 row-span-2 '>
            <button className='bg-slate-300  h-full w-full  rounded-e-full'>search</button>
            </div>

            
           {showSuggestion && searchQuery &&  (<div className='col-span-1 absolute top-28 h-1/2 w-1/3 ms-6 row-span-1 shadow-2xl bg-white'>
            <ul className='p-8'>
              {
                searchQueryData.map(searchResults=><li key={searchResults} className='p-3'>{searchResults}</li>)
              }
              
              
            </ul>
    </div>
           )
}
        </div>

        
       

        <div className='flex  justify-evenly'>
          <img onClick={
            ()=>{
              isLoginOrLogout===true?showLoginLogout(false):showLoginLogout(true)
              
            }
          }  className='h-10  mt-3' src="https://cdn-icons-png.flaticon.com/512/1946/1946429.png" />

        {isLoginOrLogout && <div className='absolute top-24 w-1/5'>
                <ul className='bg-slate-600  w-full flex justify-center border border-black'>
                  <li className='border border-black w-1/2'>Register</li>
                  <li className='border border-black w-1/2'>Sign up</li>
                </ul>
          </div>} 
        </div>

    </div>


    
  )
}

export default Head