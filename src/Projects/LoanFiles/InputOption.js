import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import ComparatorDropdown from './ComparatorDropdown.js'




class InputOption extends Component {



  render() {
    let inputStyle = {marginLeft: "30px"};

    let inputAttr = {};
    if(!this.props.inputAttr){
    } else{
      inputAttr = this.props.inputAttr;
    }
    return (
      <div>
      <div className="LoanOptionsTrimmer">
        <div style={{width: "140px", display: "inline-block"}}><input type="checkbox" id={inputAttr+"Check"} /> {inputAttr} </div>
        <Route render={()=><ComparatorDropdown id={inputAttr+"Operation"}/>}/>
      </div> <input  style={inputStyle} id={inputAttr+"Value"} type="number"/> <input   style={inputStyle} id={inputAttr+"ToValue"} type="number"/><br/>
      </div>
    );
  }
}

export default InputOption;
