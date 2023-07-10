import React, { useEffect, useState } from 'react'
import { YOUTUBE_API_URL } from '../utils/constants'
import VedioCards from './VedioCards'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../utils/appSlice'
  

const VedioContainer = () => {
    const [vedios,setVedios]=useState([])
   

    const getVedios= async()=>{
        console.log(YOUTUBE_API_URL)
        const data=await fetch(YOUTUBE_API_URL)
        const json=await data.json()
        setVedios(json.items)
    }

    useEffect( ()=>{
        getVedios()
    },[])

 
if(vedios.length===0) return <h4>Loadin....</h4>

  return (
  
    <div className='grid grid-cols-4'>
      
        {vedios[0] && <VedioCards info={vedios[0]}/>}
    {vedios.map(vedio=> <Link to={"/watch?v="+ vedio.id} ><VedioCards key={vedio.id} info={vedio}/></Link>)}
    </div>
  )
}

export default VedioContainer