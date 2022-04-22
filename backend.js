const PORT = 5000
const express = require('express')
const cors = require('cors')
const fetch = require('node-fetch')
require('dotenv').config()

const app = express();
app.use(cors({
    origin: ['http://localhost:3000', 'https://carlosmartinezfiu.github.io']
    
}));


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

app.get('/', (req, res) =>{
    res.json("Home")
})

/**
 * Sends the token
 */
app.get("/data", async (req, res) =>{
    const info  = await fetchData();
    res.jsonp(info);
    //res.send(info)

})

/**
 * Checks if the port is running
 */
app.listen(5000, () =>{
    console.log(`Server is running on port ${PORT}`);
})
