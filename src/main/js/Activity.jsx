import React from 'react';
var moment = require('moment');

export class Activity extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
      var titleHtml = {__html:this.props.title};
      return (
          <li>
              <img src={this.props.identity.profile.avatar===null ? "/eXoSkin/skin/images/system/UserAvtDefault.png":this.props.identity.profile.avatar} />
              <div className="block">
                <div className="header">
                  <strong>{this.props.identity.profile.fullname}</strong>
                  <br/>
                  Posted : <span>{moment(this.props.createDate).fromNow()}</span>
                </div>
                <div dangerouslySetInnerHTML={titleHtml}/>
              </div>
             </li>);
  }

}
