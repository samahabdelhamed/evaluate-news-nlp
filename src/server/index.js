const dotenv = require('dotenv');
dotenv.config();
var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const app = express()
const fetch = require('node-fetch');
//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require('body-parser')
// Cors for cross origin allowance
const cors = require('cors')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors())

app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
 // res.sendFile(path.resolve('src/client/views/index.html'))
})
// designates what port the app will listen to for incoming requests
app.listen(9090, function () {
    console.log('Example app listening on port 9090!')
})

app.post('/test', async function (req, res) {
  console.log('test call url '+req.body.url)
  const cloudUrl = 'https://api.meaningcloud.com/sentiment-2.1?key=';
const apiKey = process.env.API_KEY;
const url = req.body.url;
const fullAPI = `${cloudUrl}${apiKey}&url=${url}&lang=en`;
   // https://api.meaningcloud.com/sentiment-2.1?key=**************************&url=https://en.wikipedia.org/wiki/Main_Page&lang=en
    let response = await fetch(fullAPI);
  if (response.ok) {
    try {
    const data = await response.json();
    res.send(data)
    } catch (Error) {
      console.log(Error);
    }
  }
  else {
  alert("Server Error");
  }

})