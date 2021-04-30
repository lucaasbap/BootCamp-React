const fetch = require("fetch").fetchUrl

fetch ('http://127.0.0.1:5500/data.json')
    .then(responseStream => responseStream.json())
    .then(data => {
        console.log(data);
    });