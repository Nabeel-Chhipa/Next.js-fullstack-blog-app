import Link from 'next/link'
import React from 'react'
import style from './page.module.css'

const Portfolio = () => {
  return (
    <div className={style.container}>
      <h1 className={style.title}>Choose a gallery</h1>
      <div className={style.items}>
        <Link href='/portfolio/illustrations' className={style.item}>
          <span className={style.itemTitle}>Illustrations</span>
        </Link>
        <Link href='/portfolio/websites' className={style.item}>
          <span className={style.itemTitle}>Websites</span>
        </Link>
        <Link href='/portfolio/applications' className={style.item}>
          <span className={style.itemTitle}>Applications</span>
        </Link>
      </div>
    </div>
  )
}

export default Portfolio