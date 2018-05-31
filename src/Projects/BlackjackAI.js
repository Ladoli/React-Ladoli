import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import swal from 'sweetalert2';
import ProjectBanner from './ProjectBanner.js';

let cardsInDeck = new Array(); //Array of cards not draw/in the deck
let P1 = 0; //Score or total value of the cards Player 1 has
let P2 = 0; //Score or total value of the cards Player 2 has
let P1Name = "Player 1"; //Name of Player 1, can be changed by user
let P2Name = "Blackjack Dealer"; //Name of Player 2, can be changed by user
let winner ="";
let loser ="";
let turn = 1; //Variable to keep track of turns
let endedTurn = "false"; //Checks if the last turn done was "End of turn"
let cardDrew; //Variable containing the "value" of the card drawn. This value is from 1-52 symbolizing the cards in a deck.
let suite; //Contains the suite of a draw card such as Hearts or Diamonds
let p1RevealedAces = 0; //Player 1 Aces with the value of 11
let p2RevealedAces = 0; //Player 2 Aces with the value of 11
let p1HiddenAces = 0; //Player 2 Aces with the value of 1
let p2HiddenAces = 0; //Player 2 Aces with the value of 1
let p1Cards = 0; //How many cards Playe 1 has, useful for putting pictures and for the "Charlie" win test
let p2Cards = 0;
let turnName=""; //Name of the Player whose turn it is...
const ANIMATIONSPEED = 1000;
const noCardImage = "Images/cards/noCard.png";
const noAnimationImage = "Images/transparent.png";
let cardValue = 0;
let thisF;

class BlackjackAI extends Component {
  componentDidMount() {
    // this.deckShuffle();
    document.getElementById("pturn").innerHTML=turnName;
    document.getElementById("p2").innerHTML=P2;

  }

  render() {
    let thisF = this;
    return (
      <div style={{display: 'inline-block', height: '100%', width: '100%'}}>
        <Route render={()=><ProjectBanner/>}/>
        <div className="container blackjackContainer">
          <div className="row">
            <div className="col-lg-5 col-md-12" style={{display: "inline-block", width: '100%', height: '100%'}}>
    		<div id="UI">
    			<div id ="changey"><p>
    				Player 1 Name: <input type="text" id = "inputP1" value="Player 1"></input><br/><br/>
    				<button id="changeName">Change Names</button>

    				<br/><br/></p>
    			</div>
    			<p>Turn: <label id ="pturn"></label>
    				<br/>
    				<label id ="p1name">Player 1 </label> Total: <label id ="p1"></label>
    				<br/>
    				<label id ="p2name">Blackjack Dealer</label> Total: <label id ="p2"></label>

    				<br/><br/><br/>
          </p>
    				</div>
          </div>

          <div className="col-lg-7 col-md-12 container" style={{textAlign: "center", display: "inline-block", width: '100%', height: '100%'}}>
            <div className="row">
              <div style={{display: 'inline-block', height: 'auto', marginBottom: '10px'}}>
              <div>
    						<div className="cardslot " ><img id="p1card1" src="Images/cards/noCard.png"/>
    							<div className="cardAnimation">
    								<img id="p1c1Animation" src="Images/transparent.png"/>
    							</div>
    						</div>
    						<div className="cardslot " ><img id="p1card2" src="Images/cards/noCard.png"/>
    							<div className="cardAnimation">
    								<img id="p1c2Animation" src="Images/transparent.png"/>
    							</div>
    						</div>
    						<div className="cardslot " ><img id="p1card3" src="Images/cards/noCard.png"/>
    							<div className="cardAnimation">
    								<img id="p1c3Animation" src="Images/transparent.png"/>
    							</div>
    						</div>
    						<div className="cardslot " ><img id="p1card4" src="Images/cards/noCard.png"/>
    							<div className="cardAnimation">
    								<img id="p1c4Animation" src="Images/transparent.png"/>
    							</div>
    						</div>
    						<div className="cardslot " ><img id="p1card5" src="Images/cards/noCard.png"/>
    							<div className="cardAnimation">
    								<img id="p1c5Animation" src="Images/transparent.png"/>
    							</div>
    						</div>
    					</div>
    					<div className="cardSpacer"></div>
    					<div>
    						<div className="cardslot " ><img id="p2card1" src="Images/cards/noCard.png"/>
    							<div className="cardAnimation">
    								<img id="p2c1Animation" src="Images/transparent.png"/>
    							</div>
    						</div>
    						<div className="cardslot " ><img id="p2card2" src="Images/cards/noCard.png"/>
    							<div className="cardAnimation">
    								<img id="p2c2Animation" src="Images/transparent.png"/>
    							</div>
    						</div>
    						<div className="cardslot " ><img id="p2card3" src="Images/cards/noCard.png"/>
    							<div className="cardAnimation">
    								<img id="p2c3Animation" src="Images/transparent.png"/>
    							</div>
    						</div>
    						<div className="cardslot " ><img id="p2card4" src="Images/cards/noCard.png"/>
    							<div className="cardAnimation">
    								<img id="p2c4Animation" src="Images/transparent.png"/>
    							</div>
    						</div>
    						<div className="cardslot " ><img id="p2card5" src="Images/cards/noCard.png"/>
    							<div className="cardAnimation">
    								<img id="p2c5Animation" src="Images/transparent.png"/>
    							</div>
    						</div>
    					</div>
    				</div>
    			</div>
        </div>
      </div>
    </div>
        <div className="cardActionPanel">
          <button className="waitForAnimation cardAction" id="Draw" onClick={this.cardDraw}>HIT</button>
          <div style={{display: 'inline-block', width:'20%'}}></div>
          <button className="cardAction" id="endofTurn" onClick={this.endTurn}>STAY</button>
          <br/>
          <br/>
          <textarea readOnly name="result" id="result" style={{resize: 'none', width:'70%', textAlign: 'center'}}></textarea>
          <br/>
          <button id="clearThis" onClick={this.clearResults}>Clear</button>
        </div>
      </div>


    );
  }
}

export default BlackjackAI;
