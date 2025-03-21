export default function Contact() {
    return (
      <div>
        <h1>Contact Us</h1>
        <p>If you have any questions, feel free to reach out to us!</p>
        <form>
          <div>
            <label>Name:</label>
            <input type="text" id="name" name="name" />
          </div>
          <div>
            <label>Email:</label>
            <input type="email" id="email" name="email" />
          </div>
          <div>
            <label>Message:</label>
            <textarea id="message" name="message"></textarea>
          </div>
          <button type="submit">Send</button>
        </form>
      </div>
    );
  }
  