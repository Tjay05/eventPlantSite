const Contact = () => {
  return (
    <>
      <section>
        <h2>CONTACT US</h2>
        <article className="card">
          <h3>Address</h3>
          <p>Anywhere, any city, 44533</p>
        </article>
        <article className="card">
          <h3>Call Us</h3>
          <p>Call us: +234700000000</p>
        </article>
        <article className="card">
          <h3>Mail Us</h3>
          <p>info@chochocho.com</p>
        </article>
      </section>
      <section>
        <h2>MAIL US</h2>
        <div className="contact-container">
          <form>
            <div className="">
              <input placeholder="Name" type="text" />
              <input placeholder="Email" type="email" />
            </div>
            <input placeholder="Subject" type="text" />
            <textarea name="" placeholder="Message" id="" cols="30" rows="10"></textarea>
            <button>Send</button>
          </form>
          <iframe src="" frameborder="0"></iframe>
        </div>
      </section>
    </>
  );
}
 
export default Contact;