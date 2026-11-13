import "../styles/contact.css";
import "../styles/animatedBackground.css";
import { Mail } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
import { useState } from "react";


function Contact() {
  // 1. Declare state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitStatus, setSubmitStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  // 2. Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    // Allow another submission when the visitor edits the form
    setSubmitStatus("");
  };

  // 3. Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prevent duplicate submissions
    if (submitStatus === "success") return;


    setIsSubmitting(true);
    setSubmitError("");

    try {
      const response = await fetch(
        "https://formspree.io/f/xjywkjkv",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        // Formspree accepted the submission
        setFormData({
          name: "",
          email: "",
          message: "",
        });

      //console.log("Form submitted:", formData);

        setSubmitStatus("success");
      } else {
        const result = await response.json();

        setSubmitError(
          result.errors
            ? result.errors.map((error) => error.message).join(", ")
            : "Unable to send your message. Please try again."
        );
      }
    } catch (error) {
      setSubmitError(
        "Network error. Please check your connection and try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };


  return (
    <section className="contact animated-background" id="contact">
      <h2>Let's Connect</h2>

      <p className="contact-intro">
        Have a project in mind or an opportunity to discuss?
        I'd love to hear from you.
      </p>

      <div className="contact-content">


        <div className="contact-info">
          <h3>Get in Touch</h3>

          <div className="contact-item">
            <Mail size={22} color="#61dafb" />
            <a href="mailto:your.email@example.com">
              your.email@example.com
            </a>
          </div>

          <div className="contact-item">
            <FaLinkedin size={22} color="#61dafb" />
            <a
              href="https://www.linkedin.com/in/your-profile"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn Profile
            </a>
          </div>
        </div>


        <div className="contact-form">
          <h3>Send Me a Message</h3>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            />

            <button
              type="submit"
              disabled={isSubmitting || submitStatus === "success"}
            >
              {isSubmitting
                ? "Sending..."
                : submitStatus === "success"
                  ? "Message Sent"
                  : "Send Message"}
            </button>

            {submitError && (
              <div className="error-message" role="alert">
                {submitError}
              </div>
            )}

          </form>

          {submitStatus === "success" && (
            <div className="success-toast" role="status">
              <span>✓</span>
              Message sent successfully! Thank you for contacting me.
            </div>
          )}

        </div>

      </div>
    </section>
  );
}

export default Contact;
