import currencies from "./img/currency-converter.gif";
import journeys from "./img/journeys.gif";
import portfolio from "./img/portfolio.gif";
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
];
export default projectsData;
