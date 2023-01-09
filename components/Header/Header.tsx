import React, { FC, useEffect } from "react";
import styles from "./index.module.css";
// import phoneImg from "./phone.svg";
import logoImg from "./logo.png";
import Image from "next/image";
import cn from "classnames";
import { Text } from "../Text";
import { EFonts, ELang } from "../../types";
import { useIsMobile } from "../../utils/getIsMobile";
import menu from "./menu.svg";
import { Events, scroller } from "react-scroll";
import { content } from "../../content";
import { MobileMenu } from "../MobileMenu";

interface IProps {
  isSticky: boolean;
  callback: (flag: boolean) => void;
  isMenuOpen: boolean;
  lang: ELang;
  setLang: (lang: ELang) => void;
  openModal: () => void;
}

export const Header: FC<IProps> = ({
  isMenuOpen,
  callback,
  lang,
  setLang,
  openModal,
}) => {
  const localContent = content[lang].header;
  const isMobile = useIsMobile();

  const handleScroll = (e: Event) => {
    const header = document.getElementById("header-section");
    const scrollTop = window.scrollY;
    if (scrollTop >= 80) {
      header?.classList.add(styles.sticky);
    } else {
      header?.classList.remove(styles.sticky);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
  if (isMobile)
    return (
      <div className={styles.mobileContainer}>
        <MobileMenu
          isOpen={isMenuOpen}
          callback={() => callback(false)}
          lang={lang}
          setLang={setLang}
        />
        <Image src={menu} alt="menu" onClick={() => callback(true)} />
        <Image src={logoImg} alt="logo" height={82} width={82} />
      </div>
    );
  return (
    <div className={cn(styles.container)} id="header-section">
      <div className={styles.navbar}>
        {localContent.navigation.map(({ title, id }) => (
          <Text
            onClick={() => {
              scroller.scrollTo(id, {
                duration: 500,
                delay: 100,
                smooth: true,
                offset: -40,
              });
            }}
            key={id}
            className={styles.element}
            text={title}
            fontFamily={EFonts.KAZIMIR}
          />
        ))}
      </div>
      <div className={styles.flex}>
        <div className={styles.info}>
          <Text text={localContent.phone} className={styles.phone} type="tel" />
          <Text text={localContent.timetable} className={styles.infoContent} />
          <Text
            text={localContent.callText}
            className={styles.infoContent}
            onClick={openModal}
          />
        </div>
        <Image src={logoImg} alt="logo" className={styles.logo} />
      </div>
    </div>
  );
};
