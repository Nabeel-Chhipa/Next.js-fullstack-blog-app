import Image from 'next/image'
import React from 'react'
import Button from '../../../../components/Button/Button'
import style from './page.module.css'
import { items } from './data'
import { notFound } from 'next/navigation'

const getPortfolio = (category) => {
  const data = items[category]
  if(data) {
    return data
  }
  return notFound()
}

const Category = ({params}) => {
  const data = getPortfolio(params.category)

  return (
    <div className={style.container}>
      <h1 className={style.cardTitle}>{params.category}</h1>
      {
        data.map(item => {
          return (
            <div className={style.item} key={item.id}>
              <div className={style.content}>
                <h1 className={style.title}>{item.title}</h1>
                <p className={style.desc}>{item.desc}</p>
                <Button text='See More' url='#' />
              </div>
              <div className={style.imgContainer}>
                <Image
                  src={item.image}
                  fill={true}
                  className={style.img}
                />
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default Category