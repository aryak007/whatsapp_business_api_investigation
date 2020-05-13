var accessKey = "accessKey"
var messagebird = require('messagebird')(accessKey, null, ["ENABLE_CONVERSATIONSAPI_WHATSAPP_SANDBOX"]);
// start a conversation
messagebird.conversations.start({
'to': '<to_number>',
'channelId': '<channel_id>',
'type': 'hsm',
  'content': {
    'hsm': {
      'namespace': 'fa7dc6ea_f838_47e1_884c_965e50f358b6',
      'templateName': 'support',
      'language': {
        'policy': 'deterministic',
        'code': 'en'
      },
      'params': [
        {"default": "Aryak"},
        {"default": "123"},
        {"default": "new coffee machine"},
        {"default": "MessageBird, Trompenburgstraat 2C, 1079TX Amsterdam"},
      ]
    }
  }
}, function (err, response) {
  if (err) {
    return console.log(err);
  }
  console.log(response);
});