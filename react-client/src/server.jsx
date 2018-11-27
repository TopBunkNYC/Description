import React from 'react';
import Listing from './components/Listing.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listing: this.props
    }
  }

  render () {
    return (
      <div>
        <Listing listing={this.state.listing} />
      </div>
    )
  }
}

export default App;
