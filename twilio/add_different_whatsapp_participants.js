const accountSid = '<accountSid>';
const authToken = '<authToken>';
const client = require('twilio')(accountSid, authToken);

client.conversations.conversations('<conv_id>')
      .participants
      .create({
         'messagingBinding.address': 'whatsapp:+<no>',
         'messagingBinding.proxyAddress': 'whatsapp:+<another_no>' //Refer official guide 
       })
      .then(participant => console.log(participant.sid));
