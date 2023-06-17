
import React from 'react'
import Image from 'next/image'
import { AiFillGithub, AiFillLinkedin, AiFillTwitterSquare } from 'react-icons/ai'


const Footer = () => {
    return (
        <footer className='flex justify-between py-10'>
            <div>
                ©2023 Name. All rights and reserved</div>
            <div className='flex  text-3xl gap-2'>
                <AiFillLinkedin className=' hover:text-teal-500 transition-all  ease-in-out duration-200'></AiFillLinkedin>
                <AiFillGithub className=' hover:text-teal-500 transition-all  ease-in-out duration-200'></AiFillGithub>
                <AiFillTwitterSquare className=' hover:text-teal-500 transition-all  ease-in-out duration-200'></AiFillTwitterSquare>
            </div>
        </footer>
    )
}

export default Footer