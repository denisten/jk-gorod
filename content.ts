import chessImg1 from "./images/chessBlock/1.jpg";
import chessImg2 from "./images/chessBlock/2.jpg";
import advantageImg1 from "./images/advantagesBlock/1.png";
import advantageImg2 from "./images/advantagesBlock/2.png";
import advantageImg3 from "./images/advantagesBlock/3.png";
import welcome1 from "./images/welcomeBlock/1.jpg";
import welcome2 from "./images/welcomeBlock/2.jpg";
import welcome3 from "./images/welcomeBlock/3.jpg";
import welcome4 from "./images/welcomeBlock/4.jpg";
import welcome5 from "./images/welcomeBlock/5.jpg";
import gallery1 from "./images/galleryBlock/1.jpg";
import gallery2 from "./images/galleryBlock/2.jpg";
import gallery3 from "./images/galleryBlock/3.jpg";
import gallery4 from "./images/galleryBlock/4.jpg";
import gallery5 from "./images/galleryBlock/5.jpg";
import { EBlocks } from "./types";

export const content = {
  uzb: {
    squareMeasurementUnit: "kv.m",
    priceInUzb: "million so'm",
    balcony: "Balkon",
    kitchen: "Oshxona",
    lounge: "Yashash xonasi",
    toilet: "Hammom",
    hall: "Zal",
    bedroom: "Yotoq xonasi",
    locationInfoBlock: {
      title: "GOROD LCD JOYLASHUVI",
      description:
        "Rivojlangan infratuzilmani ta'minlaydi — qulay yashash uchun zarur bo'lgan barcha piyoda yurish masofasidagi" +
        " lokatsiyalar: ta'lim muassasalari, oziq-ovqat tarmoqli do’konlar, tibbiyot markazlari, sport va sog'lomlashtirish majmualari, jamoat transporti\n",
    },
    callMeBackModal: {
      title: "ARIZA QOLDIRING",
      description: "Raqamingizni qoldiring va biz sizga qo'ng'iroq qilamiz.",
      namePlaceholder: "Ism",
      phonePlaceholder: "Telefon raqami",
      buttonText: "QO'NG'IROQNI KUTISH",
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
      mainPhone: "+998 78 7776666",
      extraPhone: "+998 98 3359999",
      timetable: "Har kuni soat 9:00 dan 20: 00 gacha",
    },
    welcomeBlock: {
      background: [welcome1, welcome2, welcome3, welcome4, welcome5],
      description: "GOROD - mustahkam oila uchun mustahkam uy",
      menu: "Menyu",
      button: "Ariza qoldiring",
    },
    aboutBlock: {
      title: "Kompleks haqida",
      description:
        "Mirador Group tomonidan ishlab chiqarilgan GOROD - bu poytaxtning nufuzli tumanida joylashgan zamonaviy biznes-klass turar-joy majmuasi.\n" +
        "TJ hududida keng terassali va balkonli 6, 8 va 10 qavatli turar-joy binolari mavjud. Kvartiralar 46 dan 200 kvadrat metrgacha maydonga ega",
      advantages: [
        { title: "Planirovkalar", count: "21" },
        { title: "Avtoturargohlar", count: "325" },
        { title: "Kvartiralar", count: "413" },
      ],
      button: "Batafsil",
    },
    advantagesBlock: [
      {
        title: "24 soatlik Qo’riqlash xizmati",
        description:
          "Butun hududda 24 soatlik videokuzatuv bo’ladi, bu majmua aholisi va ularning mehmonlarining xavfsizligini ta'minlaydi",
        image: advantageImg1,
      },
      {
        title: "Obodonlashtirilgan Hudud",
        description:
          "Hovlilarda landshaft dizaynli yashil zonalar, ko'p funktsiyali bolalar o'yin maydonchalari, dam olish uchun besedkalar, yurish yo'laklari mavjud",
        image: advantageImg2,
      },
      {
        title: "Savdo zonasi",
        description:
          "Gorod turar-joy majmuasi tijorat ob'ektlari uchun binolarni taklif etadi, bu yerda siz ko'plab potentsial xizmat iste'molchilarga" +
          " ega bo'lgan gavjum hududni topasiz, turar-joy majmuasining tashqi perimetri bo'ylab tijorat hududiga tashrif buyuruvchilarning to'xtash joyi uchun bufer zonasi mavjud",
        image: advantageImg3,
      },
    ],
    chessBlock: {
      title: "Foyda",
      content: [
        {
          title: "Qurilish",
          description:
            "Uylarimizni qurish uchun monolit ustunli murvat tizimi har qanday tartibni bajarishga imkon beradi" +
            "kvartiralar va kuygan g'isht devorlari butun yil davomida sizning kvartirangizda yuqori darajadagi ovoz yalıtımı va qulay mikroiqlimni ta'minlaydi.",
          img: chessImg1,
          mobileImg: chessImg1,
        },
        {
          title: "Mashinasiz hovli",
          description:
            "Yer osti avtoturargohi sizning mashinangizni joylashtirish haqida tashvishlanmaslikka imkon beradi va ko'p funktsiyali o'yin maydonchalari bo'lgan shinam yashil hovlilarda bolalar bilan yurish uchun qulay va xavfsiz joyni ta'minlaydi.",
          img: chessImg2,
          mobileImg: chessImg2,
        },
      ],
    },
    flatsSlider: {
      block: "Blok",
      title: "BLOKLAR VA TARTIB",
      flatsCount: "xonali",
      roomCountText: "Xonalar soni",
      schemaTitle: "Mavjud tartiblar",
      schemaTitleMobile: "Tartiblar",
      apartmentDescription: "Umumiy maydoni",
      cost: "Qiymati",
      roomSize: "Xona o'lchamlari",
      squareTitle: "Umumiy maydoni",
      book: "Kitob",
    },
    galleryBlock: {
      title: "Galereya",
      images: [gallery1, gallery2, gallery3, gallery4, gallery5],
    },
    buildingStepsBlock: {
      title: "QURILISH JARAYONI",
    },

    locationBlock: {
      title: "SAVDO IDORASI",
      address: "Toshkent, Yashnobod tumani, Mavlono Riyoziy 2",
      shortAddress: "Mavlono Riyoziy 2",
      phone: "+998 97 3359999",
      mainPhone: "+998 78 7776666",
      extraPhone: "+998 98 3359999",
      mail: "info@jkgorod.uz",
      buttonText: "Uchrashuvga yoziling",
    },
    footerBlock: {
      navigation: [
        { title: "Kompleks haqida", id: EBlocks.ABOUT },
        { title: "Foyda", id: EBlocks.CHESS },
        { title: "Bloklar", id: EBlocks.ROOM_SELECTOR },
        { title: "Galereya", id: EBlocks.GALLERY },
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
      title: "ОСТАВИТЬ ЗАЯВКУ",
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
      mainPhone: "+998 78 7776666",
      phone: "+998 97 3359999",
      extraPhone: "+998 98 3359999",
      timetable: "Ежедневно с 9:00 до 20:00",
    },
    welcomeBlock: {
      background: [welcome1, welcome2, welcome3, welcome4, welcome5],
      description: "GOROD - крепкий дом для крепкой семьи",
      menu: "МЕНЮ",
      button: "Оставить заявку",
    },
    aboutBlock: {
      title: "О КОМПЛЕКСЕ",
      description:
        "GOROD от Mirador Group - это современный комплекс апартаментов бизнес-класса расположенный в престижном районе столицы.\n" +
        "На территории ЖК представлены 6, 8 и 10-этажные жилые дома с просторными террасами " +
        "и балконами. Квартиры имеют площадь от 46 до 200 квадратных метров.",
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
          "Во дворах предусмотрены зеленые зоны с ландшафтным дизайном, многофункциональные детские площадки, беседки для отдыха, прогулочные дорожки.",
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
          img: chessImg1,
          mobileImg: chessImg1,
        },
        {
          title: "Двор без машин",
          description:
            "Подземный паркинг позволит не переживать за размещение вашего авто и обеспечит комфортную и безопасную зону для прогулок с детьми в уютных зеленых дворах с многофункциональными игровыми площадками.",
          img: chessImg2,
          mobileImg: chessImg2,
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
      images: [gallery1, gallery2, gallery3, gallery4, gallery5],
    },
    buildingStepsBlock: {
      title: "ХОД СТРОИТЕЛЬСТВА",
    },
    locationBlock: {
      title: "ОФИС ПРОДАЖ",
      address: "Ташкент, Яшнабадский р-н, Мавлоно Риёзий 2",
      shortAddress: "Мавлоно Риёзий 2",
      phone: "+998 97 3359999",
      mainPhone: "+998 78 7776666",
      extraPhone: "+998 98 3359999",
      mail: "info@jkgorod.uz",
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
