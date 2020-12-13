const fs = require('fs');
const path = require('path');
const headers = require('./cors');
const multipart = require('./multipartUtils');

// Path for the background image ///////////////////////
module.exports.backgroundImageFile = path.join('.', 'background.jpg');
////////////////////////////////////////////////////////

let messageQueue = null;
module.exports.initialize = (queue) => {
  messageQueue = queue;
};
// Fill in the next default function?
module.exports.router = (req, res, next = () => {}) => {
  console.log('Serving request type ' + req.method + ' for url ' + req.url);
  res.writeHead(200, headers);

  let serverMessage = undefined;
  if (req.method === 'GET') {
    serverMessage = randomMessage();
  }
  res.end(serverMessage);
  // if req.method is 'GET'
    // res.end(randomMessage)
  next(); // invoke next() at the end of a request to help with testing!
};

// function that creates random command
const randomMessage = () => {
  let messages = ['up', 'down', 'left', 'right'];
  return messages[Math.floor(Math.random() * messages.length)];
};
