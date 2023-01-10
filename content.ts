import constructionImg from "./images/chessBlock/construction.png";
import noCarsInsideImg from "./images/chessBlock/noCarsInside.png";
import constructionMobileImg from "./images/chessBlockMobile/construction.png";
import noCarsInsideMobileImg from "./images/chessBlockMobile/noCarsInside.png";
import advantageImg1 from "./images/advantagesBlock/1.png";
import advantageImg2 from "./images/advantagesBlock/2.png";
import advantageImg3 from "./images/advantagesBlock/3.png";
import welcome1 from "./images/welcomeBlock/background.webp";
import welcomeMobileBackground from "./images/welcomeBlock/backgroundMobile.webp";
import welcome2 from "./images/welcomeBlock/2.png";
import welcome3 from "./images/welcomeBlock/3.png";
import welcome4 from "./images/welcomeBlock/4.png";
import gallery1 from "./images/galleryBlock/1.png";
import gallery2 from "./images/galleryBlock/2.png";
import gallery3 from "./images/galleryBlock/3.png";
// import gallery4 from "./images/galleryBlock/4.png";
// import gallery5 from "./images/galleryBlock/5.png";
// import gallery6 from "./images/galleryBlock/6.png";
// import gallery7 from "./images/galleryBlock/7.png";
// import gallery8 from "./images/galleryBlock/8.png";
// import gallery9 from "./images/galleryBlock/9.png";
// import gallery10 from "./images/galleryBlock/10.png";
// import gallery11 from "./images/galleryBlock/11.png";
// import gallery12 from "./images/galleryBlock/12.png";
// import gallery13 from "./images/galleryBlock/13.png";
// import gallery14 from "./images/galleryBlock/14.png";
// import gallery15 from "./images/galleryBlock/15.png";
// import gallery16 from "./images/galleryBlock/16.png";
// import gallery17 from "./images/galleryBlock/17.png";
// import gallery18 from "./images/galleryBlock/18.png";
// import gallery19 from "./images/galleryBlock/19.png";
// import gallery20 from "./images/galleryBlock/20.png";
// import gallery21 from "./images/galleryBlock/21.png";
// import gallery22 from "./images/galleryBlock/22.png";
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
    header: {
      navigation: [
        { title: "Kompleks haqida", id: EBlocks.ABOUT },
        { title: "Foyda", id: EBlocks.CHESS },
        { title: "Bloklar", id: EBlocks.ROOM_SELECTOR },
        { title: "Galereya", id: EBlocks.GALLERY },
        { title: "Manzil", id: EBlocks.LOCATION },
      ],
      phone: "+998 97 3359999",
      extraPhone: "+998 98 3359999",
      timetable: "Ежедневно с 9:00 до 20:00",
    },
    welcomeBlock: {
      background: [welcome1, welcome2, welcome3, welcome4],
      mobileBackground: [welcomeMobileBackground],
      description: "GOROD!- крепкий дом для крепкой семьи.",
      menu: "МЕНЮ",
    },
    aboutBlock: {
      title: "О КОМПЛЕКСЕ",
      description:
        "GOROD от Mirador Group - это современный комплекс апартаментов бизнес-класса расположенный в престижном районе столицы.\n" +
        "На территории ЖК представлены 6, 8 и 10-этажные жилые дома с просторными террасами " +
        "и балконами. Квартиры имеют площадь от 46 до 149 квадратных метров.",
      advantages: [
        { title: "Планировок", count: "21" },
        { title: "Парковочных мест", count: "325" },
        { title: "Квартир", count: "413" },
      ],
      button: "Подробнее",
    },
    advantagesBlock: [
      {
        title: "КРУГЛОСУТОЧНАЯ ОХРАНА",
        description:
          "На всей территории будет круглосуточное видеонаблюдение, которое обеспечит безопасность жильцам комплекса и их гостям",
        image: advantageImg1,
      },
      {
        title: "БЛАГОУСТРОЕННАЯ ТЕРРИТОРИЯ",
        description:
          "Во дворах предусмотрены зеленые зоны с ландшафтным дизайном, многофункциональные детские площадки, беседки для отдыха, дорожки для прогулок.",
        image: advantageImg2,
      },
      {
        title: "ТОРГОВАЯ ЗОНА",
        description:
          "Жилой комплекс GOROD предлагает помещения для коммерческих объектов, здесь вас ожидает оживленный район с большим числом потенциальных потребителей услуг" +
          ", по внешнему периметру ЖК предусмотрена буферная зона для парковки посетителей коммерческой зоны.",
        image: advantageImg3,
      },
    ],
    chessBlock: {
      title: "ПРЕИМУЩЕСТВА",
      content: [
        {
          title: "Конструкция",
          description:
            "Монолитная колонно-ригельная система строительства наших домов позволяет выполнить любую планировку" +
            " квартиры, а стены из жженого кирпича обеспечат высокий уровень шумоизоляции и комфортный микроклимат в вашей квартире круглый год.",
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
      images: [
        gallery1,
        gallery2,
        gallery3,
        // gallery4,
        // gallery5,
        // gallery6,
        // gallery7,
        // gallery8,
        // gallery9,
        // gallery10,
        // gallery11,
        // gallery12,
        // gallery13,
        // gallery14,
        // gallery15,
        // gallery16,
        // gallery17,
        // gallery18,
        // gallery19,
        // gallery20,
        // gallery21,
        // gallery22,
      ],
    },
    buildingStepsBlock: {
      title: "ХОД СТРОИТЕЛЬСТВА",
    },

    locationBlock: {
      title: "ОФИС ПРОДАЖ",
      address: "Ташкент, Яшнабадский р-н, Мавлоно Риёзий 2",
      phone: "+998 97 3359999",
      extraPhone: "+998 98 3359999",
      mail: "jkgorod@gmail.com",
      buttonText: "Записаться на встречу",
    },
    footerBlock: {
      navigation: [
        { title: "О комплексе", id: EBlocks.ABOUT },
        { title: "Преимущества", id: EBlocks.CHESS },
        { title: "Блоки", id: EBlocks.ROOM_SELECTOR },
        { title: "Галерея", id: EBlocks.GALLERY },
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
    header: {
      navigation: [
        { title: "О комплексе", id: EBlocks.ABOUT },
        { title: "Преимущества", id: EBlocks.CHESS },
        { title: "Блоки", id: EBlocks.ROOM_SELECTOR },
        { title: "Галерея", id: EBlocks.GALLERY },
        // { title: "Ход строительства", id: EBlocks.BUILDINGS },
        { title: "Локация", id: EBlocks.LOCATION },
      ],
      phone: "+998 97 3359999",
      extraPhone: "+998 98 3359999",
      timetable: "Ежедневно с 9:00 до 20:00",
    },
    welcomeBlock: {
      background: [welcome1, welcome2, welcome3, welcome4],
      mobileBackground: [welcome1, welcome2, welcome3, welcome4],
      description: "GOROD!- крепкий дом для крепкой семьи.",
      menu: "МЕНЮ",
    },
    aboutBlock: {
      title: "О КОМПЛЕКСЕ",
      description:
        "GOROD от Mirador Group - это современный комплекс апартаментов бизнес-класса расположенный в престижном районе столицы.\n" +
        "На территории ЖК представлены 6, 8 и 10-этажные жилые дома с просторными террасами " +
        "и балконами. Квартиры имеют площадь от 46 до 149 квадратных метров.",
      advantages: [
        { title: "Планировок", count: "21" },
        { title: "Парковочных мест", count: "325" },
        { title: "Квартир", count: "413" },
      ],
      button: "Подробнее",
    },
    advantagesBlock: [
      {
        title: "КРУГЛОСУТОЧНАЯ ОХРАНА",
        description:
          "На всей территории будет круглосуточное видеонаблюдение, которое обеспечит безопасность жильцам комплекса и их гостям",
        image: advantageImg1,
      },
      {
        title: "БЛАГОУСТРОЕННАЯ ТЕРРИТОРИЯ",
        description:
          "Во дворах предусмотрены зеленые зоны с ландшафтным дизайном, многофункциональные детские площадки, беседки для отдыха, дорожки для прогулок.",
        image: advantageImg2,
      },
      {
        title: "ТОРГОВАЯ ЗОНА",
        description:
          "Жилой комплекс GOROD предлагает помещения для коммерческих объектов, здесь вас ожидает оживленный район с большим числом потенциальных потребителей услуг" +
          ", по внешнему периметру ЖК предусмотрена буферная зона для парковки посетителей коммерческой зоны.",
        image: advantageImg3,
      },
    ],
    chessBlock: {
      title: "ПРЕИМУЩЕСТВА",
      content: [
        {
          title: "Конструкция",
          description:
            "Монолитная колонно-ригельная система строительства наших домов позволяет выполнить любую планировку" +
            " квартиры, а стены из жженого кирпича обеспечат высокий уровень шумоизоляции и комфортный микроклимат в вашей квартире круглый год.",
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
      images: [
        gallery1,
        gallery2,
        gallery3,
        // gallery4,
        // gallery5,
        // gallery6,
        // gallery7,
        // gallery8,
        // gallery9,
        // gallery10,
        // gallery11,
        // gallery12,
        // gallery13,
        // gallery14,
        // gallery15,
        // gallery16,
        // gallery17,
        // gallery18,
        // gallery19,
        // gallery20,
        // gallery21,
        // gallery22,
      ],
    },
    buildingStepsBlock: {
      title: "ХОД СТРОИТЕЛЬСТВА",
    },
    locationBlock: {
      title: "ОФИС ПРОДАЖ",
      address: "Ташкент, Яшнабадский р-н, Мавлоно Риёзий 2",
      phone: "+998 97 3359999",
      extraPhone: "+998 98 3359999",
      mail: "jkgorod@gmail.com",
      buttonText: "Записаться на встречу",
    },
    footerBlock: {
      navigation: [
        { title: "Главная", id: EBlocks.WELCOME },
        { title: "О комплексе", id: EBlocks.ABOUT },
        { title: "Преимущества", id: EBlocks.CHESS },
        { title: "Блоки", id: EBlocks.ROOM_SELECTOR },
        { title: "Галерея", id: EBlocks.GALLERY },
      ],
    },
  },
};
