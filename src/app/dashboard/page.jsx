"use client"
import { notFound } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import useSWR from 'swr'




const Dashboard = () => {

    // const [data, setData] = useState([])
    // const [error, setError] = useState(false)
    // const [loading, setLoading] = useState(false)

    // useEffect(() => {
    //     async function getData() {
    //         setLoading(true)
    //         setError(false)

    //         const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
    //             cache: 'no-store'
    //         })
    //         if (!res.ok) {
    //             setLoading(false)
    //             setError(true)
    //             return notFound()
    //         }
    //         setLoading(false)
    //         setError(false)
    //         return res.json()
    //     }
    // })

    const fetcher = (...args) => fetch(...args).then(res => res.json())

    const { data, error, isLoading } = useSWR('https://jsonplaceholder.typicode.com/posts', fetcher)

    return (
        <div>Dashboard</div>
    )
}

export default Dashboard