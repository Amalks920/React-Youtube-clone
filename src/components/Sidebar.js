import React from 'react'
import { useSelector } from 'react-redux'
import store from '../utils/store'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  const isMenuOpen=useSelector(store=>store.app.isMenuOpen);
  if(!isMenuOpen) return null
  

  return (
    <div className='w-1/6 border pt-16 '>
      <ul className='border-b-2'>
        <Link to="/"><li className=' p-3 text-center hover:border hover:bg-slate-100'>Home</li></Link>
        <li className=' p-3 text-center hover:border hover:bg-slate-100'>Shorts</li>
        <li className=' p-3 text-center hover:border hover:bg-slate-100'>Subscriptions</li>
      </ul>

      <ul className='border-b-2'>
        <li className=' p-3 text-center hover:border hover:bg-slate-100'>Library</li>
        <li className=' p-3 text-center hover:border hover:bg-slate-100'>History</li>
      </ul>
      
      <ul className='border-b-2 mt-6'>
      <h1 className='ps-12'>Explore</h1>
        <li className=' p-3 text-center hover:border hover:bg-slate-100'>Library</li>
        <li className=' p-3 text-center hover:border hover:bg-slate-100'>History</li>
      </ul>
    </div>
  )
}

export default Sidebar