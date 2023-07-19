import style from "./page.module.css";
import HeroImage from "../../public/hero.png";
import Image from "next/image";

export default function Home() {
  return (
    <div className={style.container}>
      <div className={style.item}>
        <h1 className={style.title}>Better design for your digital products.</h1>
        <p className={style.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis itaque porro voluptates quisquam asperiores laborum?</p>
        <button className={style.button}>See Our Works</button>
      </div>
      <div className={style.item}>
        <Image src={HeroImage} alt="Hero Image" className={style.img} />
      </div>
    </div>
  );
}
