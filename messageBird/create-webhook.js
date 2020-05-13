var accessKey = "<accessKey>"
var messagebird = require('messagebird')(accessKey);
var params = {
  'events': [
  'message.created',
  'message.updated'
  ],
  'channelId': "<<Channel_ID>>",
  'url': 'https://webhook.site/4ed55a9a-d10e-42b0-9a42-2aa0cd6362cd'
}
messagebird.conversations.webhooks.create(params, function (err, response) {
  if (err) {
  return console.log(err);
  }
  console.log(response);
});