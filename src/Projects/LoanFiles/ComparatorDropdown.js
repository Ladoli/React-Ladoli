import React, { Component } from 'react';



class ComparatorDropdown extends Component {



  render() {

    let idProp = {};
    if(!this.props.id){
    } else{
      idProp = this.props.id;
    }
    return (
      <select id={idProp}>
        <option value=">=">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;>=</option>
        <option value=">">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;></option>
        <option value="=" selected>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;=</option>
        <option value="<">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;</option>
        <option value="<=">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;=</option>
        <option value="BETWEEN">BETWEEN</option>
      </select>
    );
  }
}

export default ComparatorDropdown;
