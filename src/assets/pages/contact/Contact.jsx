import { useState } from "react";

const Contact = () => {
  const brandName = 'Usuji World Event Centre';
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('')
  const [sending, setSending] = useState(false);
  const constructFormData = () => {
    return {
      name: name,
      phone: phone,
      email: email,
      message: message
    };
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true)
    const formData = constructFormData();
    
    try {
      const response = await fetch('https://diamondreams.onrender.com/contact-us', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        console.log('Form data submitted successfully');
        setName('');
        setPhone('');
        setEmail('');
        setMessage('');
        setSending(false); 
      } else {
        console.error('Failed to submit form data');
      }
    } catch (error) {
      setSending(false); 
      console.error('Error submitting form data:', error);
    }
  };

  return (
    <>
      <section id="Contact">
        <div className="container">
          <h2>CONTACT US</h2>
          <p className="contactInfo">
            Step into a world of bridal elegance at {brandName}, where we offer
            a carefully curated collection of wedding dresses and accessories to
            make your special day truly magical. Explore our diverse range, from
            timeless classics to on-trend styles, designed to suit every bride's
            unique vision. Our commitment is to provide a personalized experience,
            helping you find 'the one' among our stunning gowns and adornments.
            Celebrate your individuality with our thoughtfully crafted pieces,
            ensuring you radiate confidence and beauty on your wedding day. Explore our diverse range, from timeless classics to
            on-trend styles, designed to suit every bride's unique vision.
          </p>
          <div className="contacts-container">
            <article className="card">
              <h3>Address</h3>
              <p>Anywhere, any city, 443533</p>
            </article>
            <article className="card">
              <h3>Call Us</h3>
              <p>Call Us: +2347000000</p>
            </article>
            <article className="card">
              <h3>Mail Us</h3>
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
                <input
                  type="text"
                  id="name"
                  value={name}
                  placeholder='Name'
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  type="number"
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Phone Number"
                />
              </div>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
              />
              <textarea
                placeholder="Message..."
                name=""
                id="message"
                cols="30"
                rows="8"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
              <button onClick={handleSubmit}>Send</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
 
export default Contact;