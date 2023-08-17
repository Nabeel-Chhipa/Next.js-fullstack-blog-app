'use client'
import React from 'react'
import style from './page.module.css'
import useSWR from 'swr'
import { useSession } from "next-auth/react"

const Dashboard = () => {

  const session = useSession()
  console.log(session)

  const fetcher = (...args) => fetch(...args).then(res => res.json())
  const { data, error, isLoading } = useSWR('https://jsonplaceholder.typicode.com/posts', fetcher)
  console.log('data', data)

  return (
    <div className={style.container}>Dashboard Page</div>
  )
}

export default Dashboard