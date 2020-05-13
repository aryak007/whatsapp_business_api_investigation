const accountSid = '<accountSid>';
const authToken = '<authToken>';
const client = require('twilio')(accountSid, authToken);

client.messages
      .create({
         from: 'whatsapp:+<from_no>',
         body: 'Hello there!',
         to: 'whatsapp:+<to_no>'
       })
      .then(message => console.log(message.sid));