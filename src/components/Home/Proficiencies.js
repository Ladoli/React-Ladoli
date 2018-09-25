import React, { Component } from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';


class Proficiencies extends Component {

  componentDidMount() {
  }

  render() {
    return (
      <div style={{clear:"both",display: "block", width: "100%"}}>
        <h2>I'm proficient in:</h2>
        <div className="proficiencyBorder container">
          <div className="proficiencyContainer row ">
            <div className="col-sm-4 col-xs-12 profMargin animateOnScroll hiddenStateScroll">
              <Card className="proficiency">
                <div>JavaScript</div>
              </Card>
            </div>
            <div className="col-sm-4 col-xs-12 profMargin animateOnScroll hiddenStateScroll">
              <Card className="proficiency">
                <div>React</div>
              </Card>
            </div>
            <div className="col-sm-4 col-xs-12 profMargin animateOnScroll hiddenStateScroll">
              <Card className="proficiency">
                <div>Redux</div>
              </Card>
            </div>
            <div className="col-sm-4 col-xs-12 profMargin animateOnScroll hiddenStateScroll">
              <Card className="proficiency">
                <div>Axios</div>
              </Card>
            </div>
            <div className="col-sm-4 col-xs-12 profMargin animateOnScroll hiddenStateScroll">
              <Card className="proficiency">
                <div>Firebase</div>
              </Card>
            </div>
            <div className="col-sm-4 col-xs-12 profMargin animateOnScroll hiddenStateScroll">
              <Card className="proficiency">
                <div>Reworm</div>
              </Card>
            </div>
            <div className="col-sm-4 col-xs-12 profMargin animateOnScroll hiddenStateScroll">
              <Card className="proficiency">
                <div>HTML</div>
              </Card>
            </div>
            <div className="col-sm-4 col-xs-12 profMargin animateOnScroll hiddenStateScroll">
              <Card className="proficiency shaking">
                <div>CSS</div>
              </Card>
            </div>
            <div className="col-sm-4 col-xs-12 profMargin animateOnScroll hiddenStateScroll">
              <Card className="proficiency">
                <div>Bootstrap</div>
              </Card>
            </div>
            <div className="col-sm-4 col-xs-12 profMargin animateOnScroll hiddenStateScroll">
              <Card className="proficiency">
                <div>Java</div>
              </Card>
            </div>
            <div className="col-sm-4 col-xs-12 profMargin animateOnScroll hiddenStateScroll">
              <Card className="proficiency">
                <div>C#</div>
              </Card>
            </div>
            <div className="col-sm-4 col-xs-12 profMargin animateOnScroll hiddenStateScroll">
              <Card className="proficiency">
                <div>Meteor</div>
              </Card>
            </div>
            <div className="col-sm-4 col-xs-12 profMargin animateOnScroll hiddenStateScroll">
              <Card className="proficiency">
                <div>SQL</div>
              </Card>
            </div>
            <div className="col-sm-4 col-xs-12 profMargin animateOnScroll hiddenStateScroll">
              <Card className="proficiency">
                <div>Git</div>
              </Card>
            </div>
            <div className="col-sm-4 col-xs-12 profMargin animateOnScroll hiddenStateScroll">
              <Card className="proficiency">
                <div>MongoDB</div>
              </Card>
            </div>
            <div className="col-sm-4 col-xs-12 profMargin animateOnScroll hiddenStateScroll">
              <Card className="proficiency">
                <div>Python</div>
              </Card>
            </div>
            <div className="col-sm-4 col-xs-12 profMargin animateOnScroll hiddenStateScroll">
              <Card className="proficiency">
                <div>Tensorflow</div>
              </Card>
            </div>
            <div className="col-sm-4 col-xs-12 profMargin animateOnScroll hiddenStateScroll">
              <Card className="proficiency">
                <div>Node</div>
              </Card>
            </div>

          </div>
        </div>
        <br/><br/>
      </div>
    );
  }
}

export default Proficiencies;
