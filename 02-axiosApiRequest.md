- data/db.json 
- RESTAPI JSON-SERVER  
npx json-server -p 3500 -w data/db.json 

- INSTALL AXIOS CLIENT
npm axios 
    npm i axios --save // save as production dependencies

- CREATE NEW AXIOS INSTANCE INSIDE src/api/post.js

import axios from 'axios'

export default axios.create({
    baseURL: 'http://localhost:3500'
}); 


    baseURL: 'http://localhost:3500'




