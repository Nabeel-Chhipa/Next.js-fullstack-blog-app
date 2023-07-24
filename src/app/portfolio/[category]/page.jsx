import Image from 'next/image'
import React from 'react'
import Button from '../../../../components/Button/Button'
import style from './page.module.css'
import illustrationsImageOne from '../../../../public/illustrations-inner-one.jpg'

const Category = ({params}) => {
  return (
    <div className={style.container}>
      <h1 className={style.cardTitle}>{params.category}</h1>
      <div className={style.item}>
        <div className={style.content}>
          <h1 className={style.title}>Creative Portfolio</h1>
          <p className={style.desc}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam, repellendus cum voluptates laboriosam ad aut! Sit porro provident voluptatibus accusamus error quasi animi non facere ad officia? Tempora, aut molestiae.</p>
          <Button text='See More' url='#' />
        </div>
        <div className={style.imgContainer}>
          <Image
            src={illustrationsImageOne}
            fill={true}
            className={style.img}
          />
        </div>
      </div>
      <div className={style.item}>
        <div className={style.content}>
          <h1 className={style.title}>Creative Portfolio</h1>
          <p className={style.desc}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam, repellendus cum voluptates laboriosam ad aut! Sit porro provident voluptatibus accusamus error quasi animi non facere ad officia? Tempora, aut molestiae.</p>
          <Button text='See More' url='#' />
        </div>
        <div className={style.imgContainer}>
          <Image
            src={illustrationsImageOne}
            fill={true}
            className={style.img}
          />
        </div>
      </div>
      <div className={style.item}>
        <div className={style.content}>
          <h1 className={style.title}>Creative Portfolio</h1>
          <p className={style.desc}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam, repellendus cum voluptates laboriosam ad aut! Sit porro provident voluptatibus accusamus error quasi animi non facere ad officia? Tempora, aut molestiae.</p>
          <Button text='See More' url='#' />
        </div>
        <div className={style.imgContainer}>
          <Image
            src={illustrationsImageOne}
            fill={true}
            className={style.img}
          />
        </div>
      </div>
    </div>
  )
}

export default Category