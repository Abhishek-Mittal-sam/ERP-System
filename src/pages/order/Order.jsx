import React from 'react'
import './order.scss'
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar"
import Orderdatatable from '../../components/orderdatatable/Orderdatatable'


const Order = () => {
  return (
    <div className='home'>
    <Sidebar />
    <div className='homeContainer'>
      <Navbar />


    <div className='listContainer'>
        
        
      
        < Orderdatatable/>

      
    </div>

    </div>
    </div>
  )
}

export default Order
