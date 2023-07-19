import Image from 'next/image'
import React from 'react'
import style from './footer.module.css'
import FacebookIcon from '../../public/1.png'
import InstaIcon from '../../public/2.png'
import TwitterIcon from '../../public/3.png'
import YoutubeIcon from '../../public/4.png'

const Footer = () => {
  return (
    <div className={style.container}>
      <div>@2023 Blogs. All rights reserved.</div>
      <div className={style.social}>
        <Image src={FacebookIcon} width={15} height={15} className={style.icon} alt='Facebook Icon' />
        <Image src={InstaIcon} width={15} height={15} className={style.icon} alt='Instagram Icon' />
        <Image src={TwitterIcon} width={15} height={15} className={style.icon} alt='Twitter Icon' />
        <Image src={YoutubeIcon} width={15} height={15} className={style.icon} alt='Youtube Icon' />
      </div>
    </div>
  )
}

export default Footer