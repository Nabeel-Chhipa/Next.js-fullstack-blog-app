import Image from "next/image";
import React from "react";
import styles from "./page.module.css";
import imageOne from '../../../../public/inner-blog-one.png'

const BlogPost = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h1>
          <p className={styles.desc}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut aliquam neque nobis architecto dolores at quibusdam et minima, accusamus, iusto corrupti enim mollitia explicabo, a iste. Nobis dolores aspernatur, aperiam magnam aliquam et sunt modi similique consectetur quo quaerat.</p>
          <div className={styles.author}>
            <Image
              src={imageOne}
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>Lorem, ipsum.</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src={imageOne} alt="" fill={true} className={styles.image} />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima mollitia iure delectus labore. Unde similique eos, porro autem assumenda odit illum enim fugiat? Laborum incidunt officia, rerum quasi dignissimos esse optio repudiandae dolorem quas exercitationem sunt. Officia impedit vitae maiores.</p>
      </div>
    </div>
  );
};

export default BlogPost;
