import React from 'react'
import Link from 'next/link'
const links = [
    {
        id: 1,
        title: "Ilustration",
        url: "/portofolio/ilustration"
    },
    {
        id: 2,
        title: "Website",
        url: "/portofolio/website"
    },
    {
        id: 3,
        title: "Application",
        url: "/portofolio/application"
    },

]
const Portofolio = () => {
    return (
        <main className='flex flex-col w-full'>
            <h2 className=' text-2xl py-10'>Choose Galery</h2>

            <div className='grid grid-cols-4 gap-16'>
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