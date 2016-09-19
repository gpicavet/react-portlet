import React from 'react';
import ReactDOM from 'react-dom';
import {Activity} from './Activity.jsx';

class Activities extends React.Component {

  constructor(props) {
    super(props);
    this.state = {activities:[]};
  }

  componentDidMount() {
    fetch("/rest/v1/social/activities?limit="+this.props.limit+"&expand=identity",
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

ReactDOM.render(<Activities limit="10"/>, document.getElementById('app'));
