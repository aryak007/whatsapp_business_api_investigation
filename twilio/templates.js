const accountSid = '<accountSid>';
const authToken = '<authToken>';
const client = require('twilio')(accountSid, authToken);

client.conversations.conversations('<id>')
  .messages
  .create({
     author: 'whatsapp:+<number>',
     body: 'Hello Aryak, your food delivery is almost there but Alicia (your rider) needs help finding your door. Are you willing to chat with them?'
   })
  .then(message => console.log(message.sid));