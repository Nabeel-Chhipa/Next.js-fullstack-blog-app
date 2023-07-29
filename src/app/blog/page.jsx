import Image from "next/image";
import Link from "next/link";
import React from "react";
import style from "./page.module.css";
import imageOne from "../../../public/inner-blog-one.png";

async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to load data");
  }
  return res.json();
}

const Blog = async () => {
  const data = await getData();

  return (
    <div className={style.blogContainer}>
      {data.map((item) => (
          <Link href={{ pathname: `/blog/${item.id}` }} className={style.container}>
            <div className={style.imgContainer}>
              <Image
                src={imageOne}
                alt=""
                width={400}
                height={300}
                className={style.image}
              />
            </div>
            <div className={style.content}>
              <h1 className={style.title}>{item.title}</h1>
              <p className={style.desc}>{item.body}</p>
            </div>
          </Link>
      ))}
    </div>
  );
};

export default Blog;
