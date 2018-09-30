import React, { Component } from 'react';


class TopNavVi extends Component {


  componentDidMount() {
  }

  render() {
    let navColor = {
      backgroundColor: "black"
    };

    let links = {
      marginLeft: "10px",
      fontSize: "2vh",
      color: "rgba(240,240,240, .7)"
    };

    let mainLink = {
      color: "rgba(240,240,240, .9)"
    }

    if(this.props.location.pathname === "/ProjectList"){
      navColor = {backgroundColor: "rgb(240,240,240)"};
      links.color = "rgba(120,120,120, .7)";
      mainLink.color = "rgba(120,120,120, .9)";
    }
    return (
      <div className="top-Nav-Vi" style={navColor}>
        <a href="/" style={mainLink}>
          Angelo Villadolid
        </a>
        <div style={{float: "right"}}>
          <a style={links} href="/ProjectList">
            Projects
          </a>
          {/* <a style={links} href="/RippleScript">
            RippleScript
          </a> */}
        </div>
        <hr style={{borderColor: "rgba(180,220,255, .7)", margin: "3px 5px 0px 5px"}}/>
      </div>
    );
  }
}

export default TopNavVi;
