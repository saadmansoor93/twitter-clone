import AppDispatcher from "../dispatcher.jsx"
import ActionTypes from "../constants.jsx"

export default {
  receivedTweets(rawTweets) {
    // AppDispatcher
    AppDispatcher.dispatch({
      actionType: ActionTypes.RECEIVED_TWEETS
      rawTweets
    })
  }
}
