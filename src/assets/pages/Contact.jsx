const Contact = () => {
  return (
    <>
      <section id="Contact">
        <div className="container">
          <h2>CONTACT US</h2>
          <div className="contacts-container">
            <article className="card">
              <h3>Address</h3>
              <p>Anywhere, any city, 443533</p>
            </article>
            <article className="card">
              <h3>Call Us</h3>
              <p>Call us: +23470000</p>
            </article>
            <article className="card">
              <h3>MailUs</h3>
              <p>info@chochocho.com</p>
            </article>
          </div>
        </div>
      </section>
      <section id="Mail">
        <div className="container">
          <h2>MAIL US</h2>
          <div className="contact-container">
            <form>
              <div className="top-inputs">
                <input placeholder="Name" type="text" />
                <input placeholder="Email" type="email" />
              </div>
              <input placeholder="Subject" type="text" />
              <textarea name="" placeholder="Message" id="" cols="30" rows="10"></textarea>
              <button>Send</button>
            </form>
            {/* <iframe src="" frameborder="0"></iframe> */}
          </div>
        </div>
      </section>
    </>
  );
}
 
export default Contact;