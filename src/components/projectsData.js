import currencies from "./img/currency2.jpg";
import utorrent from "./img/utorrent3.png";
import journeys from "./img/journeys.png";
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
    image: utorrent,
    title: "Tracker Collector",
    description: "A curated list of public torrent trackers",
    demo: "https://davidhunter.io/tracker-collector",
    code: "https://github.com/davidhunterjs/tracker-collector",
  },
];
export default projectsData;
