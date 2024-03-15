import React from 'react'
import './sidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard';
import CreditCardOutlinedIcon from "@mui/icons-material/CreditCardOutlined";
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
//import Person3OutlinedIcon from "@mui/icons-material/Person3Outlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import ManageAccountsOutlinedIcon from "@mui/icons-material/ManageAccountsOutlined";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='top'>
        <Link to='/' style={{ textDecoration: "none" }}>
          <span className='logo'> ERP System </span>
        </Link>

      </div>
      <hr />

      <div className='bottom'>
        <ul>
          <p className='title'> MAIN</p>

          <Link to="/" style={{ textDecoration: "none" }}>
          <li>
            <DashboardIcon className='icon' />
            <span>Dashboard</span>
          </li>
          </Link>

          <p className='title'> LISTS</p>

          <Link to="/products" style={{ textDecoration: "none" }}>
            <li>
              <LocalGroceryStoreIcon className="icon" />
              <span>Products</span>
            </li>
          </Link>
          <Link to="/orders" style={{ textDecoration: "none" }}>
            <li>
              <CreditCardOutlinedIcon className="icon" />
              <span>Orders</span>
            </li>
          </Link>
          <Link to="/calendar" style={{ textDecoration: "none" }}>
            <li>
              <CalendarMonthOutlinedIcon className="icon" />
              <span>Calendar</span>
            </li>
          </Link>

          <p className='title'> USER INTERFACE
          </p>
          <li>
            <ManageAccountsOutlinedIcon className="icon" />
            <span>Profile</span>
          </li>

          <li>
            <SettingsOutlinedIcon className="icon" />
            <span>Settings</span>
          </li>
          <li>
            <ExitToAppOutlinedIcon className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar
