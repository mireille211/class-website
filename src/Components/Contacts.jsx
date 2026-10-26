
import { useState } from "react";

function Contact() {
  const [message, setMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (message.trim() !== "") {
      alert("Your message: " + message);
      setMessage("");
    }
  }

  return (
    <section>
      <h2>Contact Us</h2>

      <p>Email: class@example.com</p>
      <p>Phone: 0780000000</p>

      <form onSubmit={handleSubmit}>
        <label>Enter your message: </label>

        <input
          type="text"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          placeholder="Write a message"
        />

        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}

export default Contact;
