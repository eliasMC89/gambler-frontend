import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import cash from '../../lib/cashGame-service';

import Header from '../../components/Header';
import CurrentPlayerCard from '../../components/CurrentPlayerCard';

class CashGamePlaying extends Component {

  state = {
    currentPlayerList: [],
    pot: 0,
  }

  componentDidMount () {
    const { id } = this.props.match.params;
    cash.getDetail(id)
      .then((cashGame)=>{
        this.setState({
          currentPlayerList: cashGame.currentPlayerList,
          pot: cashGame.pot,
        })
      })
  }

  handleEndGame = () => {
    const { id } = this.props.match.params;
    cash.endGame(id);
  }

  render() {
    const { id } = this.props.match.params;
    const { currentPlayerList, pot } = this.state;
    return (
      <div className="container">
        <Header title="Game playing:" />
        <ul className="player-list" >
          {currentPlayerList.map((player)=>{
            return  <CurrentPlayerCard player={player} gameId={id} key={`id=${player._id}`}/>
          })}
        </ul>
        <div className="playing-pot-box">
          <h3 className="playing-pot">Pot: {pot} $</h3>
        </div>
        <div className="end-game-btn-box">
          <Link to={`/cash-game/${id}/summary`} onClick={this.handleEndGame} className="end-game-btn">END GAME</Link>
        </div>
      </div>
    );
  }
}

export default CashGamePlaying;