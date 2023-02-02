import {
  html_img,
  css_img,
  js_img,
  react_img,
  reactRouter_img,
  redux_img,
  motion_img,
  antd_img,
  mUi_img,
  bootstrap_img,
  strapi_img,
  node_img,
  figma_img,
  gitHub,
  portfolioImg,
  marketImg
} from '../img/index'

export const stackData = [
  [
    {
      name: 'HTML5',
      percent: 95,
      img: html_img
    },
    {
      name: 'CSS3',
      percent: 90,
      img: css_img
    },
    {
      name: 'JavaScript',
      percent: 90,
      img: js_img
    }
  ],
  [
    {
      name: 'React',
      percent: 92,
      img: react_img
    },
    {
      name: 'React-Router',
      percent: 85,
      img: reactRouter_img
    },
    {
      name: 'Redux/RTK',
      percent: 70,
      img: redux_img
    },
    {
      name: 'Framer Motion',
      percent: 50,
      img: motion_img
    }
  ],
  [
    {
      name: 'Ant Design',
      percent: 90,
      img: antd_img
    },
    {
      name: 'Material UI',
      percent: 62,
      img: mUi_img
    },
    {
      name: 'Bootstrap 5',
      percent: 76,
      img: bootstrap_img
    }
  ],
  [
    {
      name: 'Strapi',
      percent: 71,
      img: strapi_img
    },
    {
      name: 'NodeJS',
      percent: 41,
      img: node_img
    }
  ], [
    {
      name: 'Figma',
      percent: 63,
      img: figma_img
    },
    {
      name: 'GitHub',
      percent: 57,
      img: gitHub
    }
  ]]

export const portfolioData = [
  {
    name: 'Сайт-визитка web-разработчика',
    type: 'landing page',
    time: '~2 дня',
    stack: 'HTML5,CSS3,JavaScript,Figma,WordPress',
    img: portfolioImg,
    url: 'https://dbolbit.github.io/portfolio/'
  },
  {
    name: 'Интернет-магазин',
    type: 'SPA',
    time: '~ 1 месяц',
    stack: 'HTML5,CSS3,React,React-Route,Redux Toolkit,Framer-Motion,Ant Design,Figma,Strapi',
    img: marketImg,
    url: 'https://dbolbit.github.io/market/#/'
  }
]