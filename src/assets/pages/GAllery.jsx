// Image Imports
import couplePic from '../images/couple.png';
import outingPic from '../images/outing.png';
import gatheringPic from '../images/gathering.png';
import toastPic from '../images/toast.png';
import birthdayPic from '../images/birthday.png';
import celebrationPic from '../images/celebration.png';
import chairsPic from '../images/chairs.png';

const Gallery = () => {
  return (
    <>
      <section>
        <h2>Gallery</h2>
        <aside>
          <img src={couplePic} alt="" />
          <img src={outingPic} alt="" />
          <img src={gatheringPic} alt="" />
          <img src={toastPic} alt="" />
          <img src={birthdayPic} alt="" />
          <img src={celebrationPic} alt="" />
          <img src={chairsPic} alt="" />
        </aside>
      </section>
    </>
  );
}
 
export default Gallery;