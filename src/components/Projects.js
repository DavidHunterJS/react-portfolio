import ProjectDetail from "./ProjectDetail";
import { motion } from "framer-motion";

export default function Projects() {
  const projectsVariants = {
    hide: { y: "100vh" },
    show: {
      y: 0,
      transition: {
        type: "spring",
        damping: 15,
        mass: 2,
      },
      whileHover: { scale: 1.1 },
    },
    exit: {
      y: "100vh",
    },
  };
  const headerVariants = {
    hide: { y: "-100vh" },
    show: { y: 0, transition: { type: "spring", damping: 20, mass: 2 } },
    exit: { y: "-100vh", transition: { duration: 1 } },
  };

  return (
    <div className="image-container no-animation">
      <div className="static-bg overlay">
        <motion.h2
          className="projects-header"
          variants={headerVariants}
          initial="hide"
          animate="show"
          exit="exit"
        >
          My Personal Projects
        </motion.h2>
        <motion.div
          className="projectDetail"
          variants={projectsVariants}
          initial="hide"
          animate="show"
          exit="exit"
        >
          <ProjectDetail variants={projectsVariants} />
        </motion.div>
      </div>
    </div>
  );
}
