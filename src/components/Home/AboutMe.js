import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Card, Grid, Icon, Table, Button } from 'semantic-ui-react';


class AboutMe extends Component {

  componentDidMount() {
  }

  render() {
    return (
      <div className="flexCenter" style={{minHeight: "100vh", minWidth: "100vw", display: "flex", paddingTop: "40px", paddingBottom: "40px"}}>
        <Grid  stackable doubling columns={2}  style={{ minWidth: "100vw"}}>
          <Grid.Column>
            <div style={{ display: "inline-block", verticalAlign: "bottom", textAlign: "center", width: "100%"}}>
              <a href="https://www.linkedin.com/in/angelo-villadolid-216314163/"  style={{ display: "inline-block", textAlign: "center"}}>
                <div className="picCont" >
                  <img src="Images/PortfolioPic.jpg" id="portfolioPic" alt="Me"/>
                </div>
              </a>
              <p style={{fontSize: "3vh", margin: "0px", opacity: ".7", fontWeight: "500"}}>Fullstack Developer</p>
              <p style={{fontSize: "5vh", color: "rgb(50,50,50)", fontWeight: "400"}}>Angelo Villadolid</p>
            </div>
          </Grid.Column>
          <Grid.Column stretched>
            <Card centered className="animateOnScroll hiddenStateScroll">
              <Card.Header>
                <h1 style={{fontSize: "3rem", opacity: ".9"}}>
                  Who am I?
                </h1>
              </Card.Header>
              <Card.Content >
                <Table selectable padded>
                  <Table.Body>
                    <Table.Row>
                      <Table.Cell collapsing>
                        <Icon color='blue' name='eye' />
                      </Table.Cell>
                      <Table.Cell>
                        A vancouverite with a love for pretty UI
                      </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell collapsing>
                        <Icon  color='green' name='angle double up' />
                      </Table.Cell>
                      <Table.Cell>
                        A devotion to self-improvement
                      </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell collapsing>
                        <Icon  color='red' name='food' />
                      </Table.Cell>
                      <Table.Cell>
                        And a passion for cooking~
                      </Table.Cell>
                    </Table.Row>
                  </Table.Body>
                </Table>
              </Card.Content>
              <Card.Content extra style={{textAlign: "center"}}>
                {/* <a href="mailto:villadolidangeloryan@gmail.com">Make something special with me</a><br/>
                OR
                <br/> */}
                <Link to="/ProjectList">
                  <Button primary>
                    Checkout what I've made
                  </Button>
                </Link>
                {/* <Link to="/ProjectList"></Link> */}
              </Card.Content>
            </Card>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default AboutMe;
