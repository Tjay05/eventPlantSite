const Gallery = () => {
  // Image Imports
  const toastPic = 'https://res.cloudinary.com/dolfampoa/image/upload/v1725468709/Diamond%20Dreams/IMG-20240904-WA0002_ayv4hx.jpg';
  const outingPic = 'https://res.cloudinary.com/dolfampoa/image/upload/v1725468710/Diamond%20Dreams/IMG-20240904-WA0001_zr2x64.jpg';
  const birthdayPic = 'https://res.cloudinary.com/dolfampoa/image/upload/v1725468709/Diamond%20Dreams/IMG-20240904-WA0004_ivfwzz.jpg';
  const couplePic = 'https://res.cloudinary.com/dolfampoa/image/upload/v1725468709/Diamond%20Dreams/IMG-20240904-WA0003_hxueg5.jpg';
  const gatheringPic = 'https://res.cloudinary.com/dolfampoa/image/upload/v1725468704/Diamond%20Dreams/IMG-20240904-WA0005_jisbqz.jpg';
  const celebrationPic = 'https://res.cloudinary.com/dolfampoa/image/upload/v1725468704/Diamond%20Dreams/IMG-20240904-WA0006_asm23d.jpg';
  const chairsPic = 'https://res.cloudinary.com/dolfampoa/image/upload/v1725468703/Diamond%20Dreams/IMG-20240904-WA0007_klgtyn.jpg';

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