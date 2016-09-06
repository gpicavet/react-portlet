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
    console.log(this.state);
    var list = this.state.activities.map( (act) => {
      return <div key={act.id} style={{"padding-bottom":"20px"}}>
              <div style={{"border":"1px solid #ccc", "border-radius": "3px"}}>
                <div style={{"border-bottom":"1px solid #ccc"}}>
                  <h2>{act.posterIdentity.profile.fullName}</h2>
                  <date>{new Date(act.postedTime).toString()}</date>
                </div>
                <div dangerouslySetInnerHTML={{__html:act.title}}/>
              </div>
             </div>;
    });
    return <div style={{width:"50%"}}>{list}</div>;
  }
}

ReactDOM.render(<Activities/>, document.getElementById('app'));
