import ServerActions from "./actions/ServerActions.jsx"

export default {
  getAllTweets() {
    console.log(2, "API.getAllTweets");
    $.get("/tweets")
    .success( rawTweets => ServerActions.receivedTweets(rawTweets) )
    .error(error => console.log(error));
  },
  createTweet(body) {
    console.log(6, "API.sendTweet");
    $.post("/tweets", { body })
    .success( rawTweet => ServerActions.receivedOneTweet(rawTweet) )
    .error(error => console.log(error));
  }
}
