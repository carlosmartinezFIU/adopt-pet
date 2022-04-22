import topPic from '../asset/pup-toy.jpg';
import cat from '../asset/cat-pic.png';
import parrot from '../asset/parrot.png';
import catDog from '../asset/dog-cat.jpg';
import './Footer.css';


const Footer = () => {
  return (
    /**Footer Component consist of four images  cat - dog - bird*/
    <div className="footer-wrapper">
        <div className='top-pet-image-wrapper'>
            <img className='top-image' alt='pup with toy' src={topPic}/>
            <div className='puppy-toy-title'>
                <div className='the-pet-title'><p>The Pet</p></div>
                <div className='finder-title-footer'><p>Finder</p></div>
            </div>
        </div>

        <div className='bottom-image-wrapper'>
            <div className='bottom-left-image-container'> 
                  <img src={cat} alt='cat looking up'/>
                  <div className='cat-title-container'>
                      <p className='pet-love-title'>Pet Love</p>
                      <p className='cat-description'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled</p>
                  </div>
            </div>

          <div className='bottom-right-image-container'>
            <div className='parrot-image-container'>
                <img className='parrot-image' src={parrot} alt='parrot on hand'/>
            </div>

            <div className='catDog-image-container'>
                  <div className='circle-image-pet'>
                       <img className="cat-dog-image" src={catDog} alt='cat laying with dog'/>
                  </div>

                  <div className='cat-dog-info-container'>
                     <div className='all-about-title'> <p>All About Pets</p> </div> 
                      <p className='all-about-info' >Lorem Ipsum is simply dummy text of the printing</p>
                      <p className='read-more-info '>Read More...</p>
                  </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Footer