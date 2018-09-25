import React, { Component } from "react";
import { Card } from 'semantic-ui-react';

class ProjectItem extends Component {

  constructor(props){
    super(props)
  }

  render() {
    let project = this.props.project;
    return (
      <Card style={{marginBottom: "2vh"}}>
        <h4 style={{marginTop: "2vh",  marginBottom: "0"}}>
          {project.name}
        </h4>
        <hr style={{marginLeft: "20px", marginRight: "20px", marginTop: "2vh", borderColor: "rgb(0, 205, 255)"}}></hr>
        <p style={{marginLeft: "20px", marginRight: "20px", fontWeight: "200"}}>{project.desc}</p>
      </Card>
    );
  }
}

export default ProjectItem;
