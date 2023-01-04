import React, { FC } from "react";
import styles from "./index.module.css";
import { Text } from "../Text";
import { content } from "../../content";
import { IApartmentInfo } from "../../apartments";
import { EFonts } from "../../types";

interface IProps {
  selectedFlat: IApartmentInfo;
}

export const ExtraInfoMobile: FC<IProps> = ({ selectedFlat }) => {
  const lang = "rus";
  const localContent = content[lang];

  return (
    <div className={styles.container}>
      <Text
        text={content[lang].roomSelector.squareTitle}
        className={styles.bold}
      />
      <Text
        text={`${selectedFlat.info.square.toString()} ${
          content[lang].squareMeasurementUnit
        }`}
        className={styles.title}
      />
      <div className={styles.extraInfoContainer}>
        <Text
          text={content[lang].roomSelector.roomSize}
          className={styles.bold}
        />
        {selectedFlat.info.extraInfo.map((data) => (
          <div key={data.title} className={styles.extraInfo}>
            <Text
              // @ts-ignore
              text={`${localContent[data.title]} - `}
              fontFamily={EFonts.GILROY}
            />
            <Text text={data.value + localContent.squareMeasurementUnit} />
          </div>
        ))}
      </div>
    </div>
  );
};
