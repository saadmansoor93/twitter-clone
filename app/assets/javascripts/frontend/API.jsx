import ServerActions from "./actions/ServerActions.jsx"

export default {
  getAllTweets() {
    $.ge("/tweets")
    .success( rawTweets => ServerActions.receivedTweets(rawTweets) )
    .console.error(error => console.log(error));
  }
}
