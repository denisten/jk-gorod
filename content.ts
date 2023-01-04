import constructionImg from "./images/chessBlock/construction.png";
import noCarsInsideImg from "./images/chessBlock/noCarsInside.png";
import businessImg from "./images/chessBlock/business.png";
import constructionMobileImg from "./images/chessBlockMobile/construction.png";
import noCarsInsideMobileImg from "./images/chessBlockMobile/noCarsInside.png";
import businessMobileImg from "./images/chessBlockMobile/business.png";
import phoneSVG from "./images/locationBlock/phone.svg";
import websiteSVG from "./images/locationBlock/website.svg";
import mailSVG from "./images/locationBlock/mail.svg";
import advantageImg1 from "./images/advantagesBlock/1.png";
import advantageImg2 from "./images/advantagesBlock/2.png";
import advantageImg3 from "./images/advantagesBlock/3.png";
import locationSvg from "./images/locationBlock/locationPoing.svg";
import telegramSVG from "./images/locationBlock/telegram.svg";
import welcomeBackground from "./images/welcomeBlock/background.webp";
import welcomeMobileBackground from "./images/welcomeBlock/backgroundMobile.webp";
import { EBlocks } from "./types";
export const content = {
  uzb: {
    squareMeasurementUnit: "кв.м",
    priceInUzb: "млн. сум",
    balcony: "Балкон",
    kitchen: "Кухня",
    lounge: "Гостиная",
    toilet: "Санузел",
    hall: "Холл",
    bedroom: "Спальня",
    locationInfoBlock: {
      title: "РАСПОЛОЖЕНИЕ ЖК GOROD",
      description:
        "Обеспечивает доступ к развитой инфраструктуре — все необходимые для " +
        "комфортной жизни локации в пешей доступности: рынок, продовольственные сетевые " +
        "маркеты, школы, детские сады, медицинские клиники, аптеки и общественный транспорт",
    },
    callMeBackModal: {
      title: "ОСТАВИТЬ ЗАЯВКУ!",
      description: "Оставьте свой номер, и мы перезвоним Вам.",
      namePlaceholder: "Имя",
      phonePlaceholder: "Номер телефона",
      buttonText: "ЖДУ ЗВОНКА",
    },
    header: [
      { title: "Kompleks haqida", id: EBlocks.ABOUT },
      { title: "Foyda", id: EBlocks.ADVANTAGES },
      { title: "Bloklar", id: EBlocks.ROOM_SELECTOR },
      { title: "Galereya", id: EBlocks.GALLERY },
      { title: "Qurilish jarayoni", id: EBlocks.BUILDINGS },
      { title: "Joylashuv", id: EBlocks.LOCATION },
    ],
    welcomeBlock: {
      background: welcomeBackground,
      mobileBackground: welcomeMobileBackground,
      description:
        "Выберите свой крепкий дом для крепкой семьи в одном из 13 блоков жилого комплекса",
      button: "Оставить заявку",
      title: "GOROD!",
      mobileTitle: "GOROD",
      mobileDescription: "Крепкий дом для крепкой семьи",
      menu: "МЕНЮ",
    },
    aboutBlock: {
      title: "О КОМПЛЕКСЕ",
      description:
        "На территории ЖК представлены 6, 8 и 10-этажные жилые дома с просторными террасами и балконами. Квартиры имеют площадь от 43 до 184 квадр" +
        "атных метров. Колонно-ригельная конструкция наших домов позволяет выполнить любую планировку квартиры, а стены из жжёного кирпича обеспечат " +
        "высокий уровень шумоизоляции и комфортный микроклимат в вашей квартире круглый год. ",
      advantages: [
        { title: "Планировок", count: "19" },
        { title: "Парковочных мест", count: "114" },
        { title: "Квартир", count: "87" },
      ],
      button: "Подробнее",
    },
    advantagesBlock: [
      {
        title: "МЕЖДУНАРОДНЫЕ СТАНДАРТЫ СТРОИТЕЛЬСТВА",
        description:
          "Колонно-ригельная конструкция наших домов позволяет выполнить любую планировку квартиры, а стены из жжёного" +
          " кирпича обеспечат высокий уровень шумоизоляции и комфортный микроклимат в вашей квартире круглый год.",
        image: advantageImg1,
      },
      {
        title: "ОЗЕЛЕНЕННЫЙ ДВОР",
        description:
          "Колонно-ригельная конструкция наших домов позволяет выполнить любую планировку квартиры, а стены из жжёного" +
          " кирпича обеспечат высокий уровень шумоизоляции и комфортный микроклимат в вашей квартире круглый год.",
        image: advantageImg2,
      },
      {
        title: "ТОРГОВАЯ ЗОНА",
        description:
          "Колонно-ригельная конструкция наших домов позволяет выполнить любую планировку квартиры, а стены из жжёного" +
          " кирпича обеспечат высокий уровень шумоизоляции и комфортный микроклимат в вашей квартире круглый год.",
        image: advantageImg3,
      },
    ],
    chessBlock: {
      title: "ПРЕИМУЩЕСТВА",
      content: [
        {
          title: "Конструкция",
          description:
            "Колонно-ригельная конструкция наших домов позволяет выполнить любую планировку квартиры, а стены из жжёного кирпича обеспечат высокий уровень шумоизоляции и комфортный микроклимат в вашей квартире круглый год.",
          img: constructionImg,
          mobileImg: constructionMobileImg,
        },
        {
          title: "Двор без машин",
          description:
            "Подземный паркинг позволит не переживать за размещение вашего авто и обеспечит комфортную и безопасную зону для прогулок с детьми в уютных зеленых дворах с многофункциональными игровыми площадками.",
          img: noCarsInsideImg,
          mobileImg: noCarsInsideMobileImg,
        },
        {
          title: "Бизнес",
          description:
            "ЖК GOROD также предлагает помещения для коммерческих объектов на первом этаже — отличное решение для бизнеса, ведь здесь вас ожидает оживленный район с большим числом потенциальных потребителей услуг.",
          img: businessImg,
          mobileImg: businessMobileImg,
        },
      ],
    },
    flatsSlider: {
      block: "Блок",
      title: "БЛОКИ И ПЛАНИРОВКА",
      flatsCount: "комнатная",
      roomCountText: "Количество комнат",
      schemaTitle: "Доступные планировки",
      schemaTitleMobile: "Планировки",
      apartmentDescription: "Общая площадь",
      cost: "Стоимость",
      roomSize: "Размеры комнат",
      squareTitle: "Общая площадь",
      book: "Забронировать",
    },
    galleryBlock: {
      title: "ГАЛЕРЕЯ",
    },
    buildingStepsBlock: {
      title: "ХОД СТРОИТЕЛЬСТВА",
    },
    locationBlock: {
      title: "ЛОКАЦИЯ",
      address: "Ташкент, Яшнабадский р-н, Мавлоно Ризови, 2",
      locationImg: locationSvg,
      phoneImg: phoneSVG,
      phone: "+998 90 123 45 67",
      mailImg: mailSVG,
      mail: "test@mail.uz",
      websiteImg: websiteSVG,
      website: "www.website.uz",
      telegramImg: telegramSVG,
      telegram: "@telegram",
    },
    footerBlock: {
      navigation: [
        { title: "О комплексе", id: EBlocks.WELCOME },
        { title: "Преимущества", id: EBlocks.ADVANTAGES },
        { title: "Блоки", id: EBlocks.ROOM_SELECTOR },
        { title: "Галерея", id: EBlocks.GALLERY },
        // { title: "Ход строительства", id: EBlocks.BUILDINGS },
        { title: "Локация", id: EBlocks.LOCATION },
      ],
    },
  },
  rus: {
    squareMeasurementUnit: "кв.м",
    priceInUzb: "млн. сум",
    balcony: "Балкон",
    kitchen: "Кухня",
    lounge: "Гостиная",
    toilet: "Санузел",
    hall: "Холл",
    bedroom: "Спальня",
    locationInfoBlock: {
      title: "РАСПОЛОЖЕНИЕ ЖК GOROD",
      description:
        "Обеспечивает доступ к развитой инфраструктуре — все необходимые для " +
        "комфортной жизни локации в пешей доступности: рынок, продовольственные сетевые " +
        "маркеты, школы, детские сады, медицинские клиники, аптеки и общественный транспорт",
    },
    callMeBackModal: {
      title: "ОСТАВИТЬ ЗАЯВКУ!",
      description: "Оставьте свой номер, и мы перезвоним Вам.",
      namePlaceholder: "Имя",
      phonePlaceholder: "Номер телефона",
      buttonText: "ЖДУ ЗВОНКА",
    },
    header: [
      { title: "О комплексе", id: EBlocks.ABOUT },
      { title: "Преимущества", id: EBlocks.CHESS },
      { title: "Блоки", id: EBlocks.ROOM_SELECTOR },
      { title: "Галерея", id: EBlocks.GALLERY },
      // { title: "Ход строительства", id: EBlocks.BUILDINGS },
      { title: "Локация", id: EBlocks.LOCATION },
    ],
    welcomeBlock: {
      background: welcomeBackground,
      mobileBackground: welcomeMobileBackground,
      description:
        "Выберите свой крепкий дом для крепкой семьи в одном из 13 блоков жилого комплекса",
      button: "Оставить заявку",
      title: "GOROD!",
      mobileTitle: "GOROD",
      mobileDescription: "Крепкий дом для крепкой семьи",
      menu: "МЕНЮ",
    },
    aboutBlock: {
      title: "О КОМПЛЕКСЕ",
      description:
        "На территории ЖК представлены 6, 8 и 10-этажные жилые дома с просторными террасами и балконами. Квартиры имеют площадь от 43 до 184 квадр" +
        "атных метров. Колонно-ригельная конструкция наших домов позволяет выполнить любую планировку квартиры, а стены из жжёного кирпича обеспечат " +
        "высокий уровень шумоизоляции и комфортный микроклимат в вашей квартире круглый год. ",
      advantages: [
        { title: "Планировок", count: "19" },
        { title: "Парковочных мест", count: "114" },
        { title: "Квартир", count: "87" },
      ],
      button: "Подробнее",
    },
    advantagesBlock: [
      {
        title: "МЕЖДУНАРОДНЫЕ СТАНДАРТЫ СТРОИТЕЛЬСТВА",
        description:
          "Колонно-ригельная конструкция наших домов позволяет выполнить любую планировку квартиры, а стены из жжёного" +
          " кирпича обеспечат высокий уровень шумоизоляции и комфортный микроклимат в вашей квартире круглый год.",
        image: advantageImg1,
      },
      {
        title: "ОЗЕЛЕНЕННЫЙ ДВОР",
        description:
          "Колонно-ригельная конструкция наших домов позволяет выполнить любую планировку квартиры, а стены из жжёного" +
          " кирпича обеспечат высокий уровень шумоизоляции и комфортный микроклимат в вашей квартире круглый год.",
        image: advantageImg2,
      },
      {
        title: "ТОРГОВАЯ ЗОНА",
        description:
          "Колонно-ригельная конструкция наших домов позволяет выполнить любую планировку квартиры, а стены из жжёного" +
          " кирпича обеспечат высокий уровень шумоизоляции и комфортный микроклимат в вашей квартире круглый год.",
        image: advantageImg3,
      },
    ],
    chessBlock: {
      title: "ПРЕИМУЩЕСТВА",
      content: [
        {
          title: "Конструкция",
          description:
            "Колонно-ригельная конструкция наших домов позволяет выполнить любую планировку квартиры, а стены из жжёного кирпича обеспечат высокий уровень шумоизоляции и комфортный микроклимат в вашей квартире круглый год.",
          img: constructionImg,
          mobileImg: constructionMobileImg,
        },
        {
          title: "Двор без машин",
          description:
            "Подземный паркинг позволит не переживать за размещение вашего авто и обеспечит комфортную и безопасную зону для прогулок с детьми в уютных зеленых дворах с многофункциональными игровыми площадками.",
          img: noCarsInsideImg,
          mobileImg: noCarsInsideMobileImg,
        },
        {
          title: "Бизнес",
          description:
            "ЖК GOROD также предлагает помещения для коммерческих объектов на первом этаже — отличное решение для бизнеса, ведь здесь вас ожидает оживленный район с большим числом потенциальных потребителей услуг.",
          img: businessImg,
          mobileImg: businessMobileImg,
        },
      ],
    },
    flatsSlider: {
      block: "Блок",
      title: "БЛОКИ И ПЛАНИРОВКА",
      flatsCount: "комнатная",
      roomCountText: "Количество комнат",
      schemaTitle: "Доступные планировки",
      schemaTitleMobile: "Планировки",
      apartmentDescription: "Общая площадь",
      cost: "Стоимость",
      roomSize: "Размеры комнат",
      squareTitle: "Общая площадь",
      book: "Забронировать",
    },
    galleryBlock: {
      title: "ГАЛЕРЕЯ",
    },
    buildingStepsBlock: {
      title: "ХОД СТРОИТЕЛЬСТВА",
    },
    locationBlock: {
      title: "ЛОКАЦИЯ",
      address: "Ташкент, Яшнабадский р-н, Мавлоно Ризови, 2",
      locationImg: locationSvg,
      phoneImg: phoneSVG,
      phone: "+998 90 123 45 67",
      mailImg: mailSVG,
      mail: "test@mail.uz",
      websiteImg: websiteSVG,
      website: "www.website.uz",
      telegramImg: telegramSVG,
      telegram: "@telegram",
    },
    footerBlock: {
      navigation: [
        { title: "О комплексе", id: EBlocks.WELCOME },
        { title: "Преимущества", id: EBlocks.ADVANTAGES },
        { title: "Блоки", id: EBlocks.ROOM_SELECTOR },
        { title: "Галерея", id: EBlocks.GALLERY },
        { title: "Ход строительства", id: EBlocks.BUILDINGS },
        { title: "Локация", id: EBlocks.LOCATION },
      ],
    },
  },
};
