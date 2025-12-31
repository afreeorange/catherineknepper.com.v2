export const Contact = () => (
  <section id="contact">
    <h2>Contact</h2>
    <h3>
      Ready to discuss your project? Please reach out and I'll get in touch with
      you soon!
    </h3>
    <form method="POST" name="contact">
      <input type="hidden" name="form-name" value="contact" />
      <p>
        <label>
          <span>Your Name</span> <input type="text" name="name" />
        </label>
      </p>
      <p>
        <label>
          <span>Your Email</span> <input type="email" name="email" />
        </label>
      </p>
      <p>
        <label>
          <span>Message</span> <textarea name="message"></textarea>
        </label>
      </p>
      <p>
        <button type="submit">Send</button>
      </p>
    </form>
  </section>
);
