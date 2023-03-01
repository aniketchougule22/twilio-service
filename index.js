/* Twilio Integration */

const twilio = (message, phone) => {
    try
    {
        const accountSid = process.env.accountSid; 
        const authToken = process.env.authToken; 
        const twilio_number = process.env.twilio_number;
        const messagingServiceSid = process.env.messagingServiceSid;
        const client = require('twilio')(accountSid, authToken);
    
        client.messages
        .create({ 
            body: message, 
            from: twilio_number, 
            messagingServiceSid: messagingServiceSid,      
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
    twilio
}