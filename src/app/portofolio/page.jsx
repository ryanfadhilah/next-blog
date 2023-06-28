import React from 'react'
import Link from 'next/link'
const links = [
    {
        id: 1,
        title: "Ilustrations",
        url: "/portofolio/illustrations"
    },
    {
        id: 2,
        title: "Websites",
        url: "/portofolio/websites"
    },
    {
        id: 3,
        title: "Applications",
        url: "/portofolio/applications"
    },

]
const Portofolio = () => {
    return (
        <main className='flex flex-col w-full'>
            <h2 className=' text-2xl py-10'>Choose Galery</h2>

            <div className='grid lg:grid-cols-4 grid-cols-1 gap-16'>
                {links.map((v, i, a) => {
                    return <Link key={v.id} href={v.url} className='bg-teal-500 h-96 flex justify-end items-end'>
                        <section className='p-5 text-3xl font-bold text-white'>{v.title}</section>
                    </Link>
                })}
            </div>
        </main >
    )
}

export default Portofolio