import Image from 'next/image'
import React from 'react'
import style from './page.module.css'
import ContactImage from '../../../public/contact.png'
import Button from '../../../components/Button/Button'

const Conact = () => {
  return (
    <div className={style.container}>
      <h1 className={style.title}>Let's keep in Touch</h1>
      <div className={style.content}>
        <div className={style.imgContainer}>
          <Image
            src={ContactImage}
            alt='Contact side image'
            fill={true}
            className={style.image}
          />
        </div>
        <form className={style.form}>
          <input type="text" placeholder='name' className={style.input} />
          <input type="email" placeholder='email' className={style.input} />
          <textarea placeholder='message' cols="30" rows="10" className={style.textArea}></textarea>
          <Button text='Send' url='#' />
        </form>
      </div>
    </div>
  )
}

export default Conact