const express = require('express')
const cors = require('cors')
const fetch = require('node-fetch')
require('dotenv').config()


const app = express();
app.use(cors({
    origin: ["http://localhost:5000", "http://localhost:3000", 
    "https://adopt-pet01.herokuapp.com/", "https://adopt-pet01.herokuapp.com"]
}));

let port = process.env.PORT || 5000;
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


/**
 * Sends the token
 */
app.get("/data", async (req, res) =>{
    const info  = await fetchData();
    res.send(info);
    //res.send(info)

})

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
