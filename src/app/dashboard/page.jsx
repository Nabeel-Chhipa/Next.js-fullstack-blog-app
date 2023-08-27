'use client'
import React from 'react'
import style from './page.module.css'
import useSWR from 'swr'
import { useSession } from "next-auth/react"
import { useRouter } from 'next/navigation'
import Image from 'next/image'

const Dashboard = () => {

  const session = useSession()
  const router = useRouter()

  const fetcher = (...args) => fetch(...args).then(res => res.json())
  const { data, error, isLoading, mutate } = useSWR(`/api/posts?username=${session?.data?.user?.name}`, fetcher)
  console.log(data)
  if(session.status === 'loading') {
    return <p>Loading...</p>
  }
  if(session.status === 'unauthenticated') {
    router?.push('/dashboard/login')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const title = e.target[0].value
    const desc = e.target[1].value
    const img = e.target[2].value
    const content = e.target[3].value

    try{
      await fetch('/api/posts', {
        method: 'POST',
        body: JSON.stringify({
          title,
          desc,
          img,
          content,
          username: session.data.user.name
        })
      })
      mutate()
      e.target.reset();
    }
    catch(err) {
      console.log(err)
    }
  }

  const handleDelete = async (id) => {
    try{
      await fetch(`/api/posts/${id}`, {
        method: 'DELETE',
      });
      mutate();
    }
    catch(err) {
      console.log(err)
    }
  }

  if(session.status === 'authenticated') {
    return (
      <div className={style.container}>
        <div className={style.posts}>
          {isLoading ? 'Loading...' : data?.map(post => (
            <div className={style.post} key={post._id}>
              <div className={style.imgContainer}>
                <Image src={post.img} alt='' width={200} height={100} />
              </div>
              <h2 className={style.postTitle}>{post.title}</h2>
              <span className={style.delete} onClick={() => handleDelete(post._id)}>X</span>
            </div>
          ))}
        </div>
        <form className={style.new} onSubmit={handleSubmit}>
            <h1>Add New Post</h1>
            <input type="text" placeholder="Title" className={style.input} />
            <input type="text" placeholder="Desc" className={style.input} />
            <input type="text" placeholder="Image" className={style.input} />
            <textarea placeholder='Content' className={style.textarea} cols='30' rows='10'></textarea>
            <button className={style.button}>Send</button>
        </form>
      </div>
    )
  }

}

export default Dashboard