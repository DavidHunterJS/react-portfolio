import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { motion } from "framer-motion";

export default function Contact() {
  const [validated, setValidated] = useState(false);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handlePost = () => {
    const payload = {
      email: email,
      desc: message,
    };
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    };
    const url =
      "https://0rv13tkjb6.execute-api.us-west-2.amazonaws.com/api/contact";
    fetch(url, requestOptions)
      .then(async (response) => {
        const data = await response.json();
        if (!response.ok) {
          const error = (data && data.message) || response.status;
          console.log(`Error 1: ${error}`);
          return Promise.reject(error);
        } else {
          console.log(data);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.stopPropagation();
    } else {
      setValidated(true);
      handlePost();
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
      transition: { type: "spring" },
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
            onSubmit={(e) => handleSubmit(e)}
            noValidate
            validated={validated}
            className="p-3"
          >
            <Form.Text>
              <h2>Get in Touch</h2>
            </Form.Text>
            <Form.Text>
              <p>
                Please fill out the quick form and I&apos;ll get back to you
                with lightning speed
              </p>
            </Form.Text>
            <Form.Group controlId="formBasicEmail">
              <Form.Label srOnly>Your email address</Form.Label>
              <Form.Control
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
              <Form.Label srOnly>Readable text</Form.Label>
              <Form.Control
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
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
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </motion.div>
      </div>
    </div>
  );
}
