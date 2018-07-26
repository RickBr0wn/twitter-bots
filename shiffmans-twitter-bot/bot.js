const Twit = require('twit')
const twitConfigKeys = require('./config/keys')

const T = new Twit(twitConfigKeys)

// Search tweets :: GET()
//
// const paramsObj = { q: 'brexit', count: 5}
// const gotData = (err, data, response) => {
//   const tweets = data.statuses
//   tweets.forEach(tweet => console.log(tweet.text))
// }

// T.get('search/tweets', paramsObj, gotData)

// Write tweets :: POST()
//
// const tweetIt = tweetStatus => {
//   const randomNumber = Math.floor(Math.random()*100)
//   const tweet = {
//     status: 'This is a random number: ' + randomNumber + '  #twitterBot #NodeJS'
//   }
//   const tweeted = (err, data, response) => err ? console.log('Something went wrong:', err.message) : console.log('Tweet sent: ' + tweet.status) 
//   T.post('statuses/update', tweet, tweeted)
// }

// Loop Tweets
//
// setInterval(tweetIt, 1000*60)

// Event tweets :: STREAM()
// Tweets when followed
//
const tweetIt = (tweetStatus, screenName) => {
  const tweet = {
    status: tweetStatus
  }
  const tweeted = (err, data, response) => err ? console.log('Something went wrong:', err.message) : console.log('Tweet sent to: ' + screenName) 
  T.post('statuses/update', tweet, tweeted)
}

const followed = eventMsg => {
  const name = eventMsg.source.name
  const screenName = eventMsg.source.screen_name

  tweetIt('@' + screenName + ' Thanks ' + name + ' for following me!!', screenName)
}

let stream = T.stream('user')
stream.on('follow', followed)

console.log('TWITTER BOT STARTED!!')