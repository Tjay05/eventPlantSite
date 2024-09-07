import { useNavigate } from "react-router-dom";

const Home = () => {
  const history = useNavigate();

  return (
    <>
      <section id="Home">
        <h1>We Create, You Celebrate</h1>
        <article>
          <h2>Usuji World</h2>
          <h3>Your personal event planner</h3>
          <p>
            We believe that it is all about the BIG DREAMS and the small details!
          </p>
          <button onClick={() => history('Contact')}>Book Now</button>
        </article>
      </section>
    </>
  );
};

export default Home;
