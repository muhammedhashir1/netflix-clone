import React from 'react'
import "./NavBar.css"
function NavBar() {
  return (
    <div className="navbar">
        <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="netflix logo" />
        <ul className='navmenu-left' >
          <li><a className='navhome'>Home</a></li>
          <li><a>TV Shows</a></li>
          <li><a>Movies</a></li>
          <li><a>New and Popular</a></li>
          <li><a>My List</a></li>
        </ul>
        <ul className="navmenu-right">
        <li><a href=""><i className='fafa' class="fa fa-search fa-lg" aria-hidden="true"></i></a></li>
        <li><a href="">CHILDREN</a></li>
        <li><a href=""><i class="fa fa-gift" aria-hidden="true"></i></a></li>
        <li><a href=""><i class="fa fa-bell" aria-hidden="true"></i></a></li>
        <li className='navavatar'><a href=""><img className="avatar" src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="Avatar logo" /></a></li>
        <li><a href=""><i class="fa fa-caret-down" aria-hidden="true"></i></a></li>
        </ul>
        
    </div>
  )
}

export default NavBar