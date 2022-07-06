import { motion } from "framer-motion";
import Card from "react-bootstrap/Card";

import projectsData from "./projectsData";
const cardVariants = {
  whileHover: { scale: 1.1 },
};

export default function ProjectDetail() {
  const projects = projectsData.map((p, i) => {
    return (
      <motion.div key={i} variants={cardVariants} whileHover="whileHover">
        <Card style={{ width: "18rem" }} className="mb-5">
          <Card.Img variant="top" src={p.image} />
          <Card.Body>
            <Card.Title>{p.title}</Card.Title>
            <Card.Text>{p.description}</Card.Text>
            <div className="d-flex justify-content-between">
              <a
                href={p.demo}
                className="btn btn-primary btn-lg active"
                role="button"
                target="_blank"
                rel="noopener noreferrer"
              >
                Demo
              </a>
              <a
                href={p.code}
                className="btn btn-primary btn-lg active"
                role="button"
                aria-pressed="true"
                target="_blank"
                rel="noopener noreferrer"
              >
                Code
              </a>
            </div>
          </Card.Body>
        </Card>
      </motion.div>
    );
  });
  return <>{projects}</>;
}
