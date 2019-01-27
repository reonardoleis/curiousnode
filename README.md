# curiousnode
A node.js module to facilitate the use of the CuriousCat API.

## Usage
```javascript
const curiousnode = require('curiousnode');
const api = new curiousnode();
api.send(TARGET_USER_NUMERIC_ID, MESSAGE_TEXT);
```

## How to get the numeric id
To get the numeric id simply download a tool that monitors the posts and gets of the browser(like the Gargl Chrome's extension). Send a message to the desired user and look for the "adreesses" attribute, which is the numeric id.


