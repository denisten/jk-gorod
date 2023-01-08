import React, { FC } from "react";
import styles from "./index.module.css";
import { Button } from "../../components/Button";
import { Text } from "../../components/Text";
import { useIsMobile } from "../../utils/getIsMobile";
import { EBlocks, EFonts, ELang } from "../../types";
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
        <MobileSlideShow images={localContent.mobileBackground} />
      ) : (
        <SlideShow images={localContent.background} />
      )}
      <div className={styles.contentContainer}>
        {isMobile ? (
          <Text
            text={localContent.mobileTitle}
            className={styles.title}
            title
          />
        ) : null}
        <div className={styles.textContainer}>
          <div>
            <Text
              text={
                isMobile
                  ? localContent.mobileDescription
                  : localContent.description
              }
              className={styles.content}
            />
            {isMobile ? null : (
              <Text className={styles.gorod} text={localContent.title} title />
            )}
          </div>
        </div>
        <Button
          fontFamily={EFonts.Austin}
          text={localContent.button}
          className={styles.button}
          onClick={openModal}
          textClassName={isMobile ? styles.buttonTextMobile : undefined}
        />
      </div>
    </Element>
  );
};
