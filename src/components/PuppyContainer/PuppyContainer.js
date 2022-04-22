import Puppy from "../PuppCard/Puppy";
import './PuppyContainer.css';


const PuppyContainer = ({ result }) => {
/**
 * Grid Wrapper for the Pets Card
 * Takes in the results array from the Petfinder's Api
 * Only the first page results are passed
 */
  return (
    <div className="puppy-container-wrapper">
        <Puppy result={result}/>
    </div>
  )
}

export default PuppyContainer


