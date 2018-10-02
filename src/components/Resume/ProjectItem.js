import React, { Component } from "react";
import { Card, Button } from 'semantic-ui-react';

class ProjectItem extends Component {


  renderLink(){
    let link = this.props.project.demo;
    if(link){
      return (
          <a href={link}>
            <Button primary>
              Link/Demo
            </Button>
          </a>
      )
    }
  }

  render() {
    this.renderLink = this.renderLink.bind(this);
    let project = this.props.project;
    return (
      <Card fluid style={{marginBottom: "2vh",
                  marginTop: "3vh",
                  marginLeft: "20px",
                  marginRight: "20px",
                  backgroundColor: "rgb(250,250,250)",
                  height: "100%",
                  border: "solid 1px rgb(200,200,200)",
                  borderRadius: "6px",
                  paddingBottom: "2vh"}}>
        <h4 style={{marginTop: "2vh",  marginBottom: "0"}}>
          {project.name}
        </h4>
        <hr style={{marginLeft: "20px", marginRight: "20px", marginTop: "2vh", borderColor: "rgb(0, 205, 255)"}}></hr>
        <p style={{marginLeft: "20px", marginRight: "20px", fontWeight: "400"}}>{project.desc}</p>
        {this.renderLink()}
      </Card>
    );
  }
}

export default ProjectItem;
