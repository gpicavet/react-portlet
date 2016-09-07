import React from 'react';
import ReactDOM from 'react-dom';

class Activities extends React.Component {

  constructor(props) {
    super(props);
    this.state = {activities:[]};
  }

  componentDidMount() {
    fetch("/rest/private/api/social/v1-alpha3/portal/activity_stream/feedByTimestamp.json?limit=5&sinceTime=12345&number_of_comments=5&number_of_likes=5").then(
      (res) => {
        return res.json();
      }
    ).then((json) => {
       this.setState(json);
    })
  }

  render() {
    var list = this.state.activities.map( (act) => {
      var html = {__html:act.title};
      return <div key={act.id} className="item-container">
              <div className="item">
                <div className="header">
                  <h2>{act.posterIdentity.profile.fullName}</h2>
                  <date>{new Date(act.postedTime).toString()}</date>
                </div>
                <div dangerouslySetInnerHTML={html}/>
              </div>
             </div>
    });
    return <div>{list}</div>;
  }
  
}

ReactDOM.render(<Activities/>, document.getElementById('app'));
