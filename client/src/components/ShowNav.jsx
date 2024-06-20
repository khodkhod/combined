// import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const ShowNav = () => {
    const showNavBar = [
        {
            name:'Home',
            path:'/'
        },

        {
            name:'Help',
            path:'/help'
        },

        {
            name:'Yam',
            path:'/yam'
        },
    ]

    const ShowLog =[
        {
            name: 'About',
            path:'about'
        },

        {
            name: 'Logout',
            path:'login'
        },
    ]
  return (
    <div>
        <div className='flex gap-10 ps-10 p-5 justify-between border shadow-lg'>
            <ul className='flex gap-10'>
                {
                    showNavBar.map((link) => (
                        <li key={link.name}>
                            <Link to={link.path}>{link.name}</Link>

                        </li>
                    ))
                }

            </ul>

        </div>

        <Outlet/>
    </div>
  )
}

export default ShowNav