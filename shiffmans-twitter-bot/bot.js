const Twit = require('twit')
const twitConfigKeys = require('./config/keys')

const T = new Twit(twitConfigKeys)

console.log('TWITTER BOT STARTED!!')