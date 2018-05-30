import React, { Component } from 'react';



class ProjectBanner extends Component {

  componentDidMount() {
  }

  render() {
    let style = {}
    if(!this.props.styleProp){
      style={};
    } else{
      style = this.props.styleProp;
    }

    return (
      <a href="./">
        <div className="topBanner" style={style}>
          <div id= "headBanner">
            <img id="V" src="Images/VMoon.png" alt="my logo"/>
          </div>
        </div>
      </a>
    );
  }
}

export default ProjectBanner;
