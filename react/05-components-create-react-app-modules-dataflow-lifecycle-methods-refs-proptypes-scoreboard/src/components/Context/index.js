import React, { Component } from 'react';

// Set-up the provider and consumer:

const ScoreboardContext = React.createContext();

export const Consumer = ScoreboardContext.Consumer;

// For the provider, tnstead of exporting as a variable (as in the case of Consumer)...
/*
export const Provider = ScoreboardContext.Provider;
*/
// we export it as higher order (class) components (HOCs):

export class Provider extends Component {

    state = {
        players: [
            {
            id: 1,
            name: "Guil",
            score: 0
            },
            {
            id: 2,
            name: "Treasure",
            score: 0
            },
            {
            id: 3,
            name: "Ashley",
            score: 0
            },
            {
            id: 4,
            name: "James",
            score: 0
            }
        ]
    };

    // To assign an ID every time a new player is added. Initialized with the last id in the original players list
    prevPlayerId = this.state.players.length;

    // Moved from Counter.js here. Now we need to distinguish each player:
    handleScoreChange = (index, delta) => {
        // console.log(index, delta);
        this.setState( prevState => ({
            score: (prevState.players[index].score + delta >= 0) ? prevState.players[index].score += delta : prevState.score = 0
        }));
    }

    // decrementScore = () => {
    //   this.setState( prevState => ({
    //     score: (prevState.score > 0) ? prevState.score - 1 : prevState.score = 0
    //   }));
    // }

    handleRemovePlayer = (id) => {
        this.setState( prevState => {
            // console.log( id );
            return {
                players: prevState.players.filter(p => p.id !== id)
            };
        });
    }

    handleAddPlayer = (name) => {
        this.setState( prevState => {
            // console.log( this.prevPlayerId + 1 );
            return {
            players: [
                ...prevState.players,
                {
                name,
                score: 0,
                id: this.prevPlayerId += 1
                }
            ]
            };
        });
      }
    
    // Leader(s) gold crown icon:
    getHighScore = (playersObject) => {
        // console.log('Extracting listScores:')
        const listScores = playersObject.map( (player) => player.score );
        // console.log(`listScores: ${listScores}`);
        const highScore = Math.max(...listScores);
        // console.log(`highScore: ${highScore}`);
        if (highScore) {
            return highScore;
        } else {
            return null;
        }
    }

    render() {
        return (
            // <Provider> is replaced by <ScoreboardContext.Provider, as this leaves now in the same file and is not exported into App.js
            <ScoreboardContext.Provider value={{
                players: this.state.players,
                actions: {
                  scoreChange: this.handleScoreChange,
                  removePlayer: this.handleRemovePlayer,
                  addPlayer: this.handleAddPlayer,
                  getHighScore: this.getHighScore,
                }
            }}>
            {/* Special prop in react that lets you pass components as data to other components: */}
            { this.props.children }
            </ScoreboardContext.Provider>
        );
    }
}