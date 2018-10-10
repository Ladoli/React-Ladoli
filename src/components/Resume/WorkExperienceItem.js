import React, { Component } from "react";
import { Card, Button } from 'semantic-ui-react';

class workExperienceItem extends Component {


  render() {
    let workExperience = this.props.workExperience;
    return (
      <Card >
          {workExperience.name}
      </Card>
    );
  }
}

export default workExperienceItem;
