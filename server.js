const express = require('express')
const app = express();
const path = require('path')
const cors = require('cors')
const fetch = require('node-fetch');
const { default: axios } = require('axios');
require('dotenv').config()

const port = process.env.PORT || 5000;
app.use(cors({
    origin: '*'
}))



/**
 * Make a call for a new token from the petfinder api
 * 
 * @returns token recieved
 */
const fetchData = async () =>{
        const param = new URLSearchParams();
        param.append("grant_type", "client_credentials");
        param.append("client_id", process.env.USER_API);
        param.append("client_secret", process.env.USER_SECRET);

            const petFinderRes = await fetch("https://api.petfinder.com/v2/oauth2/token", 
            {
            method: "POST",
            body: param
            });
      
        const data = await petFinderRes.json();
        return data;    
}

const getAnimals = async () =>{
    const info = await fetchData();

    try{
        const petResultData = await fetch("https://api.petfinder.com/v2/animals", {
        headers: {
            Authorization: `Bearer ${info.access_token}`,
            },
            
        })
        const jsonResult = await petResultData.json();
         return jsonResult.animals;
    }catch(err){
        console.log("This is the erro" + err);
    }
    
};



app.get("/data", cors(), async (req, res) =>{
    const info  = await getAnimals();
    console.log(info);
    res.send(info);


})


/**
 * Sends the token
 
app.get("/data", cors(), async (req, res) =>{
    const info  = await fetchData();
    console.log(info.access_token);
    res.send(info);

})
*/

  if(process.env.NODE_ENV === 'production'){
      app.use(express.static('build'));
      app.get('*', (req, res) => {
          req.sendFile(path.resolve(__dirname, 'build', 'index.html'));
      })
  }

/**
 * Checks if the port is running
 */
app.listen(port, () =>{
    console.log(`Server is running on port ${port}`);
})
