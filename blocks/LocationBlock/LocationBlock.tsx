import React, { FC } from "react";
import styles from "./index.module.css";
import { Text } from "../../components/Text";
import { content } from "../../content";
import { Map, Placemark, YMaps } from "@pbe/react-yandex-maps";
import Image from "next/image";
import locationIcon from "./location.svg";
import { Element } from "react-scroll";
import { EBlocks, ELang } from "../../types";
import ScrollAnimation from "react-animate-on-scroll";

interface IProps {
  lang: ELang;
}

export const LocationBlock: FC<IProps> = ({ lang }) => {
  const localContent = content[lang].locationBlock;
  return (
    <Element name={EBlocks.LOCATION} className={styles.container}>
      <ScrollAnimation animateIn="animate__zoomIn" animateOnce={true}>
        <YMaps>
          <Map
            defaultOptions={{ restrictMapArea: true, maxZoom: 15, minZoom: 15 }}
            state={{
              center: [41.320159, 69.274404],
              zoom: 15,
            }}
            className={styles.map}
          >
            <Placemark
              defaultGeometry={[41.320159, 69.274404]}
              geometry={[41.320159, 69.274404]}
            />
          </Map>
        </YMaps>
        <div className={styles.info}>
          <Text text={localContent.title} className={styles.title} title />
          <div className={styles.row}>
            <Image
              src={localContent.locationImg}
              className={styles.icon}
              alt="locationImg"
            />
            <Text text={localContent.address} className={styles.infoText} />
          </div>
          <div className={styles.row}>
            <Image
              src={localContent.phoneImg}
              className={styles.icon}
              alt="locationImg"
            />
            <Text text={localContent.phone} className={styles.infoText} />
          </div>
          <div className={styles.row}>
            <Image
              src={localContent.mailImg}
              className={styles.icon}
              alt="locationImg"
            />
            <Text text={localContent.mail} className={styles.infoText} />
          </div>
          <div className={styles.row}>
            <Image
              src={localContent.websiteImg}
              className={styles.icon}
              alt="locationImg"
            />
            <Text text={localContent.website} className={styles.infoText} />
          </div>
          <div className={styles.row}>
            <Image
              src={localContent.telegramImg}
              className={styles.icon}
              alt="locationImg"
            />
            <Text text={localContent.telegram} className={styles.infoText} />
          </div>
        </div>
      </ScrollAnimation>
    </Element>
  );
};
