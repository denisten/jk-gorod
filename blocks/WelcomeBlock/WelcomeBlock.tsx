import React, { FC } from "react";
import styles from "./index.module.css";
import { Text } from "../../components/Text";
import { useIsMobile } from "../../utils/getIsMobile";
import { EBlocks, ELang } from "../../types";
import { content } from "../../content";
import { Element } from "react-scroll";
import { SlideShow } from "../../components/SlideShow";
import { MobileSlideShow } from "../../components/MobileSlideShow";

interface IProps {
  lang: ELang;
  openModal: () => void;
}

export const WelcomeBlock: FC<IProps> = ({ lang, openModal }) => {
  const isMobile = useIsMobile();
  const localContent = content[lang].welcomeBlock;
  return (
    <Element name={EBlocks.WELCOME} className={styles.container}>
      {isMobile ? (
        <MobileSlideShow images={localContent.background} />
      ) : (
        <SlideShow images={localContent.background} />
      )}
      <div className={styles.contentContainer}>
        <Text text={localContent.description} className={styles.content} />
        <div className={styles.button} onClick={openModal}>
          <Text text={localContent.button} className={styles.buttonText} />
        </div>
      </div>
    </Element>
  );
};
