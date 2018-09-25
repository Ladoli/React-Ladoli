import React, { Component } from 'react';


class TopNavVi extends Component {

  constructor(props){
    super(props);
  }


  componentDidMount() {
  }

  render() {
    let navColor = {
      backgroundColor: "black"
    };

    let links = {
      fontWeight: "300",
      marginLeft: "10px"
    };

    if(this.props.location.pathname === "/ProjectList"){
      navColor = {backgroundColor: "rgb(240,240,240)"};
    }
    return (
      <div className="top-Nav-Vi" style={navColor}>
        <a href="/">
          Angelo Villadolid
        </a>
        <div style={{float: "right"}}>
          <a style={links} href="/ProjectList">
            Projects
          </a>
          <a style={links} href="/RippleScript">
            RippleScript
          </a>
        </div>
      </div>
    );
  }
}

export default TopNavVi;
