const express = require('express');

const server = ( handle ) => {
    //create and listen server
    const server = express();
    const apiKey = '9b859fee-242d-4e66-bde3-7febc4c77b95';
    const api = `/api/${ apiKey }/`;
      
    server.listen(3000, (err) => {
      if (err) throw err
      console.log('> Ready on http://localhost:3000');
    })

    server.get('*', (req, res) => {
        return handle(req, res);
    });

    //api get request
    server.get(api + '');

    //api post request
}

module.exports = server;