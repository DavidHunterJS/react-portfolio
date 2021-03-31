import { NavLink, Switch, Route, useLocation } from "react-router-dom";
import Home from "./Home";
import Projects from "./Projects";
import Contact from "./Contact";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const location = useLocation();
  console.log(location);
  const navVariants = {
    initial: { y: -250 },
    animate: { y: 0, transition: { delay: 0.7, duration: 1.2 } },
  };
  return (
    <div className="">
      <motion.nav
        className="navbar"
        variants={navVariants}
        initial="initial"
        animate="animate"
      >
        <NavLink exact to="/" id="name" activeClassName="selected-text">
          <span className="d-none d-md-inline">David Hunter</span>
          <span className="material-icons-outlined d-sm-inline d-md-none">
            home
          </span>{" "}
        </NavLink>

        <NavLink to="projects" activeClassName="selected-text">
          <span className="d-none d-md-inline">Projects</span>
          <span className="material-icons-outlined d-sm-inline d-md-none">
            source
          </span>{" "}
        </NavLink>

        <NavLink to="contact" activeClassName="selected-text">
          <span className="d-none d-md-inline">Contact</span>
          <span className="material-icons-outlined d-sm-inline d-md-none">
            contact_support
          </span>{" "}
        </NavLink>
      </motion.nav>

      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.key}>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}
