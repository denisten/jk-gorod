import React from "react";
import styles from "./index.module.css";
import { EFonts, ELang } from "../../types";
import { content } from "../../content";
import { Text } from "../../components/Text";
import { Button } from "../../components/Button";

interface IProps {
  lang: ELang;
  openModal: () => void;
}

export const ContactMobileBlock: React.FC<IProps> = ({ lang, openModal }) => {
  const localContent = content[lang].locationBlock;
  return (
    <div className={styles.container}>
      <Text text={localContent.title} className={styles.title} title />
      <div className={styles.row}>
        <Text text={localContent.address} className={styles.infoText} />
      </div>
      <div className={styles.row}>
        <Text
          type="tel"
          text={localContent.phone}
          className={styles.infoText}
        />
      </div>
      <div className={styles.row}>
        <Text
          type="tel"
          text={localContent.extraPhone}
          className={styles.infoText}
        />
      </div>
      <div className={styles.row}>
        <Text
          type="mail"
          text={localContent.mail}
          className={styles.infoText}
        />
      </div>
      <Button
        text={localContent.buttonText}
        fontFamily={EFonts.Austin}
        onClick={openModal}
      />
    </div>
  );
};
