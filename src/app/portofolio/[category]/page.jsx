import React from 'react'

const Category = ({ params }) => {
    return (
        <main>

            <h1 className='py-3 text-xl'>{params.category}</h1>

            <section className='flex odd:flex-row-reverse gap-10 w-full my-16'>
                <div className='flex flex-col justify-center gap-5 h-96  w-1/2'>
                    <h1 className='text-3xl '>Creative Portofolio</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis ratione mollitia soluta odio, tempora, accusantium in ad maxime laboriosam aliquid hic doloribus temporibus error nulla earum necessitatibus eos alias nesciunt!</p>
                    <div>
                        <button className=' bg-black text-white px-4 py-3 transition-all ease-in-out duration-300 rounded-sm  hover:bg-cyan-500'>see more</button>
                    </div>
                </div>

                <div className='bg-teal-500 w-1/2'></div>
            </section>
            <section className='flex odd:flex-row-reverse gap-10 w-full my-16'>
                <div className='flex flex-col justify-center gap-5 h-96  w-1/2'>
                    <h1 className='text-3xl '>Creative Portofolio</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis ratione mollitia soluta odio, tempora, accusantium in ad maxime laboriosam aliquid hic doloribus temporibus error nulla earum necessitatibus eos alias nesciunt!</p>
                    <div>
                        <button className=' bg-black text-white px-4 py-3 transition-all ease-in-out duration-300 rounded-sm  hover:bg-cyan-500'>see more</button>
                    </div>
                </div>

                <div className='bg-teal-500 w-1/2'></div>
            </section>
            <section className='flex odd:flex-row-reverse gap-10 w-full my-16'>
                <div className='flex flex-col justify-center gap-5 h-96  w-1/2'>
                    <h1 className='text-3xl '>Creative Portofolio</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis ratione mollitia soluta odio, tempora, accusantium in ad maxime laboriosam aliquid hic doloribus temporibus error nulla earum necessitatibus eos alias nesciunt!</p>
                    <div>
                        <button className=' bg-black text-white px-4 py-3 transition-all ease-in-out duration-300 rounded-sm  hover:bg-cyan-500'>see more</button>
                    </div>
                </div>

                <div className='bg-teal-500 w-1/2'></div>
            </section>








        </main>
    )
}

export default Category