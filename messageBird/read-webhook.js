var accessKey = "<accessKey>"
var webhookId = "<webhookId>"
var messagebird = require('messagebird')(accessKey);
messagebird.conversations.webhooks.read(webhookId, function (err, response) {
  if (err) {
  return console.log(err);
  }
  console.log(response);
});