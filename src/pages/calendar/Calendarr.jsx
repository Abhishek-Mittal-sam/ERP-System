import React from 'react'
import './calendar.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import Calendar from './Calendar'

const Calendarr = () => {
  return (
    <div className='calendars'>
       <Sidebar/>
<div className='calendarsContainer'>
    <Navbar/>
   
    <Calendar/>
    
    
</div>
    </div>

  )
}

export default Calendarr
