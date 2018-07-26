const Twit = require('twit')
const twitConfigKeys = require('./config/keys')

const T = new Twit(twitConfigKeys)

// Search tweets
//
// const paramsObj = { q: 'brexit', count: 5}
// const gotData = (err, data, response) => {
//   const tweets = data.statuses
//   tweets.forEach(tweet => console.log(tweet.text))
// }

// T.get('search/tweets', paramsObj, gotData)

// Write tweets
//
const tweetIt = tweetStatus => {
  const randomNumber = Math.floor(Math.random()*100)
  const tweet = {
    status: 'This is a random number: ' + randomNumber + '  #twitterBot #NodeJS'
  }
  const tweeted = (err, data, response) => err ? console.log('Something went wrong:', err.message) : console.log('It worked!!')
  
  T.post('statuses/update', tweet, tweeted)
}

setInterval(tweetIt, 1000*60)

console.log('TWITTER BOT STARTED!!')