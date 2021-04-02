import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { motion } from "framer-motion";

export default function Contact() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.stopPropagation();
    } else {
      setValidated(true);
      console.log("Submitted");
    }
  };

  const contactVariants = {
    initial: { y: "-100vh" },
    animate: {
      y: 0,
      transition: {
        type: "spring",
        damping: 15,
        mass: 2,
        staggerChildren: 0.5,
      },
    },
    exit: {
      y: "-100vh",
      transition: { type: "spring", when: "afterChildren" },
    },
  };
  const childVariants = {
    initial: { y: "-100vh" },
    animate: {
      y: 0,
    },
  };
  return (
    <div className="image-container no-animation">
      <div className="static-bg overlay contact">
        <motion.div
          variants={contactVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <Form
            noValidate
            validated={validated}
            onSubmit={(e) => handleSubmit(e)}
            className="p-3"
            variants={childVariants}
          >
            <Form.Text>
              <h2 variants={childVariants}>Get in Touch</h2>
            </Form.Text>
            <Form.Text>
              <p variants={childVariants}>
                Please fill out the quick form and I&apos;ll get back to you
                with lightning speed
              </p>
            </Form.Text>

            <Form.Group controlId="formBasicEmail">
              <Form.Label srOnly>Your email address</Form.Label>
              <Form.Control
                required
                type="email"
                placeholder="Your email address"
              />
              <Form.Control.Feedback tooltip>Looks Good!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid" tooltip>
                Please enter your email address.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formBasicTextarea">
              <Form.Label srOnly>Password</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                required
                type="textarea"
                placeholder="Type a message..."
              />
              <Form.Control.Feedback tooltip>Looks Good!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid" tooltip>
                Please type a message.
              </Form.Control.Feedback>
            </Form.Group>
            <Button variant="primary" type="submit" variants={childVariants}>
              Submit
            </Button>
          </Form>
        </motion.div>
      </div>
    </div>
  );
}
