var accessKey = "<accessKey>"
var webhookId = "<webhookId>" //Can be obtained via list or read API calls
var messagebird = require('messagebird')(accessKey);
messagebird.conversations.webhooks.delete(webhookId, function (err, response) {
  if (err) {
  return console.log(err);
  }
  console.log(response);
});