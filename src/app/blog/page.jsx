import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import style from './page.module.css'
import imageOne from '../../../public/inner-blog-one.png'

const Blog = () => {
  return (
    <div className={style.blogContainer}>
      <Link href='/blog/testId' className={style.container}>
        <div className={style.imgContainer}>
          <Image
            src={imageOne}
            alt=''
            width={400}
            height={300}
            className={style.image}
          />
        </div>
        <div className={style.content}>
          <h1 className={style.title}>Test</h1>
          <p className={style.desc}>Description</p>
        </div>
      </Link>
      <Link href='/blog/testId' className={style.container}>
        <div className={style.imgContainer}>
          <Image
            src={imageOne}
            alt=''
            width={400}
            height={300}
            className={style.image}
          />
        </div>
        <div className={style.content}>
          <h1 className={style.title}>Test</h1>
          <p className={style.desc}>Description</p>
        </div>
      </Link>
      <Link href='/blog/testId' className={style.container}>
        <div className={style.imgContainer}>
          <Image
            src={imageOne}
            alt=''
            width={400}
            height={300}
            className={style.image}
          />
        </div>
        <div className={style.content}>
          <h1 className={style.title}>Test</h1>
          <p className={style.desc}>Description</p>
        </div>
      </Link>
    </div>
  )
}

export default Blog