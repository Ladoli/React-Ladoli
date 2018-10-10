import React, { Component } from "react";
import { connect } from "react-redux";
import { map, isEmpty } from "lodash";
import * as actions from "../../actions";
import WorkExperienceItem from "./WorkExperienceItem";
import { Card } from 'semantic-ui-react';

class WorkExperienceList extends Component {



  componentWillMount() {

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
              Work Experience
            </h1>
          </Card>
          <br/>
        </div>
      </div>
    );
  }
}


export default connect(null, actions)(ProjectList);
