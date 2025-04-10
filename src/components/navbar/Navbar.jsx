import React from 'react'
import "./navbar.scss"
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined';
import { useContext } from 'react';
import { DarkModeContext } from '../../Context/darkModeContext';
import { useNavigate } from 'react-router-dom'

import ashishImg from '../../img/ashish.png'

const Navbar = () => {

  const users = JSON.parse(localStorage.getItem('user'));

  const navigate = useNavigate()

  const logout = () => {
    localStorage.clear('users')
    navigate('/login')
  }



  const { dispatch } = useContext(DarkModeContext);
  // get user from local storage 
  const user = JSON.parse(localStorage.getItem('user'));
  return (
    <div className='navbar'>
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder='Search....' />
          <SearchOutlinedIcon />
        </div>

        <div className="items">
          <div className="item"><LanguageOutlinedIcon className='icon' /> English</div>
          <div className="item" onClick={() => dispatch({ type: "TOGGLE" })}><DarkModeOutlinedIcon className='icon' /> </div>
          <div className="item"><FullscreenExitOutlinedIcon className='icon' /> </div>
          <div className="item"><NotificationsNoneOutlinedIcon className='icon' /><div className="counter">5</div> </div>
          <div className="item"><ChatBubbleOutlineOutlinedIcon className='icon' /> <div className="counter">1</div></div>
          <div className="item"><ListOutlinedIcon className='icon' /> </div>
          <div className="item" onClick={logout}><img src={ashishImg} alt="" className='avatar' /> </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar