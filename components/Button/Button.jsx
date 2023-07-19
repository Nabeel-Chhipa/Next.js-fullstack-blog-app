import Link from 'next/link'
import React from 'react'
import style from './button.module.css'

const Button = ({text, url}) => {
  return (
    <Link href={url}>
        <button className={style.container}>{text}</button>
    </Link>
  )
}

export default Button