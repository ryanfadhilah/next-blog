"use client"
import Link from 'next/link'
import React from 'react'
import { BsFillMoonStarsFill } from 'react-icons/bs'


const links = [
    {
        id: 1,
        title: "Portofolio",
        url: "/portofolio"
    },
    {
        id: 2,
        title: "Blog",
        url: "/blog"
    },
    {
        id: 3,
        title: "About",
        url: "/about"
    },
    {
        id: 4,
        title: "Contact",
        url: "/contact"
    },
    // {
    //     id: 6,
    //     title: "Dashboard",
    //     url: "/dashboard"
    // },
]

const Navbar = () => {
    return (
        <nav className='py-10 w-full flex justify-between items-center'>
            {/* 1 */}
            <div className=' hidden lg:flex'>
                <p className=' text-2xl '>
                    Logo
                </p>
            </div>

            {/* 2 */}
            <div className='flex justify-center w-full gap-4 lg:w-auto items-center'>
                <BsFillMoonStarsFill className='font-semibold hover:text-teal-500 transition-all  ease-in-out duration-200'></BsFillMoonStarsFill>
                {/* <Link key="1" href="/contact"> contact </Link> */}
                {links.map(link => {
                    return <Link key={link.id} href={link.url} className=' font-semibold hover:text-teal-500 transition-all  ease-in-out duration-200'>{link.title}</Link>
                })}
                <button onClick={() => { }} className=' bg-black text-white px-3 py-2 transition-all ease-in-out duration-300 rounded-sm  hover:bg-cyan-500'>Logout</button>
            </div>
        </nav>
    )
}

export default Navbar
