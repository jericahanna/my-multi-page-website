export default function Contact() {
    return (
      <div>
        <h1>Contact Us</h1>
        <p>If you have any questions, feel free to reach out to us!</p>
        <img src="/contact-image.jpg" alt="Contact Image" width="300" />
        <form>
          <div>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" />
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message"></textarea>
          </div>
          <button type="submit">Send</button>
        </form>
      </div>
    );
  }
  