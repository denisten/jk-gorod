import React, { FC } from "react";
import styles from "./index.module.css";
import { Map, YMaps } from "@pbe/react-yandex-maps";
import { Element } from "react-scroll";
import { EBlocks, ELang } from "../../types";
import ScrollAnimation from "react-animate-on-scroll";
import Image from "next/image";
import logoImg from "../LocationBlock/logo.png";

interface IProps {
  lang: ELang;
}

export const LocationMobileBlock: FC<IProps> = ({ lang }) => {
  return (
    <Element name={EBlocks.LOCATION} className={styles.container}>
      <ScrollAnimation animateIn="animate__zoomIn" animateOnce={true}>
        <YMaps>
          <Map
            options={{
              avoidFractionalZoom: true,
              restrictMapArea: true,
              maxZoom: 16,
              minZoom: 16,
            }}
            state={{
              center: [41.313725, 69.320305],
              zoom: 16,
            }}
            className={styles.map}
          >
            <Image src={logoImg} alt="logoImg" className={styles.mapIcon} />
          </Map>
        </YMaps>
      </ScrollAnimation>
    </Element>
  );
};
