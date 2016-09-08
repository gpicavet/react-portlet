import React from 'react';
import ReactDOM from 'react-dom';
import {Activity} from './Activity.jsx';

class Activities extends React.Component {

  constructor(props) {
    super(props);
    this.state = {activities:[]};
  }

  componentDidMount() {
    fetch("/rest/api/social/v1-alpha3/portal/activity_stream/feedByTimestamp.json?limit=5&number_of_comments=5&number_of_likes=5",
      {credentials: 'include'})
    .then((res) => {
        return res.json();
      })
    .then((json) => {
       this.setState(json);
    })
  }

  render() {
    var list = this.state.activities.map( (act) => {
      return <Activity key={act.id} {...act} />
    });
    return <ul>{list}</ul>;
  }

}

ReactDOM.render(<Activities/>, document.getElementById('app'));
