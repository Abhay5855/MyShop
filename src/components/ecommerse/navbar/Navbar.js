import React from 'react'
import styled from 'styled-components'
import { BsFillCartFill } from 'react-icons/bs'
import { BsFillSuitHeartFill } from 'react-icons/bs'
import './navbar.css'
import { FaUserAlt } from 'react-icons/fa'
import Search from '../search/Search'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <Nav>
        <Link to='/landing'>
        <img
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="img"
          className='img'
        />
        </Link>
       

      <Search  className='search'/>

      <nav className="nav">
        <Link to="/favourite">
          <div className="heart">
            <BsFillSuitHeartFill style={{ fontSize: '1.2em', color : '#ffff' }} />
          </div>
        </Link>

        <Link to="/cart">
          <div className="cart">
            <BsFillCartFill style={{ fontSize: '1.2em', color : '#ffff'  }} />
          </div>
        </Link>
        <Link to="profile">
          <div className="user">
            <FaUserAlt style={{ fontSize: '1.2em' , color : '#ffff' }} />
          </div>
        </Link>
      </nav>

     
    </Nav>
  )
}

export default Navbar

const Nav = styled.div`
  background-color: #2D2E45;
  color: #fff;
  width: 100%;
  padding: 1.25rem 5rem;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-flow : row-wrap;
  height : 10vh;



  @media (max-width : 600px){

      justify-content : center;
  }

`
