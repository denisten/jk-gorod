import React, { FC } from "react";
import styles from "./index.module.css";
import { Fade, Zoom } from "react-slideshow-image";
import Image, { StaticImageData } from "next/image";
import cn from "classnames";
import "react-slideshow-image/dist/styles.css";

interface IProps {
  images: StaticImageData[];
}

export const SlideShow: FC<IProps> = ({ images }) => {
  return (
    <div className={styles.container}>
      <Fade autoplay={true} duration={2000} arrows={false}>
        {images.map((img, index) => {
          return (
            <div key={index} className={styles.slide}>
              <Image alt="1" src={img} fill />
            </div>
          );
        })}
      </Fade>
    </div>
  );
};
