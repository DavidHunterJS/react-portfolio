import currencies from "./img/currency2.jpg";
import journeys from "./img/journeys.gif";
import scrimba from "./img/scrimba-form.gif";
export const projectsData = [
  {
    key: 1,
    image: currencies,
    title: "Currency Converter",
    description:
      "React and Axios are to used to call an API and display exchange rates between currencies. -currently under construction-",
    demo: "https://currency.davidhunter.io",
    code: "https://github.com/davidhunterjs/currency-converter",
  },
  {
    key: 2,
    image: journeys,
    title: "Journeys Website",
    description:
      "A static website made with Sass, CoffeeScript, and Gulp.js that uses a Parallax Effect",
    demo: "http://journeys.davidhunter.io",
    code: "http://github.com/davidhunterjs/journeys/",
  },

  {
    key: 3,
    image: scrimba,
    title: "Scrimba Form",
    description:
      "A form created with React and framer-motion for the Scrimba Weekly Web Dev Challenege.",
    demo: "https://scrimba-form.davidhunter.io",
    code: "https:// github.comdavidhunterjs/scrimba-form",
  },
];
export default projectsData;
