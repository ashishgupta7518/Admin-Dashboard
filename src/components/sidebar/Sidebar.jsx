import React from 'react'
import "./sidebar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import ViewListOutlinedIcon from '@mui/icons-material/ViewListOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import QueryStatsOutlinedIcon from '@mui/icons-material/QueryStatsOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import SettingsSystemDaydreamOutlinedIcon from '@mui/icons-material/SettingsSystemDaydreamOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { DarkModeContext } from '../../Context/darkModeContext';

const Sidebar = () => {
    const { dispatch } = useContext(DarkModeContext);
    return (
        <div className='sidebar'>
            <div className="top">
                <Link to="/home" style={{ textDecoration: "none" }}>
                    <span className='logo'>Asadmin</span>
                </Link >
            </div>

            <hr />
            <div className="center">
                <ul>
                    <p className="title">MAIN</p>
                    <li><DashboardIcon className='icon' /><span>Dashboard</span></li>
                    <p className="title">LISTS</p>

                </ul>
                <ul>
                    <Link to="/users" style={{ textDecoration: "none" }}>
                        <li><PersonIcon className='icon' /><span>Users</span></li>
                    </Link>
                </ul>
                <ul>
                    <Link to="/products" style={{ textDecoration: "none" }}>

                        <li><ProductionQuantityLimitsIcon className='icon' /><span>Products</span></li></Link>
                </ul>
                <ul>
                    <li><ViewListOutlinedIcon className='icon' /><span>Orders</span></li>
                    <p className="title">USEFULL</p>
                </ul>
                <ul>
                    <li><LocalShippingOutlinedIcon className='icon' /><span>Delivery</span></li>
                </ul>
                <ul>
                    <li><QueryStatsOutlinedIcon className='icon' /><span>Stats</span></li>
                </ul>
                <ul>
                    <li><NotificationsNoneOutlinedIcon className='icon' /><span>Notification</span></li>
                    <p className="title">SERVICE</p>
                </ul>
                <ul>
                    <li>< SettingsSystemDaydreamOutlinedIcon className='icon' /><span>System Health</span></li>
                </ul>
                <ul>
                    <li><PsychologyOutlinedIcon className='icon' /><span>Logs</span></li>
                </ul>
                <ul>
                    <li><SettingsOutlinedIcon className='icon' /><span>Settings</span>
                    </li>
                    <p className="title">USER</p>

                </ul>
                <ul>
                    <li><AccountCircleOutlinedIcon className='icon' /><span>Profile</span></li>
                </ul>
                <ul>
                    <li><LogoutOutlinedIcon className='icon' /><span>Logout</span></li>
                </ul>
            </div>
            <div className="bottom">
                <div className="colorOption" onClick={() => dispatch({ type: "LIGHT" })}></div>
                <div className="colorOption" onClick={() => dispatch({ type: "DARK" })}></div>

            </div>
        </div>
    )
}

export default Sidebar