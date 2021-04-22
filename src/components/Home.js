import { motion } from "framer-motion";

export default function Home() {
  const heroVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 1.2 } },
    exit: {
      x: "-200vw",
      transition: { ease: "easeInOut" },
    },
  };
  const resumeVariants = {
    initial: { x: "-150vh" },
    animate: { x: 0, transition: { type: "tween", duration: 2 } },
    whileHover: { textShadow: "0px 0px 8px rgb(255, 255, 255" },
    exit: {
      x: "-100vw",
      opacity: 0,
      transition: { type: "spring", duration: 1 },
    },
  };
  return (
    <section id="hero">
      <div className="hero-container">
        <div className="overlay"></div>
        <div className="image-container"></div>
      </div>
      <div className="hero-text">
        <motion.h1
          key="h1"
          variants={heroVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <span className="firstWord">Solving</span>
          <br />
          Problems & Creating
          <br />
          Solutions
        </motion.h1>
        <motion.a
          href="/David_Hunter_Resume_04.21.21.pdf"
          target="_blank"
          rel="noopener noreferrer"
          key="a"
          className="resume-cta"
          variants={resumeVariants}
          initial="initial"
          animate="animate"
          whileHover="whileHover"
          exit="exit"
        >
          <span className="resume-text">Resume</span>
        </motion.a>
      </div>
    </section>
  );
}
