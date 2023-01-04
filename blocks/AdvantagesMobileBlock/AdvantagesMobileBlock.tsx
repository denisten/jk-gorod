import React from "react";
import styles from "./index.module.css";
import { ELang } from "../../types";
import { content } from "../../content";
import { Text } from "../../components/Text";
import Image from "next/image";

interface IProps {
  lang: ELang;
}

export const AdvantagesMobileBlock: React.FC<IProps> = ({ lang }) => {
  const localContent = content[lang].advantagesBlock;
  return (
    <div className={styles.container}>
      {localContent.map((advantage) => (
        <div className={styles.advantageContainer}>
          <Text text={advantage.title} className={styles.title} title />
          <Image src={advantage.image} className={styles.img} alt="img" />
          <Text text={advantage.description} className={styles.description} />
        </div>
      ))}
    </div>
  );
};
