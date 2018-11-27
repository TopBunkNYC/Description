import React from 'react';
import axios from 'axios';
import Listing from './components/Listing.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listing: this.props || {}
    }
  }

  componentDidMount() {
    if (Object.keys(this.state.listing)[0] === undefined) {
      var ID = window.location.href.split('?')[1].slice(3);
      axios.get('/description', {
        params: {
          id: ID
        }
      })
      .then(({data}) => {
        this.setState({
            listing: data
        })
      })
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

window.Description = App;