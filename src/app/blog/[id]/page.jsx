
import { notFound } from 'next/navigation'

const getData = async (id) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        cache: "no-store"
    })
    if (!res.ok) {
        return notFound()
    }
    return res.json()
}


const Post = async ({ params }) => {

    const data = await getData(params.id)

    return (
        <div>BlogUser
            <div>{data.userId}</div>
            <div>{data.id}</div>
            <div>{data.title}</div>
            <div>{data.body}</div>
        </div>
    )
}

export default Post

