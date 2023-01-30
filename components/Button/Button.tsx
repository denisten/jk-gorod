import React from "react";
import styles from "./index.module.css";
import cn from "classnames";
import { Text } from "../Text";
import { EFonts } from "../../types";

interface IProps {
  text: string;
  className?: string;
  textClassName?: string;
  fontFamily: EFonts;
  onClick: () => void;
  title?: boolean;
}

export const Button: React.FC<IProps> = ({
  text,
  className,
  textClassName,
  fontFamily,
  // fontSize,
  onClick,
  title,
}) => {
  return (
    <div className={cn(className, styles.container)} onClick={onClick}>
      <Text
        // fontSize={fontSize}
        className={cn(textClassName, styles.text)}
        text={text}
        title={title}
        fontFamily={fontFamily}
      />
    </div>
  );
};
