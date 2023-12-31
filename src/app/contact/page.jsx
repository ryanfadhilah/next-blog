import React from 'react'
import Button from '@/components/button/Button'
const Contact = () => {
    return (
        <main className='flex flex-col items-center gap-20'>
            <h1 className='text-3xl font-semibold'>Let`s Keep in Touch</h1>

            <div className='grid lg:grid-cols-2  grid-cols-1 gap-20 w-5/6 '>
                <form className='grid grid-col-1 gap-5'>
                    <input className=' drop-shadow-md rounded-md px-6 py-5 ' type="text" placeholder='name' />
                    <input className=' drop-shadow-md rounded-md px-6 py-5' type="email" placeholder='email' />
                    <textarea className='drop-shadow-md rounded-md px-6 py-5' name="" id="" cols="30" rows="10" placeholder='message'></textarea>

                    {/* <Button text="weee anjeng keren bgt odi"></Button> */}
                    <button className='px-6 py-5 bg-black text-white rounded-md hover:bg-cyan-500 transition-all ease-in-out duration-300'>Send</button>
                </form>
                <section className='bg-teal-500 lg:flex hidden '></section>
            </div>

        </main>
    )
}

export default Contact