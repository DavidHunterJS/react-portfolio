import currencies from "./img/currency2.jpg";
import utorrent from "./img/utorrent3.png";
import journeys from "./img/journeys.png";
import scrimba from "./img/scrimba-form.webp";
export const projectsData = [
  {
    key: 1,
    image: currencies,
    title: "Currency Converter",
    description:
      "Convert the world's currencies, automatically getting the latest exchange rates from the web",
    demo: "https://currency.davidhunter.io",
    code: "https://github.com/davidhunterjs/currency-converter",
  },
  {
    key: 2,
    image: journeys,
    title: "Journeys Website",
    description:
      "A website for a company that works with developmentally disabled adults",
    demo: "http://journeys.davidhunter.io",
    code: "http://github.com/davidhunterjs/journeys/",
  },

  {
    key: 3,
    image: scrimba,
    title: "Scrimba Form",
    description:
      "A form I made using React and framer-motion for the Scrimba weekly web dev challenege.",
    demo: "https://scrimba-form.davidhunter.io",
    code: "https:// github.comdavidhunterjs/scrimba-form",
  },
];
export default projectsData;
