import currencies from "./img/currency-converter.gif";
import journeys from "./img/journeys.gif";
import portfolio from "./img/portfolio.gif";
import drudge from "./img/drudge.jpg";
export const projectsData = [
  {
    key: 1,
    image: currencies,
    title: "Currency Converter",
    description:
      "React and Axios are to used to call an API and display exchange rates between currencies.",
    demo: "http://currency.davidhunter.io",
    code: "https://github.com/davidhunterjs/currency-converter",
  },
  {
    key: 2,
    image: journeys,
    title: "Journeys Website",
    description:
      "A static website made with Sass, CoffeeScript, and Gulp.js that uses a Parallax Effect.",
    demo: "http://journeys.davidhunter.io",
    code: "http://github.com/davidhunterjs/journeys/",
  },

  {
    key: 3,
    image: portfolio,
    title: "React Portfolio",
    description:
      "This website is deployed to AWS Amplify, created with React-Router, Framer-Motion and Bootstrap; using an AWS Lambda backend for the form email.",
    demo: "http://davidhunter.io",
    code: "https://github.comdavidhunterjs/react-portfolio",
  },
  {
    key: 4,
    image: drudge,
    title: "Drudge Reader",
    description:
      "A full stack javascript app that scrapes the drudge report website and displays the content in a more pleasing manner with real-time updates. The app was made using Express, Mongoose and Redux",
    demo: "https://trippy.wtf",
    code: "https://github.comdavidhunterjs/drudge-reader-server",
  },
];
export default projectsData;
