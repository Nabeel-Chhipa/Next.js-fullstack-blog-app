import Image from 'next/image'
import React from 'react'
import style from './page.module.css'
import BannerImage from '../../../public/about-banner.jpg'
import Button from '../../../components/Button/Button'

const About = () => {
  return (
    <div className={style.container}>
      <div className={style.imgContainer}>
        <Image
          src={BannerImage}
          fill={true}
          alt='About us banner image'
          className={style.img}
        />
        <div className={style.imgText}>
          <h1 className={style.imgTitle}>Digital Storytellers</h1>
          <h2 className={style.imgDesc}>Handcrafting award winning digital experiences</h2>
        </div>
      </div>
      <div className={style.textContainer}>
        <div className={style.item}>
          <h1 className={style.title}>Who Are We?</h1>
          <p className={style.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus deserunt deleniti ex, nisi unde atque.
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, eum tenetur. Rerum natus deserunt consectetur architecto minus laborum eveniet ab quo labore, veritatis nemo eum id laboriosam officia velit provident modi iure non tempore eaque quaerat quae eius voluptatum? Fuga.
          </p>
        </div>
        <div className={style.item}>
          <h1 className={style.title}>What We Do?</h1>
          <p className={style.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, eum tenetur. Rerum natus deserunt consectetur architecto minus laborum eveniet ab quo labore, veritatis nemo eum id laboriosam officia velit provident modi iure non tempore eaque quaerat quae eius voluptatum? Fuga.
            <br />
            <br />
            - Dynamic Websites
            <br />
            <br />
            - Fast and Handy Mobile Apps
          </p>
          <Button text='contact' url='/contact' />
        </div>
      </div>
    </div>
  )
}

export default About