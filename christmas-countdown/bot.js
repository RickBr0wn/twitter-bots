const Twit = require('twit')
const twitConfigKeys = require('./config/keys.js')

const TwitterBot = new Twit(twitConfigKeys)

const daysUntilChristmas = () => {
  const today = new Date()
  const Christmas = new Date(today.getFullYear(), 11, 25)

  // Handler to allow for 26th - 31st December
  if(today.getMonth() == 11 && today.getDate() > 25) {
    Christmas.setFullYear(Christmas.getFullYear() + 1)
  }

  const oneDay = 1000*60*60*24
  return Math.ceil((Christmas.getTime() - today.getTime()) / oneDay)
}

const tweetIt = () => {
  const tweet = { status: 'There are only ' + daysUntilChristmas() + ' days until Christmas' }
  const tweeted = (err, data, response) => err ? console.log('Something went wrong:', err.message) : console.log('There are only ' + daysUntilChristmas() + ' days until Christmas') 

  TwitterBot.post('statuses/update', tweet, tweeted)
}

// Initial tweet
//
tweetIt()

// Loop Tweets
//
setInterval(tweetIt, (1000*60*60*24))