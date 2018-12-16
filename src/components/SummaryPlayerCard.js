import React, { Component } from 'react';

class SummaryPlayerCard extends Component {
  render() {
    const { player } = this.props;
    return (
      <li className="current-player-card">
        <div className="summary-player-info">
          <p className="summary-name">{player.name}</p>
        </div> 
        <div className="summary-player-info bi-fs-infobox">
          <p>Total buy in: {player.buyin}</p>
          <p>Final Stack: {player.finalStack}</p>
        </div>
        <div className="summary-player-win">
          <p>Wins: {player.finalStack - player.buyin}</p>
        </div>
      </li>
    );
  }
}

export default SummaryPlayerCard;