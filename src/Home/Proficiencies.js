import React, { Component } from 'react';


class Proficiencies extends Component {

  componentDidMount() {
  }

  render() {
    return (
      <div>
        <h2>I'm proficient in:</h2>
        <div className="proficiencyBorder container">
          <div className="proficiencyContainer row animateOnScroll hiddenStateScroll">
            <div className="col-sm-4 col-xs-12 profMargin">
              <div className="proficiency">
                <div>C#</div>
              </div>
            </div>
            <div className="col-sm-4 col-xs-12 profMargin">
              <div className="proficiency">
                <div>Java</div>
              </div>
            </div>
            <div className="col-sm-4 col-xs-12 profMargin">
              <div className="proficiency">
                <div>JavaScript</div>
              </div>
            </div>
            <div className="col-sm-4 col-xs-12 profMargin">
              <div className="proficiency">
                <div>React</div>
              </div>
            </div>
            <div className="col-sm-4 col-xs-12 profMargin">
              <div className="proficiency shaking">
                <div>CSS</div>
              </div>
            </div>
            <div className="col-sm-4 col-xs-12 profMargin">
              <div className="proficiency">
                <div>HTML</div>
              </div>
            </div>
            <div className="col-sm-4 col-xs-12 profMargin">
              <div className="proficiency">
                <div>JQuery</div>
              </div>
            </div>
            <div className="col-sm-4 col-xs-12 profMargin">
              <div className="proficiency">
                <div>Bootstrap</div>
              </div>
            </div>
            <div className="col-sm-4 col-xs-12 profMargin">
              <div className="proficiency">
                <div>Meteor</div>
              </div>
            </div>
            <div className="col-sm-4 col-xs-12 profMargin">
              <div className="proficiency">
                <div>SQL</div>
              </div>
            </div>
            <div className="col-sm-4 col-xs-12 profMargin">
              <div className="proficiency">
                <div>Git</div>
              </div>
            </div>
            <div className="col-sm-4 col-xs-12 profMargin">
              <div className="proficiency">
                <div>MongoDB</div>
              </div>
            </div>
          </div>
        </div>
        <br/><br/>
      </div>
    );
  }
}

export default Proficiencies;
