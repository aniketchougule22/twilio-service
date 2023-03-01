/* Twilio Integration */

const twilio = (message, phone) => {
    try
    {
        const accountSid = process.env.TWILIO_ACCOUNT_SID; 
        const authToken = process.env.TWILIO_AUTH_TOKEN; 

        const client = require('twilio')(accountSid, authToken);
    
        client.messages
        .create({ 
            body: message, 
            from: process.env.TWILIO_PHONE_NUMBER, 
            messagingServiceSid: process.env.TWILIO_MESSAGING_SERVICE_ID,      
            to: '+91'+phone 
        }) 
        .then(message => {
            console.log(message.sid);
        })
        .catch(err => {
            console.log(err); // handle error
        })
        // .done(e => {
        //     return e;
        // });
    }
    catch (error) 
    {
        return error;
    }
}


module.exports = {
    twilio
}