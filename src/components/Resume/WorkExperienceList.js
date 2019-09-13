import React, { Component } from "react";
import { connect } from "react-redux";
import { map, isEmpty } from "lodash";
import * as actions from "../../actions";
import WorkExperienceItem from "./WorkExperienceItem";
import { Card } from 'semantic-ui-react';

class WorkExperienceList extends Component {

  renderWork() {
    const { workData } = this.props;
    const work = map(workData, (value, key) => {
      return <WorkExperienceItem workExperience={value} key={key} />;
    });
    if (!isEmpty(work)) {
      return (
        <Card.Group className="cardsVi">
          {work}
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
    this.props.fetchWorkEx();
  }

  render() {
    return (
      <div className="container" style={{textAlign: "center", marginBottom: "20px", minHeight: "100vh"}}>
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
          <div className="flexCenter" style={{display: "flex", width: "100%"}}>
              {this.renderWork()}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ workData }) => {
  return {
    workData
  };
};


export default connect(mapStateToProps, actions)(WorkExperienceList);
