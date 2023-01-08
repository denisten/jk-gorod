exports.id = 369;
exports.ids = [369];
exports.modules = {

/***/ 9468:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "ChessBlockMobile_container__B0cU5",
	"swiper": "ChessBlockMobile_swiper__JAnAU",
	"swiper-slide": "ChessBlockMobile_swiper-slide__a8W_e",
	"image": "ChessBlockMobile_image__UNnD_",
	"blockTitle": "ChessBlockMobile_blockTitle__FFwd4",
	"title": "ChessBlockMobile_title__RJfWF",
	"textContent": "ChessBlockMobile_textContent__laF9P",
	"text": "ChessBlockMobile_text__JFsjy",
	"slideText": "ChessBlockMobile_slideText__wx5VN"
};


/***/ }),

/***/ 2250:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "Text_container__hhxZG",
	"gilroy": "Text_gilroy__yENUG",
	"title": "Text_title__w9fVE"
};


/***/ }),

/***/ 7867:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "f": () => (/* binding */ ChessBlockMobile)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(9468);
/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_index_module_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3877);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3015);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _content__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1043);
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3094);
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5691);
/* harmony import */ var _components_Text__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2480);
/* harmony import */ var react_animate_on_scroll__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(8073);
/* harmony import */ var react_animate_on_scroll__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_animate_on_scroll__WEBPACK_IMPORTED_MODULE_10__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper__WEBPACK_IMPORTED_MODULE_2__, swiper_react__WEBPACK_IMPORTED_MODULE_3__]);
([swiper__WEBPACK_IMPORTED_MODULE_2__, swiper_react__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












const ChessBlockMobile = ({ lang  })=>{
    const data = _content__WEBPACK_IMPORTED_MODULE_6__/* .content */ .k[lang].chessBlock;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_scroll__WEBPACK_IMPORTED_MODULE_7__.Element, {
        name: _types__WEBPACK_IMPORTED_MODULE_8__/* .EBlocks.CHESS */ .CL.CHESS,
        className: (_index_module_css__WEBPACK_IMPORTED_MODULE_11___default().container),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_animate_on_scroll__WEBPACK_IMPORTED_MODULE_10___default()), {
                animateIn: "animate__fadeInLeftBig",
                animateOnce: true,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Text__WEBPACK_IMPORTED_MODULE_9__/* .Text */ .x, {
                    title: true,
                    text: _content__WEBPACK_IMPORTED_MODULE_6__/* .content */ .k[lang].chessBlock.title,
                    className: (_index_module_css__WEBPACK_IMPORTED_MODULE_11___default().blockTitle)
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_animate_on_scroll__WEBPACK_IMPORTED_MODULE_10___default()), {
                animateIn: "animate__fadeInRightBig",
                animateOnce: true,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_3__.Swiper, {
                    slidesPerView: 1,
                    spaceBetween: 30,
                    centeredSlides: true,
                    pagination: {
                        clickable: true,
                        dynamicBullets: true
                    },
                    navigation: true,
                    autoplay: {
                        delay: 1500,
                        disableOnInteraction: false
                    },
                    modules: [
                        swiper__WEBPACK_IMPORTED_MODULE_2__.Autoplay,
                        swiper__WEBPACK_IMPORTED_MODULE_2__.Navigation,
                        swiper__WEBPACK_IMPORTED_MODULE_2__.Pagination
                    ],
                    className: (_index_module_css__WEBPACK_IMPORTED_MODULE_11___default().swiper),
                    allowTouchMove: true,
                    children: data.content.map((el, id)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_3__.SwiperSlide, {
                            className: classnames__WEBPACK_IMPORTED_MODULE_4___default()((_index_module_css__WEBPACK_IMPORTED_MODULE_11___default().swiperSlide)),
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {
                                        className: (_index_module_css__WEBPACK_IMPORTED_MODULE_11___default().image),
                                        src: el.mobileImg,
                                        alt: "apartment img"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: (_index_module_css__WEBPACK_IMPORTED_MODULE_11___default().slideText),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Text__WEBPACK_IMPORTED_MODULE_9__/* .Text */ .x, {
                                                className: (_index_module_css__WEBPACK_IMPORTED_MODULE_11___default().title),
                                                title: true,
                                                text: el.title
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Text__WEBPACK_IMPORTED_MODULE_9__/* .Text */ .x, {
                                                className: (_index_module_css__WEBPACK_IMPORTED_MODULE_11___default().text),
                                                text: el.description
                                            })
                                        ]
                                    })
                                ]
                            })
                        }, id))
                })
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8369:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "f": () => (/* reexport safe */ _ChessBlockMobile__WEBPACK_IMPORTED_MODULE_0__.f)
/* harmony export */ });
/* harmony import */ var _ChessBlockMobile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7867);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ChessBlockMobile__WEBPACK_IMPORTED_MODULE_0__]);
_ChessBlockMobile__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2480:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "x": () => (/* reexport */ Text)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./components/Text/index.module.css
var index_module = __webpack_require__(2250);
var index_module_default = /*#__PURE__*/__webpack_require__.n(index_module);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: ./types/index.ts
var types = __webpack_require__(5691);
;// CONCATENATED MODULE: ./components/Text/Text.tsx





const Text = ({ title =false , text , className , fontSize , fontWeight , fontFamily ="Austin" , onClick  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: external_classnames_default()(className, (index_module_default()).container, {
            [(index_module_default()).gilroy]: fontFamily === types/* EFonts.GILROY */.RN.GILROY,
            [(index_module_default()).title]: title
        }),
        style: {
            fontSize,
            fontWeight
        },
        onClick: onClick,
        children: text
    });
};

;// CONCATENATED MODULE: ./components/Text/index.ts



/***/ }),

/***/ 1043:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "k": () => (/* binding */ content)
});

;// CONCATENATED MODULE: ./images/chessBlock/construction.png
/* harmony default export */ const construction = ({"src":"/_next/static/media/construction.c7779d44.png","height":400,"width":960,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAAZElEQVR42gWAQQqCQBRA39DAaINStqplR+8SXSJcBu4icCEoCIqjo/8r5vUu6387M06RxzngCGSmZ8ueNHrFDkvkXjgSKnInyA5bDJi1x/sL1prILVHS/ETqC1QVEeHz/VF1JQcHPyhfatUz3AAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":3});
;// CONCATENATED MODULE: ./images/chessBlock/noCarsInside.png
/* harmony default export */ const noCarsInside = ({"src":"/_next/static/media/noCarsInside.861c838a.png","height":402,"width":960,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAIAAAAhqtkfAAAAVklEQVR42gFLALT/APDy9tbY22ZwfJimsoOarrq6urmzq5ybmADm6/DDx8uNjIyspp17d3Ocl4+8t66XlZMAw8bLmZqbsa+qurewmJaUgn94m5eLioqEMOwvEUSpESYAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":3});
;// CONCATENATED MODULE: ./images/chessBlock/business.png
/* harmony default export */ const business = ({"src":"/_next/static/media/business.65361068.png","height":410,"width":960,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAIAAAAhqtkfAAAAVklEQVR42gFLALT/AMvFusW/sru5sb68tMXCuaeloGxvdYaHigCTkYS0squ/vra2tK7BvrbIxb2zsap1dHMAlZOKpqKasK2mpKGapJ+Wrqukq6ijd3VvA9MucSsCJksAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":3});
;// CONCATENATED MODULE: ./images/chessBlockMobile/construction.png
/* harmony default export */ const chessBlockMobile_construction = ({"src":"/_next/static/media/construction.974c0237.png","height":264,"width":430,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAmUlEQVR42h3NPQ6CMABA4UctQqAFooksLk7e2RM4Orh6AR2Mk4kxbJo4GKRB/KFaift7+bzZYn0qLg+qpyOLBDqATBhcoDEuRgrZI4kleVAy6lcI98Ler2TZlOKbIqyQTIYeYw5o2aDCHn4Y05jyH0vlW4K3QQ1yYp3S2halNPvjmc12idyt5kSy89MEITzqusZzH8qmu8sbPxYXNtnEfI86AAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":5});
;// CONCATENATED MODULE: ./images/chessBlockMobile/noCarsInside.png
/* harmony default export */ const chessBlockMobile_noCarsInside = ({"src":"/_next/static/media/noCarsInside.bc0569c2.png","height":264,"width":430,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAIAAAD38zoCAAAAiElEQVR42gF9AIL/AO7w9b/CxnB/jqe4yJGsxLe9xMW+s4eIhwDs8PXExsheYGWUkIhra2mPi4bMxryKjZAAxcvSoqWorKmlwr62l5WShIF9ubOniomGAJydoKSjoKeloaqoo5mWknZ0bZaTgomLhQCMjJCXlpWQj46PjIiRj4x9enWYlIReXE8IYkmAzhL30AAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":5});
;// CONCATENATED MODULE: ./images/chessBlockMobile/business.png
/* harmony default export */ const chessBlockMobile_business = ({"src":"/_next/static/media/business.3c8578d2.png","height":264,"width":430,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAIAAAD38zoCAAAAiElEQVR42gF9AIL/AMG6rMLAtqTA1qvD16bB16u8y3N0d0VQYQDCvK/GwLK5t629urHEwLWrqKB0dnljaHAAlZKKvru0u7q0u7q0xMG6xcO8x8S8aWpsAIF/eLm1rbWzq6Wim7Gto7e0rLu3sHFuawCdnJSbl4yampWdnJWPjYaPjomioJyGhoArG0wwuRbR1AAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":5});
;// CONCATENATED MODULE: ./images/locationBlock/phone.svg
/* harmony default export */ const phone = ({"src":"/_next/static/media/phone.b6ec9eae.svg","height":30,"width":30});
;// CONCATENATED MODULE: ./images/locationBlock/website.svg
/* harmony default export */ const website = ({"src":"/_next/static/media/website.b2fd4b04.svg","height":30,"width":30});
;// CONCATENATED MODULE: ./images/locationBlock/mail.svg
/* harmony default export */ const mail = ({"src":"/_next/static/media/mail.c28db2f1.svg","height":30,"width":30});
;// CONCATENATED MODULE: ./images/advantagesBlock/1.png
/* harmony default export */ const _1 = ({"src":"/_next/static/media/1.26cb6bbe.png","height":688,"width":1109,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAsElEQVR4nAGlAFr/AaLB2gD49PY479W7ghQjMj4CER37CAcE/QMA+w7i1cOBAbfP5LXu7e1K4My8AA0LBgD1+PwAIiUlAA0ZJAD18+zoAbPK3P/s4t0A8Ofi/f337gP19PH+FhYU//P39wM/SlYAAaGqsP7j2NEBCQ8XAAL98wD39vcADA4LAMjQytJ2dYORAXV5dvb7/gYBBwH5/wsKAwb+/gPcFRIQhUZmE6Pr1TMAcC5SGN7U0ZYAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":5});
;// CONCATENATED MODULE: ./images/advantagesBlock/2.png
/* harmony default export */ const _2 = ({"src":"/_next/static/media/2.73c1a800.png","height":698,"width":1083,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAsElEQVR4nAGlAFr/AarP5gDTt60IFDFBZfr29HEK9eQZ9evj/gH68QMxLSUBAazM4Hrs9PtlAPTsIP/hyAAE/PMA7fDzAAoKDAA4ODT+AY6ir/8jHxgA/vfx/fXfzQL+BAoB7u3t/QEAAAM5OjcAAWFZTPVXVU8K6uzrAOnr6wAC/wEA8PP1AAgHCQBAPz6+AV9mSboiFCRF6erw/AERBwARBg4B4uLcvfH26IN6cH3EqK1OvcCRz1MAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":5});
;// CONCATENATED MODULE: ./images/advantagesBlock/3.png
/* harmony default export */ const _3 = ({"src":"/_next/static/media/3.4f6fa778.png","height":727,"width":1142,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAsElEQVR4nAGlAFr/AbG/xwD4/QI3AQgQfv7+/zr+/wH+/evcBK2oqQbw+wVHAcrDtbf0+P5I+v4BAAkGAgAA//8A09XaANrf6AD4+f24AbOxqv8REA4A8fT4/RANCQL8/QD+Dw0KAtrc4AHJy9AAAaeknv4ZGBUB5ejtAAoGAAD+AAIADg4NAObn6r2srLKTAZqXjPYBAgX+AQMH+/v69QP29PjKGBgahQQB+r+8wcoAl/JR6D9D98gAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":5});
;// CONCATENATED MODULE: ./images/locationBlock/locationPoing.svg
/* harmony default export */ const locationPoing = ({"src":"/_next/static/media/locationPoing.4dfbd280.svg","height":30,"width":30});
;// CONCATENATED MODULE: ./images/locationBlock/telegram.svg
/* harmony default export */ const telegram = ({"src":"/_next/static/media/telegram.1f018e0c.svg","height":22,"width":26});
;// CONCATENATED MODULE: ./images/welcomeBlock/background.webp
/* harmony default export */ const background = ({"src":"/_next/static/media/background.93aaec52.webp","height":1253,"width":1920,"blurDataURL":"data:image/webp;base64,UklGRj4AAABXRUJQVlA4IDIAAACwAQCdASoIAAUAAkA4JYwCdADze7UQAP7rLP4cwvvh1vUqxRBgRi2qAo/EBh2omK0oAA==","blurWidth":8,"blurHeight":5});
;// CONCATENATED MODULE: ./images/welcomeBlock/backgroundMobile.webp
/* harmony default export */ const backgroundMobile = ({"src":"/_next/static/media/backgroundMobile.ea4c7789.webp","height":619,"width":429,"blurDataURL":"data:image/webp;base64,UklGRkIAAABXRUJQVlA4IDYAAADwAQCdASoGAAgAAkA4JYwCdAD0Y7pThAAA/lsCufNDzJbpWAk+fJ/2a3Odny2AONZnUyUAAAA=","blurWidth":6,"blurHeight":8});
// EXTERNAL MODULE: ./types/index.ts
var types = __webpack_require__(5691);
;// CONCATENATED MODULE: ./content.ts

















const content = {
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
            description: "Обеспечивает доступ к развитой инфраструктуре — все необходимые для " + "комфортной жизни локации в пешей доступности: рынок, продовольственные сетевые " + "маркеты, школы, детские сады, медицинские клиники, аптеки и общественный транспорт"
        },
        callMeBackModal: {
            title: "ОСТАВИТЬ ЗАЯВКУ!",
            description: "Оставьте свой номер, и мы перезвоним Вам.",
            namePlaceholder: "Имя",
            phonePlaceholder: "Номер телефона",
            buttonText: "ЖДУ ЗВОНКА"
        },
        header: [
            {
                title: "Kompleks haqida",
                id: types/* EBlocks.ABOUT */.CL.ABOUT
            },
            {
                title: "Foyda",
                id: types/* EBlocks.ADVANTAGES */.CL.ADVANTAGES
            },
            {
                title: "Bloklar",
                id: types/* EBlocks.ROOM_SELECTOR */.CL.ROOM_SELECTOR
            },
            {
                title: "Galereya",
                id: types/* EBlocks.GALLERY */.CL.GALLERY
            },
            {
                title: "Qurilish jarayoni",
                id: types/* EBlocks.BUILDINGS */.CL.BUILDINGS
            },
            {
                title: "Joylashuv",
                id: types/* EBlocks.LOCATION */.CL.LOCATION
            }
        ],
        welcomeBlock: {
            background: background,
            mobileBackground: backgroundMobile,
            description: "Выберите свой крепкий дом для крепкой семьи в одном из 13 блоков жилого комплекса",
            button: "Оставить заявку",
            title: "GOROD!",
            mobileTitle: "GOROD",
            mobileDescription: "Крепкий дом для крепкой семьи",
            menu: "МЕНЮ"
        },
        aboutBlock: {
            title: "О КОМПЛЕКСЕ",
            description: "На территории ЖК представлены 6, 8 и 10-этажные жилые дома с просторными террасами и балконами. Квартиры имеют площадь от 43 до 184 квадр" + "атных метров. Колонно-ригельная конструкция наших домов позволяет выполнить любую планировку квартиры, а стены из жжёного кирпича обеспечат " + "высокий уровень шумоизоляции и комфортный микроклимат в вашей квартире круглый год. ",
            advantages: [
                {
                    title: "Планировок",
                    count: "19"
                },
                {
                    title: "Парковочных мест",
                    count: "114"
                },
                {
                    title: "Квартир",
                    count: "87"
                }
            ],
            button: "Подробнее"
        },
        advantagesBlock: [
            {
                title: "МЕЖДУНАРОДНЫЕ СТАНДАРТЫ СТРОИТЕЛЬСТВА",
                description: "Колонно-ригельная конструкция наших домов позволяет выполнить любую планировку квартиры, а стены из жжёного" + " кирпича обеспечат высокий уровень шумоизоляции и комфортный микроклимат в вашей квартире круглый год.",
                image: _1
            },
            {
                title: "ОЗЕЛЕНЕННЫЙ ДВОР",
                description: "Колонно-ригельная конструкция наших домов позволяет выполнить любую планировку квартиры, а стены из жжёного" + " кирпича обеспечат высокий уровень шумоизоляции и комфортный микроклимат в вашей квартире круглый год.",
                image: _2
            },
            {
                title: "ТОРГОВАЯ ЗОНА",
                description: "Колонно-ригельная конструкция наших домов позволяет выполнить любую планировку квартиры, а стены из жжёного" + " кирпича обеспечат высокий уровень шумоизоляции и комфортный микроклимат в вашей квартире круглый год.",
                image: _3
            }
        ],
        chessBlock: {
            title: "ПРЕИМУЩЕСТВА",
            content: [
                {
                    title: "Конструкция",
                    description: "Колонно-ригельная конструкция наших домов позволяет выполнить любую планировку квартиры, а стены из жжёного кирпича обеспечат высокий уровень шумоизоляции и комфортный микроклимат в вашей квартире круглый год.",
                    img: construction,
                    mobileImg: chessBlockMobile_construction
                },
                {
                    title: "Двор без машин",
                    description: "Подземный паркинг позволит не переживать за размещение вашего авто и обеспечит комфортную и безопасную зону для прогулок с детьми в уютных зеленых дворах с многофункциональными игровыми площадками.",
                    img: noCarsInside,
                    mobileImg: chessBlockMobile_noCarsInside
                },
                {
                    title: "Бизнес",
                    description: "ЖК GOROD также предлагает помещения для коммерческих объектов на первом этаже — отличное решение для бизнеса, ведь здесь вас ожидает оживленный район с большим числом потенциальных потребителей услуг.",
                    img: business,
                    mobileImg: chessBlockMobile_business
                }
            ]
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
            book: "Забронировать"
        },
        galleryBlock: {
            title: "ГАЛЕРЕЯ"
        },
        buildingStepsBlock: {
            title: "ХОД СТРОИТЕЛЬСТВА"
        },
        locationBlock: {
            title: "ЛОКАЦИЯ",
            address: "Ташкент, Яшнабадский р-н, Мавлоно Ризови, 2",
            locationImg: locationPoing,
            phoneImg: phone,
            phone: "+998 90 123 45 67",
            mailImg: mail,
            mail: "test@mail.uz",
            websiteImg: website,
            website: "www.website.uz",
            telegramImg: telegram,
            telegram: "@telegram"
        },
        footerBlock: {
            navigation: [
                {
                    title: "О комплексе",
                    id: types/* EBlocks.WELCOME */.CL.WELCOME
                },
                {
                    title: "Преимущества",
                    id: types/* EBlocks.ADVANTAGES */.CL.ADVANTAGES
                },
                {
                    title: "Блоки",
                    id: types/* EBlocks.ROOM_SELECTOR */.CL.ROOM_SELECTOR
                },
                {
                    title: "Галерея",
                    id: types/* EBlocks.GALLERY */.CL.GALLERY
                },
                // { title: "Ход строительства", id: EBlocks.BUILDINGS },
                {
                    title: "Локация",
                    id: types/* EBlocks.LOCATION */.CL.LOCATION
                }
            ]
        }
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
            description: "Обеспечивает доступ к развитой инфраструктуре — все необходимые для " + "комфортной жизни локации в пешей доступности: рынок, продовольственные сетевые " + "маркеты, школы, детские сады, медицинские клиники, аптеки и общественный транспорт"
        },
        callMeBackModal: {
            title: "ОСТАВИТЬ ЗАЯВКУ!",
            description: "Оставьте свой номер, и мы перезвоним Вам.",
            namePlaceholder: "Имя",
            phonePlaceholder: "Номер телефона",
            buttonText: "ЖДУ ЗВОНКА"
        },
        header: [
            {
                title: "О комплексе",
                id: types/* EBlocks.ABOUT */.CL.ABOUT
            },
            {
                title: "Преимущества",
                id: types/* EBlocks.CHESS */.CL.CHESS
            },
            {
                title: "Блоки",
                id: types/* EBlocks.ROOM_SELECTOR */.CL.ROOM_SELECTOR
            },
            {
                title: "Галерея",
                id: types/* EBlocks.GALLERY */.CL.GALLERY
            },
            // { title: "Ход строительства", id: EBlocks.BUILDINGS },
            {
                title: "Локация",
                id: types/* EBlocks.LOCATION */.CL.LOCATION
            }
        ],
        welcomeBlock: {
            background: background,
            mobileBackground: backgroundMobile,
            description: "Выберите свой крепкий дом для крепкой семьи в одном из 13 блоков жилого комплекса",
            button: "Оставить заявку",
            title: "GOROD!",
            mobileTitle: "GOROD",
            mobileDescription: "Крепкий дом для крепкой семьи",
            menu: "МЕНЮ"
        },
        aboutBlock: {
            title: "О КОМПЛЕКСЕ",
            description: "На территории ЖК представлены 6, 8 и 10-этажные жилые дома с просторными террасами и балконами. Квартиры имеют площадь от 43 до 184 квадр" + "атных метров. Колонно-ригельная конструкция наших домов позволяет выполнить любую планировку квартиры, а стены из жжёного кирпича обеспечат " + "высокий уровень шумоизоляции и комфортный микроклимат в вашей квартире круглый год. ",
            advantages: [
                {
                    title: "Планировок",
                    count: "19"
                },
                {
                    title: "Парковочных мест",
                    count: "114"
                },
                {
                    title: "Квартир",
                    count: "87"
                }
            ],
            button: "Подробнее"
        },
        advantagesBlock: [
            {
                title: "МЕЖДУНАРОДНЫЕ СТАНДАРТЫ СТРОИТЕЛЬСТВА",
                description: "Колонно-ригельная конструкция наших домов позволяет выполнить любую планировку квартиры, а стены из жжёного" + " кирпича обеспечат высокий уровень шумоизоляции и комфортный микроклимат в вашей квартире круглый год.",
                image: _1
            },
            {
                title: "ОЗЕЛЕНЕННЫЙ ДВОР",
                description: "Колонно-ригельная конструкция наших домов позволяет выполнить любую планировку квартиры, а стены из жжёного" + " кирпича обеспечат высокий уровень шумоизоляции и комфортный микроклимат в вашей квартире круглый год.",
                image: _2
            },
            {
                title: "ТОРГОВАЯ ЗОНА",
                description: "Колонно-ригельная конструкция наших домов позволяет выполнить любую планировку квартиры, а стены из жжёного" + " кирпича обеспечат высокий уровень шумоизоляции и комфортный микроклимат в вашей квартире круглый год.",
                image: _3
            }
        ],
        chessBlock: {
            title: "ПРЕИМУЩЕСТВА",
            content: [
                {
                    title: "Конструкция",
                    description: "Колонно-ригельная конструкция наших домов позволяет выполнить любую планировку квартиры, а стены из жжёного кирпича обеспечат высокий уровень шумоизоляции и комфортный микроклимат в вашей квартире круглый год.",
                    img: construction,
                    mobileImg: chessBlockMobile_construction
                },
                {
                    title: "Двор без машин",
                    description: "Подземный паркинг позволит не переживать за размещение вашего авто и обеспечит комфортную и безопасную зону для прогулок с детьми в уютных зеленых дворах с многофункциональными игровыми площадками.",
                    img: noCarsInside,
                    mobileImg: chessBlockMobile_noCarsInside
                },
                {
                    title: "Бизнес",
                    description: "ЖК GOROD также предлагает помещения для коммерческих объектов на первом этаже — отличное решение для бизнеса, ведь здесь вас ожидает оживленный район с большим числом потенциальных потребителей услуг.",
                    img: business,
                    mobileImg: chessBlockMobile_business
                }
            ]
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
            book: "Забронировать"
        },
        galleryBlock: {
            title: "ГАЛЕРЕЯ"
        },
        buildingStepsBlock: {
            title: "ХОД СТРОИТЕЛЬСТВА"
        },
        locationBlock: {
            title: "ЛОКАЦИЯ",
            address: "Ташкент, Яшнабадский р-н, Мавлоно Ризови, 2",
            locationImg: locationPoing,
            phoneImg: phone,
            phone: "+998 90 123 45 67",
            mailImg: mail,
            mail: "test@mail.uz",
            websiteImg: website,
            website: "www.website.uz",
            telegramImg: telegram,
            telegram: "@telegram"
        },
        footerBlock: {
            navigation: [
                {
                    title: "О комплексе",
                    id: types/* EBlocks.WELCOME */.CL.WELCOME
                },
                {
                    title: "Преимущества",
                    id: types/* EBlocks.ADVANTAGES */.CL.ADVANTAGES
                },
                {
                    title: "Блоки",
                    id: types/* EBlocks.ROOM_SELECTOR */.CL.ROOM_SELECTOR
                },
                {
                    title: "Галерея",
                    id: types/* EBlocks.GALLERY */.CL.GALLERY
                },
                {
                    title: "Ход строительства",
                    id: types/* EBlocks.BUILDINGS */.CL.BUILDINGS
                },
                {
                    title: "Локация",
                    id: types/* EBlocks.LOCATION */.CL.LOCATION
                }
            ]
        }
    }
};


/***/ }),

/***/ 5691:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CL": () => (/* binding */ EBlocks),
/* harmony export */   "RN": () => (/* binding */ EFonts),
/* harmony export */   "SP": () => (/* binding */ ELang)
/* harmony export */ });
/* unused harmony export ERooms */
var EFonts;
(function(EFonts) {
    EFonts["GILROY"] = "Gilroy";
    EFonts["Austin"] = "Austin";
})(EFonts || (EFonts = {}));
var ERooms;
(function(ERooms) {
    ERooms["BALCONY"] = "balcony";
    ERooms["KITCHEN"] = "kitchen";
    ERooms["TOILET"] = "toilet";
    ERooms["hall"] = "hall";
    ERooms["BEDROOM"] = "bedroom";
})(ERooms || (ERooms = {}));
var EBlocks;
(function(EBlocks) {
    EBlocks["ABOUT"] = "about";
    EBlocks["WELCOME"] = "welcome";
    EBlocks["ADVANTAGES"] = "advantages";
    EBlocks["CHESS"] = "chess";
    EBlocks["ROOM_SELECTOR"] = "roomSelector";
    EBlocks["GALLERY"] = "gallery";
    EBlocks["BUILDINGS"] = "buildings";
    EBlocks["LOCATION"] = "location";
    EBlocks["FOOTER"] = "footer";
})(EBlocks || (EBlocks = {}));
var ELang;
(function(ELang) {
    ELang["RUS"] = "rus";
    ELang["UZB"] = "uzb";
})(ELang || (ELang = {}));


/***/ })

};
;