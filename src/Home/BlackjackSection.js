import React, { Component } from 'react';


class BlackjackSection extends Component {

  componentDidMount() {
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-sm-6 col-xs-12 blackjacklinks noSidePadding">
              <p>Play with a friend</p>
                <br/>
                  <a href="./Blackjack">
                <div id="pvp">
                  <div id="pvpBack"></div>
                  <div id="pvpFront"></div>
                </div>
              </a>
            </div>
            <div className="col-lg-6 col-sm-6 col-xs-12 blackjacklinks noSidePadding">
              <p>Play against the Dealer</p>
                <br/>
                  <a href="https://ladoli.github.io/BlackjackAI.html">
                <div id="vsDealer">
                  <div id="vsDealerBack"></div>
                  <div id="vsDealerFront"></div>
                </div>
              </a>
            </div>
            <br/><br/><br/><br/>
            <br/><br/>
          </div>
        </div>

        <br/><br/>
        <br/><br/>
      </div>
    );
  }
}

export default BlackjackSection;
