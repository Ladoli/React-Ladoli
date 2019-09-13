import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import swal from 'sweetalert2';
import ProjectBanner from './ProjectBanner.js'

let cardsInDeck = new Array(); //Array of cards not draw/in the deck
let P1 = 0; //Score or total value of the cards Player 1 has
let P2 = 0; //Score or total value of the cards Player 2 has
let P1Name = "Player 1"; //Name of Player 1, can be changed by user
let P2Name = "Player 2"; //Name of Player 2, can be changed by user
let winner =""; //Yes.
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

class Blackjack extends Component {


  componentDidMount() {
    this.deckShuffle(); //Shuffle Deck
    document.getElementById("pturn").innerHTML=turnName; //Codes below just show the users whose turn it is and the scores of Player1 and Player2
    document.getElementById("p1").innerHTML=P1;
    document.getElementById("p2").innerHTML=P2;

  }

  render() {
    thisF = this;
    return (
      <div style={{display: 'inline-block', height: '100%', width: '100%'}}>
        <Route render={()=><ProjectBanner/>}/>
        <div className="container">
          <div className="row">
        <div className="col-md-5 col-sm-12" style={{display: "inline-block", width: '100%', height: '100%'}}>
          <div id="UI">
            <div id ="changey"><p>
              Player 1 Name: <input type="text" id = "inputP1" defaultValue="Player 1"/><br/><br/>
              Player 2 Name: <input type="text" id = "inputP2" defaultValue="Player 2"/><br/><br/>
              <button id="changeName" onClick={this.changeName}>Change Names</button>
              <br/><br/></p>
            </div>
            <p>Turn: <label id ="pturn"></label>
              <br/>
              <label id ="p1name">Player 1</label> Total: <label id ="p1"></label>
              <br/>
              <label id ="p2name">Player 2</label> Total: <label id ="p2"></label>

              <br/><br/>

            </p>
              </div>
            </div>
            <div className="col-md-7 col-sm-12 container" style={{display: "inline-block", width: '100%', height: '100%'}}>
              <div className="row">
                <div style={{display: 'inline-block', height: 'auto', marginBottom: '10px'}}>
                  <div className="cardDeck col-xs-2"> <img id="Deck" src="Images/cardBack.png" alt="card back design"/>
                    <div className="cardAnimation">
                      <img id="cardBackAnimation" src="Images/transparent.png" alt="animationContainer"/>
                    </div>
                  </div>
                  <div className="cardslot col-xs-2" ><img id="p1card1" alt="Card container"  src="Images/cards/noCard.png"/>
                    <div className="cardAnimation">
                      <img id="p1c1Animation" src="Images/transparent.png" alt="animationContainer"/>
                    </div>
                  </div>
                  <div className="cardslot col-xs-2" ><img id="p1card2" alt="Card container"  src="Images/cards/noCard.png"/>
                    <div className="cardAnimation">
                      <img id="p1c2Animation" src="Images/transparent.png" alt="animationContainer"/>
                    </div>
                  </div>
                  <div className="cardslot col-xs-2" ><img id="p1card3" alt="Card container"  src="Images/cards/noCard.png"/>
                    <div className="cardAnimation">
                      <img id="p1c3Animation" src="Images/transparent.png" alt="animationContainer"/>
                    </div>
                  </div>
                  <div className="cardslot col-xs-2" ><img id="p1card4" alt="Card container"  src="Images/cards/noCard.png"/>
                    <div className="cardAnimation">
                      <img id="p1c4Animation" src="Images/transparent.png" alt="animationContainer"/>
                    </div>
                  </div>
                  <div className="cardslot col-xs-2" ><img id="p1card5" alt="Card container"  src="Images/cards/noCard.png"/>
                    <div className="cardAnimation">
                      <img id="p1c5Animation" src="Images/transparent.png" alt="animationContainer"/>
                    </div>
                  </div>
                </div>
                <div style={{height: 'auto'}}>
                  <div className="cardDeck col-xs-2" style={{opacity: 0}}>
                    <img alt="Card container"  src="Images/cards/noCard.png"/>
                  </div>
                  <div className="cardslot col-xs-2" ><img id="p2card1" alt="Card container"  src="Images/cards/noCard.png"/>
                    <div className="cardAnimation">
                      <img id="p2c1Animation" src="Images/transparent.png" alt="animationContainer"/>
                    </div>
                  </div>
                  <div className="cardslot col-xs-2" ><img id="p2card2" alt="Card container"  src="Images/cards/noCard.png"/>
                    <div className="cardAnimation">
                      <img id="p2c2Animation" src="Images/transparent.png" alt="animationContainer"/>
                    </div>
                  </div>
                  <div className="cardslot col-xs-2" ><img id="p2card3" alt="Card container"  src="Images/cards/noCard.png"/>
                    <div className="cardAnimation">
                      <img id="p2c3Animation" src="Images/transparent.png" alt="animationContainer"/>
                    </div>
                  </div>
                  <div className="cardslot col-xs-2" ><img id="p2card4" alt="Card container"  src="Images/cards/noCard.png"/>
                    <div className="cardAnimation">
                      <img id="p2c4Animation" src="Images/transparent.png" alt="animationContainer"/>
                    </div>
                  </div>
                  <div className="cardslot col-xs-2" ><img id="p2card5" alt="Card container"  src="Images/cards/noCard.png"/>
                    <div className="cardAnimation">
                      <img id="p2c5Animation" src="Images/transparent.png" alt="animationContainer"/>
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

  imageSwap(id, newSrc){
    let container = document.getElementById(id);
    if(container){
      document.getElementById(id).src = newSrc;
    }else{
      console.log(id)
    }
  }

  changeName(){
    P1Name = document.getElementById("inputP1").value;
    document.getElementById("p1name").innerHTML=P1Name;
    P2Name = document.getElementById("inputP2").value;
    document.getElementById("p2name").innerHTML=P2Name;
    document.getElementById("changey").style.display="none";
    if(turn === 1)
    {
      turnName = P1Name;
    }
    else
    {
      turnName = P2Name;
    }
    document.getElementById("pturn").innerHTML=turnName;
  }


  resetCardImages(){
    for(let i = 1; i < 6; i++ ){
      this.imageSwap("p1card"+i,noCardImage);
      this.imageSwap("p2card"+i,noCardImage);
      this.imageSwap("p1c"+i+"Animation",noAnimationImage);
      this.imageSwap("p2c"+i+"Animation",noAnimationImage);
    }
  }

  clearResults(){
    document.getElementById("result").value = "";
  }

  convertCard(cardToConvert) { //Do not call this function more as it messes up the "Ace" system if called elsewhere.
  cardToConvert = cardToConvert%13; //Gets the remainder after dividing by 13, because their are 13 variations of cards in a deck disregarding suites
  if(cardToConvert > 10 || cardToConvert === 0) //If the card dre is 11,12 or 0, then the user drew a "facecard" Jack/Queen/King
  {
    cardToConvert = 10;
  }
  else if(turn===1){ //This is like... the only feature with adequate turn representation because it happens before turn updates...
    if(cardToConvert===1) //Oh boy, the damn Aces. If the card drew has a remainder of 1, that means an Ace was drawn and it is Player 1s
    {
      p1RevealedAces++; //Since it was Player 1s Ace and we are giving it a value of 11, his RevealedAces is increased
      cardToConvert = 11; //Gives Aces the value of 11
    }
  }
  else{
    if(cardToConvert===1)
    {
      p2RevealedAces++;
      cardToConvert = 11;
    }
  }
  return cardToConvert; //Returns the value of the card
  }

  getSuite(cardToConvert) {
    let suiteTier = (cardToConvert/13); //There are 4 suites, 52/4 = 13 so...
    let suite ="";
    if(suiteTier <= 1){ //Cards 1-13 are Diamonds
      suite = "Diamonds"; //Assign Diamonds to the suite
    }
    else if(suiteTier <= 2){
      suite = "Hearts";
    }
    else if(suiteTier <= 3){
      suite = "Clubs";
    }
    else if(suiteTier <= 4){
      suite = "Spades";
    }

    return suite; //Returns the Suite of the card
  }

  draw(){
    let cardDrew = Math.floor(Math.random()*cardsInDeck.length); // Takes a random element index from the cardsInDeck array
    let drawn = cardsInDeck[cardDrew];
    let cardNumber = 0;
    if(turn===1){
      cardNumber = p1Cards+1;
    }
    else {
      cardNumber = p2Cards+1;
    }
    let d = new Date();
    this.imageSwap("p"+turn+"c" + cardNumber + "Animation","/Images/goldensparkes.gif?ver=" + d.getTime());
    this.imageSwap("cardBackAnimation","/Images/deckAnimation.gif?ver=" + d.getTime());
    let currentTurn = turn;
    setTimeout( function(){
      thisF.imageSwap("p"+currentTurn+"card" + cardNumber,"/Images/cards/" + drawn + ".png?ver=" +d.getTime());
      thisF.imageSwap("p"+currentTurn+"c" + cardNumber + "Animation","/Images/transparent.png");
    }, 800,currentTurn,cardNumber,drawn, thisF);
    cardsInDeck.splice(cardDrew, 1);
    endedTurn = "false"; //Says that the user did not end their turn
    return drawn;
  }

  over(score){ //Main function to check if someone has won the game
    if(score < 21) //If score, passed through the over function, is less than 21
    {
      if(turn === 1 && p2Cards >  4) //If it is Player 2s turn and Player 2 has 5 cards with a value under 21, Player 2 wins. This is the "Charlie" win critera
      {
        winner = P2Name;
        loser = P1Name;
        setTimeout(function() { //So pretty much all the setTimeout functions are there to let the animation run before the computer decides to go hijack the game
          swal({
            title: winner +" wins!",
            text: winner + " drew a card with a Suite of " + suite + " with a value of " + cardValue + ". " + winner + " has a total value of " + score + " while having 5 cards! "
          }).then(()=>{
            document.getElementById("result").value += winner + " has a total value of " + score + " while having 5 cards! " + winner +" wins!\n";
            thisF.deckShuffle();
          });
        }, ANIMATIONSPEED);
      }

      else if(turn === 2 && p1Cards >  4)
      {
        winner = P1Name;
        loser =P2Name;
        setTimeout(function() {
          swal({
            title: winner +" wins!",
            text: winner + " drew a card with a Suite of " + suite + " with a value of " + cardValue + ". " + winner + " has a total value of " + score + " while having 5 cards! "
          }).then(()=>{
            document.getElementById("result").value += winner + " has a total value of " + score + " while having 5 cards! " + winner +" wins!\n";
            thisF.deckShuffle();
          });
        }, ANIMATIONSPEED);
      }
    }

    else if(score > 21) //If score, passed through the over function, is over 21
    {
      if(turn === 1) //Again, because turn updates before this code runs, if the turn ==1, then it really means it is Player 2's turn...
      {
        winner = P1Name; //If it was Player 2s turn, then it was Player 2's score that passed 21. That means Player 1 wins
        loser = P2Name; //And if Player 1 wins then....
      }
      else //If its not Player 2s turn then...
      {
        winner = P2Name;
        loser = P1Name;
      }
      setTimeout(function() {
        swal({
          title: winner + " has won!",
          text: loser + " drew a card with a Suite of " + suite + " with a value of " + cardValue + ". " + loser + " has a total value of " + score + " which has hit over 21! "
        }).then(()=>{
          document.getElementById("result").value += loser + " has a total value of " + score + " which has hit over 21! " + winner + " has won!\n\n";
          thisF.deckShuffle(); //Because someone won, game is over and deck must be shuffled for the next game
        });
        //Tells whar card was drawn, its suite and declares the winner/loser along with the reason why someone won/lost
      }, ANIMATIONSPEED);
    }
    else if(score === 21) //If one side gets the score of 21, which is considered the best score in BlackJack
    {
      if(turn === 2) //Same as before, Turn was changed so this means if its Player 1s score that was passed through this function
      {
        winner = P1Name; //Winner is Player 1
      }
      else
      {
        winner = P2Name;
      }
      setTimeout(function() {
        swal({
          title: winner + " has won!",
          text: winner + " drew a card with a Suite of " + suite + " with a value of " + cardValue + ". " + winner + " has a total value of " + score + "! "
        }).then(()=>{
          //Tells what card was drawn, its suite and declares the winner/loser along with the reason why someone won/lost
          document.getElementById("result").value += winner + " has a total value of " + score + "! " + winner + " has won!\n\n";
          thisF.deckShuffle(); //Because someone won, game is over and deck must be shuffled for the next game
        });
      }, ANIMATIONSPEED);
    }
  }

  valueCompare(){ //Compares the scores of Player 1 and Player 2 and returns a message saying who the winner is.
    if(P1>P2){
      announceWinner(P1Name,P1)
    }
    else if(P2>P1){
      announceWinner(P2Name,P2)
    }
    else{
      swal("It is a tie!").then(()=>{
        document.getElementById("result").value = "It is a tie!";
        thisF.deckShuffle();
      });
    }

    function announceWinner(winner,score){
      swal({
        title: winner + " wins!",
        text: winner + " has a greater value with a score of " + score + ".",
      }).then(()=>{
        document.getElementById("result").value= winner + " has a greater value with a score of " + score + ". " + winner +" wins!\n";
        thisF.deckShuffle();
      });
    }
  }

  endTurn(){ //When someone doesn't want to move
    if(turn===1) //If its Player 1s turn...
    {
      turn++; //Make it Player 2s turn....
    }
    else
    {
      turn--;
    }
    if(turn === 1)
    {
      turnName = P1Name;
    }
    else
    {
      turnName = P2Name;
    }
    document.getElementById("pturn").innerHTML = turnName;	//To update whose turn it is. People lose track! User Experience!

    if(endedTurn==="false") //If the other player didn't end their turn as their last move
    {
      endedTurn = "true"; //So if the next move is to End their turn as well/stay
      if(turn === 2)
      {
        document.getElementById("result").value += P1Name + " has passed and ended their turn!\n\n";
        document.getElementById("result").scrollTop = document.getElementById("result").scrollHeight; //To make it scroll down! Maybe I should jQuery this, was having issues
      }
      else
      {
        document.getElementById("result").value +=P2Name + " has passed and ended their turn!\n\n";
        document.getElementById("result").scrollTop = document.getElementById("result").scrollHeight;
      }
    }
    else //If the other player did end their turn as well then game is over and the one with a higher value wins
    {
      thisF.valueCompare();
    }
  }

  cardDraw(){
      cardDrew = thisF.draw(); //Draws a random card from the deck
      cardValue = thisF.convertCard(cardDrew); //Gets the cards BlackJack value
      suite = thisF.getSuite(cardDrew); //Gets the cards suite
      var playerMoving; //Says which player is moving/whose turn it is~
      if(turn === 1)
      {
        playerMoving = P1Name;
      }
      else
      {
        playerMoving = P2Name;
      }
      document.getElementById("result").value += playerMoving + " drew a card with a Suite of " + suite + " and a value of " + cardValue + ". There are now " + cardsInDeck.length + " cards left in deck now. \n\n";
      //Returns the results of a Players Draw
      document.getElementById("result").scrollTop = document.getElementById("result").scrollHeight;
      if(turn===1) //If its player 1s turn
      {
        p1Cards++;
        turn = 2; //Make it Player 2s turn
        P1 += cardValue; //Player 1s score is updated with the value of the card drawn
        P1 = thisF.Ace(P1); //Checks to see if Player 1 has atleast one Ace and there is a better score for Player 1 to use
        document.getElementById("p1").innerHTML=P1; //Updates Player 1s score
        thisF.over(P1); //Checks to see if a winner/loser is revealed from the score
      }
      else
      {
        p2Cards++;
        turn--;
        P2 += cardValue;
        P2 = thisF.Ace(P2);
        document.getElementById("p2").innerHTML = P2;
        thisF.over(P2);
      }
    if(turn === 1)
    {
      turnName = P1Name;
    }
    else
    {
      turnName = P2Name;
    }
    document.getElementById("pturn").innerHTML= turnName;
  }

  Ace(score1){ //I hate this function! But its needeed, So it deals with Aces in Blackjack as Aces can have a value of 1 or 11. This function determines what value Aces players have will take.

    let score = Number(score1); //Function passeed through Ace() is the score of Player 1 (P1) or Player 2 (P2)
    if(turn === 2) //This is a bit confusing but because the turn has changed before the Ace() function is called, if turn===2, then it means it is player 1s turn.
    {
      while(score > 21 && p1RevealedAces > 0)//If the score of Player 1 is above 21 and he has an Ace with a value of 11
      {
        score-=10; //Score of the player is reduced by 10
        p1RevealedAces--; //Because the Ace now takes the value of 1, it is not a revealed Ace anymore.
        p1HiddenAces++; //The Ace is now a HiddenAce, or in otherwords, has a value of 1
      }
      //This while loop is probably not needed unless we want to add more features later on such as a "Card delete"
      while(score<=11 && p1HiddenAces > 0)
      {
        score+= 10;
        p1RevealedAces++;
        p1HiddenAces--;
      }
    }
    else //If it is not Player 1s turn, then it is Player 2s turn. Uses same code as Player 1 but with Player 2's variables.
    {
      while(score>21 && p2RevealedAces > 0)
      {
        score-=10;
        p2RevealedAces--;
        p2HiddenAces++;
      }
      //This while loop is probably not needed unless we want to add more features later on such as a "Card delete"
      while(score<=11 && p2HiddenAces > 0)
      {
        score+=10;
        p2RevealedAces++;
        p2HiddenAces--;
      }
    }
    return score; //Returns a score after determining the best value of Ace
  }

  deal(){
    document.getElementById("endofTurn").style.display = "inline-block";
    document.getElementById("Draw").style.display = "inline-block";

    this.cardDraw();
    this.cardDraw();
    this.cardDraw();
    this.cardDraw();
  }

  deckShuffle(){ //Function called to restore deck to its unused state as well as other relevant variables to their initial state
    cardsInDeck.splice(0,cardsInDeck.length); //Deletes contents of the array
    for(let index = 0; index < 52; index++) //Loop fills array with the Integers 1-52 representing cards
    {
      cardsInDeck.push(index+1); //Because we won't have a card 0... Could actually add it and other "special" cards if we want to make something better than Blackjack
    }
    P1 = 0; //Shuffle function also returns everything to the start, Player1 and Player2 scores as well as turns, aces and the endedTurn checker are included in this for that reason.
    P2 = 0;
    turn = 1;
    p1RevealedAces = 0;
    p2RevealedAces = 0;
    p1HiddenAces = 0;
    p2HiddenAces = 0;
    p1Cards = 0;
    p2Cards = 0;
    endedTurn = "false";
    this.resetCardImages();
    if(turn === 1)
    {
      turnName = P1Name;
    }
    else
    {
      turnName = P2Name;
    }
    document.getElementById("pturn").innerHTML=turnName;
    document.getElementById("p1").innerHTML=P1;
    document.getElementById("p2").innerHTML=P2;
    document.getElementById("result").value +="Shuffling the deck! \n\n";
    document.getElementById("result").scrollTop = document.getElementById("result").scrollHeight;
    this.deal();
  }
}

export default Blackjack;
