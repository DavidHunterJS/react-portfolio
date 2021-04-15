import { useState } from "react";
import { useHistory } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Toast from "react-bootstrap/Toast";
import { motion } from "framer-motion";

export default function Contact() {
  const [validated, setValidated] = useState(false);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [showToast, setShowToast] = useState(false);
  const history = useHistory();

  const handleFormReset = () => {
    setTimeout(() => {
      history.push("/contact");
    }, 5000);
  };
  const handleShow = () => {
    setShowToast(!showToast);
  };
  const handlePost = () => {
    const payload = {
      name: name,
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
          handleShow();
          handleFormReset();
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
      handleShow();
      // handlePost();
    }
  };
  // LIVE FORM VALIDATION
  // THANKS stackoverflow.com/questions/43481237/bootstrap-4-form-validation
  const handleValidate = (e) => {
    const input = e.currentTarget;
    //reset
    input.classList.remove("is-invalid");
    input.classList.remove("is-valid");

    if (input.checkValidity() === false) {
      input.classList.add("is-invalid");
    } else {
      input.classList.add("is-valid");
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
          exit="exit"
          id="toasty"
          aria-live="polite"
          aria-atomic="true"
          style={{
            position: "absolute",
            minHeight: "100px",
          }}
        >
          <Toast show={showToast}>
            <Toast.Header>
              <img
                src="holder.js/20x20?theme=sky"
                className="rounded mr-2"
                alt=""
              />
              <strong className="mr-auto">Success</strong>
              <small>just now</small>
            </Toast.Header>
            <Toast.Body>
              Thanks {name}! Your message was successfully emailed to me.
            </Toast.Body>
          </Toast>
        </motion.div>
        <motion.div
          variants={contactVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          {/* THE FORM STARTS HERE */}
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
            <Form.Group controlId="formBasicText">
              <Form.Label srOnly>Your name</Form.Label>
              <Form.Control
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                type="text"
                placeholder="Your Name"
                onBlur={handleValidate}
              />
              <Form.Control.Feedback type="invalid" tooltip>
                Please enter your name.
              </Form.Control.Feedback>
              <Form.Control.Feedback tooltip>Looks Good!</Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label srOnly>Your email address</Form.Label>
              <Form.Control
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                type="email"
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                placeholder="Your email address"
                onBlur={handleValidate}
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
                onBlur={handleValidate}
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
