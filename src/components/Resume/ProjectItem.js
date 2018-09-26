import React, { Component } from "react";

class ProjectItem extends Component {

  constructor(props){
    super(props)
  }

  render() {
    let project = this.props.project;
    return (
      <div style={{marginBottom: "2vh",
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
        <p style={{marginLeft: "20px", marginRight: "20px", fontWeight: "200"}}>{project.desc}</p>
      </div>
    );
  }
}

export default ProjectItem;
