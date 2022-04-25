import { useEffect, useState } from "react";
import axios from "axios";
import Header from "./components/Header/Header";
import Info from "./components/Information/Info";
import PuppyContainer from "./components/PuppyContainer/PuppyContainer";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";


function App() {
  const [token, setToken] = useState('');
  const [result, setResult ] = useState('');


/**
 * Grabs the token form the back end(Node js), update the token state 
 * Erorr will be given if there is a faulty token
 */
  useEffect(() =>{
    axios.get("/data").then((response) => {
      setToken(response.data.access_token)  
    })
    .catch(error => console.log(`We can not find the data ${error}`))
}, [])


/**
 * Inspects if there is an up to date token in state
 * If there is a validate token, fetching first page results from the Petfinder API
 */
useEffect(() => {
  if(token === null){
    console.log("There was no token passed ")
  }
  const fetchPetData = async () =>{
  try{
      const petResultData = await fetch("https://api.petfinder.com/v2/animals", {
      headers: {
        Authorization: `Bearer ${token}`,
        
        },
        mode: 'cors',
      
      })
      const jsonResult = await petResultData.json();
      setResult(jsonResult.animals);
  }catch(err){
    console.log("This is the erro" + err);
  }
  }
  fetchPetData();
}, [token])


/**
 * Updates the animal and the zipcode state
 * Returns new search criteria
 * 
 */
const update = (data) =>{
  if(token === null){
    console.log("There was no token passed ")
  }
  const updatePetData = async () =>{
  try{
      const petResultUpdate = await fetch(`https://api.petfinder.com/v2/animals?location=${data.zipcode}&type=${data.pet}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        },
      
      })
      const jsonUpdate = await petResultUpdate.json();
      setResult(jsonUpdate.animals);
      console.log("This is zip " + data.zipcode);
      console.log("This is animal " + data.pet);
  }catch(err){
    <h3>...Loading</h3>
  }
  }
  updatePetData();


}




  return (
    <div className="App">
      <Navbar />
      <Header />
      <Info update={update}  />
      <PuppyContainer  result={result}  />
      <Footer />
     
    </div>
  );
}

export default App;
