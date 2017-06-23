import TweetBox from './components/TweetBox.jsx';
import TweetsList from './components/TweetsList.jsx';
import TweetStore from './stores/TweetStore.jsx';

import TweetActions from "./actions/TweetActions.jsx"
TweetActions.getAllTweets();

let getAppState = () => {
  return { tweetsList: TweetStore.getAll() };
}

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = getAppState();
    this._onChange = this._onChange.bind(this);
  }

  componentDidMount() {
    TweetStore.addChangeListener(this._onChange);
    // $.ajax("/tweets")
    // .success(data => this.setState(this.formattedTweets(data)))
    // .error(error => console.log(error));
  }
  componentWillUnmount() {
    TweetStore.removeChangeListener(this._onChange);
  }
  _onChange() {
    console.log(5, "Main._onChange");
    this.setState(getAppState());
  }
  render() {
    return (
      <div className="container">
        <TweetBox />
        <TweetsList tweets={this.state.tweetsList}/>
      </div>
    );
  }
}

let documentReady = () => {
  let reactNode = document.getElementById('react');
  if (reactNode) {
    React.render(<Main />, reactNode);
  }
};

$(documentReady);
