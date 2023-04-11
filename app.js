
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Home page');
});

app.get('/settings', (req, res) => {
  res.send('This is the settings page.');
});

const server = app.listen(process.env.PORT || 3000, () => {
  console.log(`Server started...`);
});

const sleep = ms => new Promise(r => setTimeout(r, ms));

(async function connections() {
  await sleep(5000);
  console.log("Fetching active network connections.");
  server.getConnections(function (err, count) {
    if (err) {
      console.log("Error occured while finding active connections");
      console.error(err);
    } else {
      console.log("Active Network Connections on HTTP Server: ", count);
    }
    connections();
  });
})();