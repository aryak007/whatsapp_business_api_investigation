const accountSid = '<accountSid>';
const authToken = '<authToken>';
const client = require('twilio')(accountSid, authToken);

client.conversations.conversations
                    .create()
                    .then(conversation => console.log(conversation.sid));
