import React from "react";
import styles from "./index.module.css";
import { IFlatsData } from "../../apartments";
import { ELang } from "../../types";
import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { Text } from "../Text";
import { content } from "../../content";

interface IProps {
  flats: IFlatsData[];
  lang: ELang;
}

export const MobileFlatsSlider: React.FC<IProps> = ({ flats, lang }) => {
  const localContent = content[lang];
  const pow = (
    <sup>
      <Text text={"2"} className={styles.text} />
    </sup>
  );
  return (
    <div className={styles.container}>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        // autoplay={{
        //   delay: 1500,
        //   disableOnInteraction: false,
        // }}
        modules={[Autoplay, Navigation, Pagination]}
        className={styles.swiper}
        allowTouchMove={true}
        // onSlideChange={(e) => setImgId(e.activeIndex)}
      >
        {flats.map((flat) => (
          <SwiperSlide className={styles.slide}>
            <Image src={flat.img} alt="img" className={styles.img} />
            <div className={styles.description}>
              {/*<div className={styles.right} />*/}

              <Text
                text={`${flat.roomCount.toString()}-${
                  localContent.flatsSlider.flatsCount
                }`}
                title
                className={styles.title}
              />

              <div className={styles.row}>
                <Text
                  text={localContent.flatsSlider.apartmentDescription}
                  className={styles.text}
                />
                <div className={styles.row}>
                  <Text
                    text={`${flat.totalSquare.toString()} m`}
                    className={styles.text}
                  />
                  {pow}
                </div>
              </div>
              <ol className={styles.flatOl}>
                {flat.rooms.map((room) => (
                  <li>
                    <div className={styles.row}>
                      <Text
                        //@ts-ignore
                        text={localContent[room.title]}
                        className={styles.text}
                      />
                      <div className={styles.row}>
                        <Text
                          text={`${room.value.toString()} m`}
                          className={styles.text}
                        />
                        {pow}
                      </div>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
