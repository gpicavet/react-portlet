import React from 'react';
var moment = require('moment');

export class Activity extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
      var html = {__html:this.props.title};
      return (
          <li>
              <img src={this.props.posterIdentity.profile.avatarUrl} />
              <div className="block">
                <div className="header">
                  <strong>{this.props.posterIdentity.profile.fullName}</strong>
                  <br/>
                  Posted : <span>{moment(this.props.postedTime).fromNow()}</span>
                </div>
                <div dangerouslySetInnerHTML={html}/>
              </div>
             </li>);
  }

}
