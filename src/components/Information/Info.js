import './Info.css';
import { useState }  from 'react';
import { BsSearch } from 'react-icons/bs'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import pugImage from '../asset/pngwing.com.png';

toast.configure();
const Info = ({ update }) => {

  /**
   * States Usage:
   * Pet - Users input consisting of Dog - Cat - Rabbit - Bird
   * 
   * Zipcode - Users input desired zip for location query
   *  
   * Info  changes the placeholder in input w/ given above choices
   */
  const [pet, setPet] = useState('');
  const [zipcode, setZipcode] = useState("");
  const [info, setInfo] = useState("'Cat'");


/** Function called to pass input form value
 * Checks if there is an incorrect Zipcode
 * Checks if there is an incorrect pet 
 * Validate Zipcode 
*/
  const handleSubmit = e =>{
    e.preventDefault();
    if(!zipcode){
      emptyZip();
    }
    else if(!zipValidation(zipcode)){
      wrongZip()
    }

    if(!pet){
      emptyPet();
    }
    if(pet !== 'Cat' || 
            pet !== 'Dog' ||
            pet !== 'Bird' ||
            pet !== 'Rabbit')
    {
        petVali();
    }

    update({zipcode, pet})
    setZipcode('');
    setPet('');

  }


/**Toast notification for empty zip field */
  const emptyZip = () =>{
      toast.error('Enter Zipcode!');
  }

/**Toast notification for invalid format zip field */
  const wrongZip = () =>{
    toast.error('Enter Valid Zipcode!');
}

/**Toast notification for empty pet field */
const emptyPet = () =>{
  toast.error('Enter Pet!');
}

/**Toast notification for incorrect pet field */
const petVali = () =>{
  toast.error('Enter Cat - Dog - Bird - Rabbit Only');
}




//Validate Zipcode entered
  const zipValidation = (element) =>{
     return /^\d{5}(-\d{4})?$/.test(element)
  }

  /**Updates the placeholder with given array */
  const updatePlaceholder = () =>{
      let delay = 5500;
      let inputArray = ["'Cat'", "'Dog'", "'Bird'", "'Rabbit'"]

      for(let x = 0; x < inputArray.length; x++){
          set(inputArray[x], x * delay);
      }

      function set(a, b){
        setTimeout(() =>{
          setInterval(() => {
            setInfo(a);
          }, delay * inputArray.length);
        }, b);
      }
  }
  updatePlaceholder();


  return (
    <div className='info-wrapper'>

        <div className='pug-image-container'>
            <img alt="pug puppy" src={pugImage}/>
        </div>



        <div className='description-container'>
              <form className='form-zipcode'>
                <input className='cat-input' value={pet} onChange={(e) => setPet(e.target.value)} placeholder={info}/>

                <div className='zipcode-search-container'>
                    <input className='zipcode-input' value={zipcode} onChange={(e) => setZipcode(e.target.value)} placeholder='Enter ZIP code'/>
                    <BsSearch className='search-logo' onClick={handleSubmit}/> 
                </div>
              </form>
        </div>
    </div>
  )
}

export default Info