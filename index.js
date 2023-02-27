/* Twilio Integration */

const twillio = (message, phone) => {
    try
    {
        const accountSid = process.env.accountSid; 
        const authToken = process.env.authToken; 
        const client = require('twilio')(accountSid, authToken);
    
        client.messages
        .create({ 
            body: message, 
            from: process.env.twilio_number, 
            messagingServiceSid: process.env.messagingServiceSid,      
            to: '+91'+phone 
        }) 
        .then(message => console.log(message.sid)).catch(err => {
            console.log(err); // handle error
        })
        .done();
    }
    catch (error) 
    {
        return error;
    }
}


module.exports = {
    twillio
}

  
  