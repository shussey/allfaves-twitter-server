# allfaves-twitter-server

This is a learning project that starts with a Node express project.

It is a twitter service tier that is called from my client applications.

It is good for both local deployment and also Heroku

## View the application

Deployed here: TBD

## Download and prepare for local use

1. Clone the repo

2. Cd to the root of the project and run `npm install`

3. Get developer API keys from Twitter

4. Fillout the `.env.template` and copy it to `.env`. It should include the following keys:
```javascript
TWITTER_CONSUMER_KEY=your_key_here
TWITTER_CONSUMER_SECRET=your_key_here
TWITTER_ACCESS_TOKEN_KEY=your_key_here
TWITTER_ACCESS_TOKEN_SECRET=your_key_here
```

## To run and develop the project locally

1. Start a terminal window

2. In the first, assuming you have nodemon installed, run `nodemon` to start the whole applicaiton on `http://localhost:3000`

3. Navigate to `http://localhost:3000` in your browser

## To deploy to heroku free tier

1. Publish the app to github

2. Logon to Heroku and create a new app

3. Go to the settings tab for your app. Find the Config Vars section. Press reveal and add the four TWITTER_ parameters you have in your .env file

4. Go to the deploy tab, select Github as the source and deploy the master branch. If deploy worked you should turn on Automatic Deploys to automatically pick up changes when you publish them to Github