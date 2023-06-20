import React from 'react'

const About = () => {
    return (
        <main className='flex flex-col gap-10'>
            <div className=' h-64 bg-gray-300 flex items-end'>
                <div className='bg-emerald-400 m-5 py-4 px-3 text-white text-xl font-semibold'>
                    <h1 className=''>
                        Digital Stortellers
                    </h1>
                    <h2>Handcrafting awar winning digital experience</h2>
                </div>
            </div>

            <div className='grid lg:grid-cols-2 grid-cols-1 gap-10'>
                <section className=' grid grid-col-1 gap-5'>
                    <h1 className='text-2xl'>Who we are ?</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis deleniti repellendus hic ut eum ipsam mollitia vel quis sequi necessitatibus. Cum nostrum illum quisquam veniam eius? Hic similique maiores tempore.</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis deleniti repellendus hic ut eum ipsam mollitia vel quis sequi necessitatibus. Cum nostrum illum quisquam veniam eius? Hic similique maiores tempore.</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis deleniti repellendus hic ut eum ipsam mollitia vel quis sequi necessitatibus. Cum nostrum illum quisquam veniam eius? Hic similique maiores tempore.</p>
                </section>

                <section className=' grid grid-cols-1 gap-5'>
                    <h1 className='text-2xl'>What we do ?</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis deleniti repellendus hic ut eum ipsam mollitia vel quis sequi necessitatibus. Cum nostrum illum quisquam veniam eius? Hic similique maiores tempore.</p>
                    <ul>
                        <li>Creative Ilurtration</li>
                        <li>Dynamic Website</li>
                        <li>Fast and Handy Mobile Apps</li>
                    </ul>
                    <div className=''>
                        <button className='px-3 p-2 bg-black text-white transition-all ease-in-out duration-300  hover:bg-cyan-500'>Contact</button>
                    </div>
                </section>
            </div>

        </main>
    )
}

export default About