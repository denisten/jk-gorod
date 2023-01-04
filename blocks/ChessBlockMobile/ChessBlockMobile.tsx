import React, { FC, useState } from "react";
import styles from "./index.module.css";
import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import cn from "classnames";
import Image from "next/image";
import { content } from "../../content";
import { Element } from "react-scroll";
import { EBlocks, ELang } from "../../types";
import { Text } from "../../components/Text";
interface IProps {
  lang: ELang;
}

export const ChessBlockMobile: FC<IProps> = ({ lang }) => {
  const data = content[lang].chessBlock;
  const [imgId, setImgId] = useState(0);
  return (
    <Element name={EBlocks.CHESS} className={styles.container}>
      <Text
        title
        text={content[lang].chessBlock.title}
        className={styles.blockTitle}
      />
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        navigation={true}
        // autoplay={{
        //   delay: 1500,
        //   disableOnInteraction: false,
        // }}
        modules={[Autoplay, Navigation, Pagination]}
        className={styles.swiper}
        allowTouchMove={true}
        onSlideChange={(e) => setImgId(e.activeIndex)}
      >
        {data.content.map((el, id) => (
          <SwiperSlide className={cn(styles.swiperSlide)} key={id}>
            <div>
              <Image
                className={styles.image}
                src={el.mobileImg}
                alt="apartment img"
              />
              <div
                className={styles.slideText}
                // style={{ background: "green" }}

                // style={{ backgroundImage: `url(${el.img.src})` }}
              >
                <Text className={styles.title} title text={el.title} />
                <Text className={styles.text} text={el.description} />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/*<Animated*/}
      {/*  isVisible={true}*/}
      {/*  animationIn="bounceInLeft"*/}
      {/*  animationOut="bounceInRight"*/}
      {/*  animationInDuration={2}*/}
      {/*  className={cn(styles.textContent)}*/}
      {/*>*/}
      {/*  <div className={styles.title}>hello its block</div>*/}
      {/*</Animated>*/}
    </Element>
  );
};
