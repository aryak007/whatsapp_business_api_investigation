var accessKey = "<accessKey>"
var messagebird = require('messagebird')(accessKey);
var params = {
  'events': [
  'message.created',
  'message.updated'
  ],
  'channelId': "<<Channel_ID>>",
  'url': 'https://webhook.site/12345' // Change it appropriately to a webhook either from https://webhook.site/ or from simple_server_webhook.js
}
messagebird.conversations.webhooks.create(params, function (err, response) {
  if (err) {
  return console.log(err);
  }
  console.log(response);
});