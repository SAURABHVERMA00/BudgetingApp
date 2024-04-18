import React from 'react'
import logoMark from '../assets/logoMark.svg'
import { Form, NavLink } from 'react-router-dom'

import {TrashIcon   } from '@heroicons/react/24/solid';
const NavBar = ({username}) => {
  return (
    <nav >
        <NavLink 
        to="/"
        aria-label="Go to home"
        >
            <img src={logoMark} alt="" height={30}/>
            <span>HomeBudget</span>
        </NavLink>


        {
            username && (
                <Form
                method='post'
                action='logout'
                onSubmit={(event)=>{
                    if(!confirm('Are you sure you want to logout?')){

                        event.preventDefault();
                    }
                }}
                >
                    <button className="btn btn--warning bg-blue-400 px-2 py-1" type="submit"><span>DeleteUser </span><TrashIcon width={20}/></button>

                </Form>
            )
        }
    </nav>
  )
}

export default NavBar