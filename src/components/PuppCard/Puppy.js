import './Puppy.css'
import noneImage from '../asset/noImage.png'

const Puppy = ({ result }) => {
  


/**
 *  Take in the "results - array" of pets in the first page given from the Petfinder API
 * 
 */
  return (

    /**Iterates through the results array and 
     * output desired attributes: 
     * Image - Name - Age - Breed- Id */
    <>
     {result && result.map((e) =>{
       
       let petImageLarge = e.photos &&  e.photos[0] && e.photos[0].large;

       return(
         <div key={e.id} className="pet-card-wrapper">
           { petImageLarge ? <div className='pet-image-container'><img alt='pet' src={petImageLarge}/> </div>
           : <div className='pet-image-container'><img alt='unavailable pet' src={noneImage}/> </div> }
           <div className='pet-info-container'>
              <p className='pet-name'>{e.name}</p>
              <p className='pet-breed'>{e.breeds.primary}</p>
              <p className='pet-age'>{e.age}</p>
           </div>
           
           
           </div>
       )
     })

     }
   
    
    </>
  )
}

export default Puppy
