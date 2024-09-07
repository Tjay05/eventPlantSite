import { useState } from 'react';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const AcademyWrap = () => {
  const [swiper, setSwiper] = useState();

  const handleSlideChange = (e) => {
    e.preventDefault();
    swiper.slideNext();
  }

  const handlePrevClick = () => {
    if (swiper && swiper.activeIndex > 0) {
      swiper.slidePrev();
    }
  };
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [age, setAge] = useState('');
  const [expectation, setExpectation] = useState('');
  const [maritalStatus, setMaritalStatus] = useState('')
  const [experienceLevel, setExperienceLevel,] = useState('')
  const [submitting , setSubmitting] = useState(false)

  const constructFormData = () => {
    return {
      name: name,
      phone: phone,
      email: email,
      address: address,
      age: age,
      maritalStatus: maritalStatus,
      experienceLevel: experienceLevel,
      expectations:expectation
    };
  };
  
  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true)
    const formData = constructFormData();
    console.log(formData)
    try {
      // Perform fetching here, sending formData to the server
      // Example:
      const response = await fetch('https://diamondreams.onrender.com/academy', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      
      // Handle response
      // Example:
      if (response.ok) {
        console.log('Form data submitted successfully');
        setName('');
        setPhone('');
        setEmail('');
        setAddress('');
        setAge('');
        setMaritalStatus('');
        setExperienceLevel('');
        setExpectation('')
        setSubmitting(false)
      } else {
       setSubmitting(false)
        console.error('Failed to submit form data');
      }
    } catch (error) {
    setSubmitting(false)
      console.error('Error submitting form data:', error);
    }
  };

  const handleMaritalStatusChange = (e) => {
    setMaritalStatus(e.target.value);
  };

  const handleExperienceChange = (e) => {
    setExperienceLevel(e.target.value);
  };
  return (
    <div className='container'>
      <section>
        <h2>What is it About?</h2>
        <p className='academy'>
          At Usiju World Academy, we're dedicated to nurturing passion, fostering expertise, and providing a gateway to a fulfilling career or hobby within the dynamic world of weddings. Our academy stands as a comprehensive platform offering diverse educational opportunities, insights, and resources tailored to the ever-evolving landscape of the wedding industry.
        </p>
      </section>
      <section className="academySec">
        <h2>Core Elements</h2>
        <article>
          <ul>
            <li>
              <b>Courses and Workshops:</b>
              <p>Explore a diverse array of courses covering every facet of weddings, from event planning and design to bridal fashion, floral arrangements, etiquette, and more.</p>
            </li>
          </ul>
        </article>
        <article>
          <ul>
            <li>
            <b>Expert Guidance:</b>
            <p>Benefit from the wisdom and expertise of our seasoned professionals and industry leaders who impart invaluable insights and firsthand knowledge gained through years of experience.</p>
            </li>
          </ul>
        </article>
        <article>
          <ul>
            <li>
              <b>Skill Development and Hands-on Learning:</b>
              <p>Engage in hands-on learning experiences designed to nurture and enhance your skills, bridging the gap between theoretical knowledge and practical application.</p>
            </li>
          </ul>
        </article>
        <article>
          <ul>
            <li>
              <b>Flexible Learning Options:</b>
              <p>Embrace a variety of learning modes, including interactive in-person sessions, comprehensive online modules, engaging webinars, and collaborative discussions, tailored to suit diverse learning preferences and schedules.</p>
            </li>
          </ul>
        </article>
      </section>
      <section className='sectEnroll'>
        <h2>Become one of us and enroll now</h2>
        <article className='acadFormSwiPer'>
          <div className="oneOfUs"></div>
          <section className='contactLine'>
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={50}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              onSwiper={(instance) => setSwiper(instance)}
            >
              <form>
                <SwiperSlide>
                  <div className="form-fields">
                    <label htmlFor="name">Name</label>
                    <input type="text" id='name'value={name} onChange={e => setName(e.target.value)} />
                    <label htmlFor="phone">Phone</label>
                    <input type="number" id='phone' value={phone} onChange={e => setPhone(e.target.value)} />
                    <label htmlFor="email">Email</label>
                    <input type="email" id='email' value={email} onChange={e => setEmail(e.target.value)} />
                    <label htmlFor="Address">Address</label>
                    <input type="text" id="Address" value={address} onChange={e => setAddress(e.target.value)} />
                    <button className="swiper-button-next" onClick={handleSlideChange}>Next</button>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="form-fields">
                    <label htmlFor="age">Age</label>
                    <input type="text" id='age' value={age} onChange={e => setAge(e.target.value)} />
                    <label htmlFor="marital">Marital Status</label>
                    <div className="radioGroup">
                      <input type="radio" name="Marital Status" id="single" value="Single" checked={maritalStatus === 'Single'} onChange={handleMaritalStatusChange} />
                      <label htmlFor="single">Single</label>
                      <input type="radio" name="Marital Status" id="married" value="Married" checked={maritalStatus === 'Married'} onChange={handleMaritalStatusChange} />
                      <label htmlFor="married">Married</label>
                    </div>
                    <label htmlFor="experience">Experience Level</label>
                    <div className="radioGroup">
                    <input type="radio" name="Experience Level" id="beginner" value="Beginner" checked={experienceLevel === 'Beginner'} onChange={handleExperienceChange}/>
                      <label htmlFor="beginner">Beginner</label>
                      <input type="radio" name="Experience Level" id="Intermediate" value="Intermediate" checked={experienceLevel === 'Intermediate'} onChange={handleExperienceChange}/>
                      <label htmlFor="intermediate">Intermediate</label>
                    </div>
                    <label htmlFor="expectation">Expectation</label>
                    <input type="text" id='expectation' value={expectation} onChange={e=>setExpectation(e.target.value)}/>
                    <div className="butSwipNAv">
                      <button onClick={handlePrevClick}>Prev</button>
                      <button disabled={submitting} onClick={handleSubmit} >{submitting? 'Posting...' : 'Done'}</button>
                    </div>
                  </div>
                </SwiperSlide>
              </form>
            </Swiper>
          </section>
        </article>
      </section>
    </div>
  );
}
 
export default AcademyWrap;