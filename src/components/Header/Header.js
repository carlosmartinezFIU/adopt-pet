import dogImage from '../asset/dog-back.jpg';
import "./Header.css";

const Header = () => {
  return (
    /**Header Component consist of Dog image with an added title overlaying image */
    <div className='header-wrapper'>
        <div className='header-image-container'>
            <img alt="dog" src={dogImage} className="puppy-image" />
        </div>

        <div className='header-description'>
            <p>
                Not only people need a home
            </p>
        </div>
        
    </div>
  )
}

export default Header