- data/db.json 
- npm axios 
    npm i axios --save // save as production dependencies
- src/api/post.js

import axios from 'axios'

export default axios.create({
    baseURL: 'http://localhost:3500'
}); 


    baseURL: 'http://localhost:3500'

- npx json-server -p 3500 -w data/db.json 


