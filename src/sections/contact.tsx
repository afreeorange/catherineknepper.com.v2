export const Contact = () => (
  <section id="contact" aria-labelledby="contact-heading">
    <h2 id="contact-heading">Contact</h2>
    <h3>
      Ready to discuss your project? Please reach out and I&#8217;ll get in touch with
      you soon!
    </h3>
    <section-wrapper>
      <form method="POST" name="contact">
        <input type="hidden" name="form-name" value="contact" />
        <p>
          <label>
            <span>Your Name</span>{" "}
            <input
              type="text"
              name="name"
              required
              aria-required="true"
              autocomplete="name"
            />
          </label>
        </p>
        <p>
          <label>
            <span>Your Email</span>{" "}
            <input
              type="email"
              name="email"
              required
              aria-required="true"
              autocomplete="email"
            />
          </label>
        </p>
        <p>
          <label>
            <span>Message</span>{" "}
            <textarea name="message" required aria-required="true"></textarea>
          </label>
        </p>
        <p>
          <button type="submit">
            <span>Send</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              height="1em"
              width="1em"
              aria-hidden="true"
            >
              <path d="M16.1 260.2c-22.6 12.9-20.5 47.3 3.6 57.3L160 376v103.3c0 18.1 14.6 32.7 32.7 32.7 9.7 0 18.9-4.3 25.1-11.8l62-74.3 123.9 51.6c18.9 7.9 40.8-4.5 43.9-24.7l64-416c1.9-12.1-3.4-24.3-13.5-31.2s-23.3-7.5-34-1.4l-448 256zm52.1 25.5L409.7 90.6 190.1 336l1.2 1-123.1-51.3zm335.1 139.7-166.6-69.5 214.1-239.3-47.5 308.8z"></path>
            </svg>
          </button>
        </p>
      </form>
    </section-wrapper>
  </section>
);
