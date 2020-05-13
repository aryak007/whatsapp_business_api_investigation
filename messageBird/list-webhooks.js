var accessKey = "<accessKey>"
var messagebird = require('messagebird')(accessKey);
messagebird.conversations.webhooks.list(100, 0, function (err, response) {
  if (err) {
  return console.log(err);
  }
  console.log(response);
});