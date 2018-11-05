import React, { Component } from "react";
import { Card } from 'semantic-ui-react';

class workExperienceItem extends Component {


  render() {
    let workExperience = this.props.workExperience;
    return (
      <Card >
        <Card.Header>
          {workExperience.position}
        </Card.Header>
        <Card.Description>
          {workExperience.name}
        </Card.Description>
      </Card>
    );
  }
}

export default workExperienceItem;
