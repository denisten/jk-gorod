import React, { FC } from "react";
import styles from "./index.module.css";
import cn from "classnames";
import { EFonts } from "../../types";
import { useIsMobile } from "../../utils/getIsMobile";

interface IProps {
  text: string;
  title?: boolean;
  className?: string;
  fontSize?: string;
  fontWeight?: string;
  fontFamily?: EFonts;
  onClick?: () => void;
}

export const Text: FC<IProps> = ({
  title = false,
  text,
  className,
  fontSize,
  fontWeight,
  fontFamily = "Austin",
  onClick,
}) => {
  return (
    <div
      className={cn(className, styles.container, {
        [styles.gilroy]: fontFamily === EFonts.GILROY,
        [styles.title]: title,
      })}
      style={{ fontSize, fontWeight }}
      onClick={onClick}
    >
      {text}
    </div>
  );
};
