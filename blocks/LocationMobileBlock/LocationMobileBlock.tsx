import React, { FC } from "react";
import styles from "./index.module.css";
import { Text } from "../../components/Text";
import { content } from "../../content";
import { Map, Placemark, YMaps } from "@pbe/react-yandex-maps";
import { Element } from "react-scroll";
import { EBlocks, EFonts, ELang } from "../../types";
import ScrollAnimation from "react-animate-on-scroll";
import { Button } from "../../components/Button";

interface IProps {
  lang: ELang;
}

export const LocationMobileBlock: FC<IProps> = ({ lang }) => {
  const localContent = content[lang].locationBlock;
  return (
    <Element name={EBlocks.LOCATION} className={styles.container}>
      <ScrollAnimation animateIn="animate__zoomIn" animateOnce={true}>
        <YMaps>
          <Map
            defaultOptions={{ restrictMapArea: true, maxZoom: 15, minZoom: 15 }}
            state={{
              center: [41.312624, 69.329985],
              zoom: 19,
            }}
            className={styles.map}
          >
            <Placemark
              defaultGeometry={[41.31277, 69.327743]}
              geometry={[41.31277, 69.327743]}
            />
          </Map>
        </YMaps>
        <div className={styles.info}>
          <Text text={localContent.title} className={styles.title} title />
          <div className={styles.row}>
            <Text text={localContent.address} className={styles.infoText} />
          </div>
          <div className={styles.row}>
            <Text text={localContent.phone} className={styles.infoText} />
          </div>
          <div className={styles.row}>
            <Text text={localContent.mail} className={styles.infoText} />
          </div>
        </div>
      </ScrollAnimation>
    </Element>
  );
};
