import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import InputOption from './LoanFiles/InputOption.js';
import swal from 'sweetalert2';





class LoanGUI extends Component {

  componentDidMount() {
  }

  render() {

    function queryFunction() {
      let output = "*";
      let tableName = "application_training"
      let query = "SELECT " + output + " FROM " + tableName;
      let where = "";
      inputQuery("Income", "AMT_INCOME_TOTAL");
      inputQuery("Loan Amount", "AMT_CREDIT");

      if(where !== ""){
        query += " WHERE " + where;
      }


      console.log(query)

      function inputQuery(idInput, attribute){
        let box = document.getElementById(idInput+"Check");

        if(box.checked){
          let operator = document.getElementById(idInput+"Operation").value;
          let value1 = document.getElementById(idInput + "Value").value;
          if(where !== ""){
            if(!value1){
              swal({title:"Missing value for the input: " + idInput});
              return;
            }
            if(operator !== "BETWEEN"){
              where += " AND " + attribute + " " + operator + " " +value1;
            }else{
              let value2 = document.getElementById(idInput + "ToValue").value;
              if(!value2){
                swal({title:"Missing value ceiling for the input: " + idInput});
                return;
              }
              where += " AND " + attribute + " > " +value1 + " AND " + attribute + " < " + value2;
            }
          }else{
            if(!value1){
              swal({title:"Missing value for the input: " + idInput});
              return;
            }
            if(operator !== "BETWEEN"){
              where = attribute + " " + operator + " " +value1;
            }else{
              let value2 = document.getElementById(idInput + "ToValue").value;
              if(!value2){
                swal({title:"Missing value ceiling for the input: " + idInput});
                return;
              }
              where = attribute + " > " +value1 + " AND " + attribute + " < " + value2;
            }
          }
        }
      }
    }

    return (
      <div className="container">
        Input Information
        <div className="row">
          <div className="col-xs-12" style={{"width": "100%", "display": "inline-block"}}>
            <div className="col-sm-9 LoanOptionsBox" >
              <Route render={()=><InputOption inputAttr={"Income"}/>}/>
              <Route render={()=><InputOption inputAttr={"Loan Amount"}/>}/>
              <Route render={()=><InputOption inputAttr={"Number of Kids"}/>}/>
              <Route render={()=><InputOption inputAttr={"Goods Value"}/>}/>
              <Route render={()=><InputOption inputAttr={"Annuity"}/>}/>
              <Route render={()=><InputOption inputAttr={"Age"}/>}/>
              <Route render={()=><InputOption inputAttr={"Annuity"}/>}/>
            </div>

            <div className="col-sm-3 LoanOptionsBox">
              <input type="radio" name="data-type"/> All loans<br/>
              <input type="radio" name="data-type"/> Sucessful loans<br/>
              <input type="radio" name="data-type"/> Loans with problems<br/>
              <input type="radio" name="data-type"/>  Male<br/>
              <input type="radio" name="data-type"/>  Female<br/>
            </div>
          </div>
        </div>
        <br/><br/><br/><br/>
        Entry Output Information
        <div className="row">
          <div className="col-xs-12" style={{"width": "100%", "display": "inline-block"}}>
            <div className="col-sm-4 LoanOptionsBox" >
              <input type="checkbox" /> Income<br/>
              <input type="checkbox" /> Loan Amount<br/>
              <input type="checkbox" /> Number of Kids<br/>
            </div>
            <div className="col-sm-4 LoanOptionsBox">
              <input type="checkbox" /> Goods Value<br/>
              <input type="checkbox" /> Annuity<br/>

            </div>
            <div className="col-sm-4 LoanOptionsBox">
              <input type="checkbox" /> Gender<br/>
              <input type="checkbox" /> Age<br/>
            </div>
          </div>
        </div>
        <br/><br/><br/><br/>
        Summary Output Information
        <div className="row">
          <div className="col-xs-12" style={{"width": "100%", "display": "inline-block"}}>
            <div className="col-sm-4 LoanOptionsBox" >
              <input type="checkbox" />Income<br/>
              <input type="checkbox" />Loan Amount<br/>
              <input type="checkbox" />Number of Kids<br/>
              <input type="checkbox" />Goods Value<br/>
              <input type="checkbox" />Annuity<br/>
              <input type="checkbox" />Gender<br/>
              <input type="checkbox" />Age<br/>
            </div>
            <div className="col-sm-4 LoanOptionsBox">
              <input type="checkbox" />Max<br/>
              <input type="checkbox" />Minimum<br/>
              <input type="checkbox" />Average<br/>
              <input type="checkbox" />Total<br/>
              <input type="checkbox" />Count<br/>
            </div>
            <div className="col-sm-4 LoanOptionsBox">
              <input type="checkbox" /> Sucessful loans<br/>
              <input type="checkbox" /> Loans with problems<br/>
            </div>
          </div>
        </div>
        <br/>
        <div style={{textAlign: "center", width: "100%"}}>
          <div onClick={queryFunction} style={{textAlign: "center", width: "50px", border: "2px solid", display: "inline-block"}} >Test</div>
        </div>

        <br/>

        <div id="queryResults"></div>
      </div>
    );
  }
}

export default LoanGUI;
