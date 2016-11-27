var express = require('express');
var Twitter = require('twitter');
var router = express.Router();
var path = require('path')

var client = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});


router.get('/app/tweets/:user', function(req, res, next) {
  var user = req.params['user'];
  var params = {screen_name: user};

  client.get('statuses/user_timeline', params, function(error, tweets, response) {
    if (!error) {
      //console.log(tweets)
      res.send(tweets)
    }
  });
});

router.get('/app/followers/:user', function(req, res, next) {

  var user = req.params['user'];
  var params = {screen_name: user, count: 200};

  client.get('followers/list', params, function(error, followers, response){
    if(error) throw error;
    res.send(followers.users);
  });
});





module.exports = router;
