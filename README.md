# twilio-service
### An twilio service package for node js.

With just a few lines of code, your Node.js application can send text messages with 'twilio-service' Programmable SMS.

## Install

```javascript

npm install twilio-service

```

## Usage

### Environment Variables
Dotenv is used to populate your environment variables with your account credentials. You have to need set env credentials for this step in the .env file like this.

```javascript

# .env

# Set your twilio connection information here

TWILIO_ACCOUNT_SID= ******
TWILIO_AUTH_TOKEN= ******
TWILIO_PHONE_NUMBER= ******
TWILIO_MESSAGING_SERVICE_ID= ******

```
### Initialization
```javascript

let twilioService = require("twilio-service");

const message = 'Hello World..!'

twilioService.twilio(message, phoneNumber);

```
## License

MIT