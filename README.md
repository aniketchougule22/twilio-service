# twilio-service
### An twilio service package for node js.

<!-- 'twilio_service' is a package that includes several improvements and features including improved security, better performance, and new functionality to make it easier to use. -->

With just a few lines of code, your Node.js application can send text messages with 'twilio-service' Programmable SMS.

## Install

```javascript

npm install twilio-service

```

## Usage

### Environment Variables
Dotenv is used to populate your environment variables with your account credentials. You can find the credentials you need for this step in the Console.

```javascript

const twilioService = require('twilio-service');
require('dotenv').config();

const accountSid = process.env.TWILIO_ACCOUNT_SID
const authToken = process.env.TWILIO_AUTH_TOKEN
const twilio_number = process.env.TWILIO_PHONE_NUMBER
const messagingServiceSid = process.env.TWILIO_MESSAGING_SERVICE_ID

```
### Initialization
```javascript

let twilioService = require("twilio-service");

const message = 'Hello World..!'

twilioService.twilio(message, phone);

```
## License

MIT