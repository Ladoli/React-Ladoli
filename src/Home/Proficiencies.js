import React, { Component } from 'react';


class Proficiencies extends Component {

  componentDidMount() {
  }

  render() {
    return (
      <div>
        <h2>I'm proficient in:</h2>
        <div className="proficiencyBorder container">
          <div className="proficiencyContainer row">
            <div className="col-sm-4 col-xs-12 proficiency">
              <div>C#</div>
            </div>
            <div className="col-sm-4 col-xs-12 proficiency">
              <div>Java</div>
            </div>
            <div className="col-sm-4 col-xs-12 proficiency">
              <div>JavaScript</div>
            </div>
            <div className="col-sm-4 col-xs-12 proficiency">
              <div>HTML</div>
            </div>
            <div className="col-sm-4 col-xs-12 proficiency shaking">
              <div>CSS</div>
            </div>
            <div className="col-sm-4 col-xs-12 proficiency">
              <div>jQuery</div>
            </div>
            <div className="col-sm-4 col-xs-12 proficiency">
              <div>React</div>
            </div>
            <div className="col-sm-4 col-xs-12 proficiency">
              <div>Bootstrap</div>
            </div>
            <div className="col-sm-4 col-xs-12 proficiency">
              <div>Meteor</div>
            </div>
            <div className="col-sm-4 col-xs-12 proficiency">
              <div>Node</div>
            </div>
            <div className="col-sm-4 col-xs-12 proficiency">
              <div>Git</div>
            </div>
            <div className="col-sm-4 col-xs-12 proficiency">
              <div>NPM</div>
            </div>
          </div>
        </div>
        <br/><br/>
      </div>
    );
  }
}

export default Proficiencies;
