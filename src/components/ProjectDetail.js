import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import projectsData from "./projectsData";
import { motion } from "framer-motion";

export default function ProjectDetail() {
  const projects = projectsData.map((p, i) => {
    return (
      <Card style={{ width: "18rem" }} key={i} className="mb-5">
        <Card.Img variant="top" src={p.image} />
        <Card.Body>
          <Card.Title>{p.title}</Card.Title>
          <Card.Text>{p.description}</Card.Text>
          <div className="d-flex justify-content-between">
            <a
              href={p.demo}
              className="btn btn-primary btn-lg active"
              role="button"
              aria-pressed="true"
            >
              Demo
            </a>
            <a
              href={p.code}
              className="btn btn-primary btn-lg active"
              role="button"
              aria-pressed="true"
            >
              Code
            </a>
          </div>
        </Card.Body>
      </Card>
    );
  });
  return <>{projects}</>;
}
