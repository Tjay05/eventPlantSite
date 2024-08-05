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
    <section id='Gallery'>
      <div className="container">
        <h2>Gallery</h2>
        <aside>
          <img className='gallery-item' src={couplePic} alt="" />
          <img className='gallery-item' src={outingPic} alt="" />
          <img className='gallery-item' src={gatheringPic} alt="" />
          <img className='gallery-item' src={birthdayPic} alt="" />
          <img className='gallery-item' src={chairsPic} alt="" />
          <img className='gallery-item' src={celebrationPic} alt="" />
          <img className='gallery-item' src={toastPic} alt="" />
        </aside>
      </div>
    </section>
  )
}
 
export default Gallery;