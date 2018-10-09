import React, { Component } from "react";
import { connect } from "react-redux";
import { map, isEmpty } from "lodash";
import * as actions from "../../actions";
import ProjectItem from "./ProjectItem";
import { Card } from 'semantic-ui-react';

class ToDoList extends Component {
  state = {
    addFormVisible: false,
    addFormValue: ""
  };

  renderProjects() {
    const { data } = this.props;
    const projects = map(data, (value, key) => {
      return <ProjectItem project={value} key={key} />;
    });
    if (!isEmpty(projects)) {
      return (
        <Card.Group className="cardsVi">
          {projects}
        </Card.Group>
      )
    }
    return (
      <div style={{width: "100%",textAlign: "center", paddingTop: "20%"}}>
        <div style={{display: "inline-block"}}>
          <div className="viLoader"></div>
          <h1 className="fader">Loading...</h1>
        </div>
      </div>
    );
  }

  componentWillMount() {
    this.props.fetchProj();
  }

  render() {
    return (
      <div className="container" style={{textAlign: "center", marginBottom: "20px"}}>
        <div className="row" style={{textAlign: "center"}}>
          <Card style={{
            width: "100%",
            backgroundImage: "linear-gradient(160deg, rgb(189,195,225), rgb(120,179,191),rgb(150,208,221), #eef2f3)",
            marginTop: "20px",
            marginBottom: "4vh"
          }}>
            <h1 style={{width: "100%", marginTop: "20px", marginBottom: "20px", color: "rgb(255,255,255)"}} >
              My Projects
            </h1>
          </Card>
          <br/>
          <div className="flexCenter" style={{display: "flex", width: "100%"}}>
              {this.renderProjects()}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ data }) => {
  return {
    data
  };
};

export default connect(mapStateToProps, actions)(ToDoList);
