import React from 'react'

const Button = ({ text }) => {
    return (
        <button className=' bg-black text-pink-300 px-3 py-2 transition-all ease-in-out duration-300 rounded-sm  hover:bg-pink-300 hover:text-black h-fit w-fit'>{text}</button>
    )
}

export default Button