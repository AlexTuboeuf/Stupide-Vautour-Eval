import React, {Component} from 'react';
import {getRandomInt, shuffle} from "./Utils/fonctionRandom.js";
import './App.css';
import Card from './components/Card'
import Carte1 from './images/Carte1.png'
import Carte2 from './images/Carte2.png'
import Carte3 from './images/Carte3.png'
import Carte4 from './images/Carte4.png'
import Carte5 from './images/Carte5.png'
import Carte6 from './images/Carte6.png'
import Carte7 from './images/Carte7.png'
import Carte8 from './images/Carte8.png'
import Carte9 from './images/Carte9.png'
import Carte10 from './images/Carte10.png'
import Carte11 from './images/Carte11.png'
import Carte12 from './images/Carte12.png'
import Carte13 from './images/Carte13.png'
import Carte14 from './images/Carte14.png'
import Carte15 from './images/Carte15.png'
import Champ1 from './champions/Ekko.png'
import Champ2 from './champions/Nami.png'
import backCard from './images/backcard.png' //Carte du milieu
import background from './images/map.jpg' // Fond de l'app
import doscarte from './images/dos_un.png' //Carte dos tournée

export default class App extends Component {
    constructor() {
        super();
        
        this.state = {
            cardBonusMalus: [],
            handP1: [],
            handP2: [],
            currentPlayer: 0,
            leftPts: 0,
            rightPts: 0,
            winner: '',
        };
        
    }
    
    startGame = () => {
        // Générer Main 1
        let _handP1 = [
        {backgroundImage : Carte1},
        {backgroundImage : Carte2},
        {backgroundImage : Carte3},
        {backgroundImage : Carte4},
        {backgroundImage : Carte5},
        {backgroundImage : Carte6},
        {backgroundImage : Carte7},
        {backgroundImage : Carte8},
        {backgroundImage : Carte9},
        {backgroundImage : Carte10},
        {backgroundImage : Carte11},
        {backgroundImage : Carte12},
        {backgroundImage : Carte13},
        {backgroundImage : Carte14},
        {backgroundImage : Carte15},
      ]
        // Générer Main 2
        let _handP2 = [
        {backgroundImage : Carte1},
        {backgroundImage : Carte2},
        {backgroundImage : Carte3},
        {backgroundImage : Carte4},
        {backgroundImage : Carte5},
        {backgroundImage : Carte6},
        {backgroundImage : Carte7},
        {backgroundImage : Carte8},
        {backgroundImage : Carte9},
        {backgroundImage : Carte10},
        {backgroundImage : Carte11},
        {backgroundImage : Carte12},
        {backgroundImage : Carte13},
        {backgroundImage : Carte14},
        {backgroundImage : Carte15},
      ]
        // Générer Cartes Bonus Malus
      let _cardBonusMalus = [
          {backgroundImage : backCard, value : 1},
          {backgroundImage : backCard, value : 2},
          {backgroundImage : backCard, value : 3},
          {backgroundImage : backCard, value : 4},
          {backgroundImage : backCard, value : 5},
          {backgroundImage : backCard, value : 6},
          {backgroundImage : backCard, value : 7},
          {backgroundImage : backCard, value : 8},
          {backgroundImage : backCard, value : 9},
          {backgroundImage : backCard, value : 10},
          {backgroundImage : backCard, value : -1},
          {backgroundImage : backCard, value : -2},
          {backgroundImage : backCard, value : -3},
          {backgroundImage : backCard, value : -4},
          {backgroundImage : backCard, value : -5},
      ]
        // SetState
        this.setState({
            handP1: _handP1,
            handP2: _handP2,
            cardBonusMalus : _cardBonusMalus,
            currentPlayer: 1
        })
        console.log(this.state);
    }

    displayHandOrNot = (cardValue, player) => {

        // Vérifier si je joueur est le joueur actif

        if(player === this.state.currentPlayer){
            return <img src={cardValue}></img>
        } else {
            return <img src={doscarte}></img>
        }
    }
    
    playCard = (cardNumber, player) => {

        if(player !== this.state.currentPlayer){
            return;
        }
        
        let nextPlayer;

        if(this.state.currentPlayer === 2){
            nextPlayer = 1;

        } else {
            nextPlayer = this.state.currentPlayer + 1;
        }
        this.setState({currentPlayer: nextPlayer});
        
        //alert(cardNumber, player);

        this.deleteCard(player, cardNumber,);
    }
    generateNumberMiddle = () => {
        // Calcule une position aléatoire dans le deck
        let random = getRandomInt(this.state.deck.length);
    }
    //supprimer les cartes
    deleteCard = (currentPlayer, cardNumber, cardBonusMalus) => {
        
        let _deck;
        switch(currentPlayer){
            case 1:
                _deck = this.state.handP1;
                break;
            case 2:
                _deck = this.state.handP2;
                break;
            
            default: 
                _deck = [];
        }

        
        let newDeck = _deck.filter((card) => {
            return card.backgroundImage !== cardNumber;
        })
        
        switch(currentPlayer){
            case 1:
                this.setState({handP1: newDeck})
                break;
            case 2:
                this.setState({handP2: newDeck})
            break;

            default: 

        }

        console.log(newDeck);
    }  
    
        //Rendu source
    render() {
        var activeClass = "portfolio-experiment";
        if (this.state.currentPlayer !== 0){
            activeClass = "Start isActive";
        };
        
        return (
          
            <div className="App">
              <div className="background">
              <img src={background} width="100%"></img>
              </div>
                <section class={activeClass} onClick={this.startGame}>
                    <a>
                        <span class="text">Start Game</span>
                        <span class="line -right"></span>
                        <span class="line -top"></span>
                        <span class="line -left"></span>
                        <span class="line -bottom"></span>
                    </a>
                </section>
                

                <div className="Champ1">
                <img src={Champ1}></img>
                </div>
                { this.state.currentPlayer === 1 ? <p className="jouerTexte1">Joueur 1 </p> : <p className="attendTexte1">Attend ton tour</p> }
                    <div className="Row1">
                    <div className="cardBonusMalus">
                    <img src={backCard}></img>
                </div>
                {
                    this.state.handP1.map((card) => {
                        return (
                            
                            <div className="buttonX" onClick={() => this.playCard(card.backgroundImage, 1)}>
                                {this.displayHandOrNot(card.backgroundImage, 1)}
                                
                            </div>
                            
                        )
                        
                    })
                }</div>


                <div className="Champ2">
                <img src={Champ2}></img>
                </div>
                { this.state.currentPlayer === 2 ? <p className="jouerTexte2">Joueur 2 </p> : <p className="attendTexte2">Attend ton tour</p> }
                <div className="Row2">
                {
                    this.state.handP2.map((card) => {
                        return (
                            <div className="buttonX" onClick={() => this.playCard(card.backgroundImage, 2)}>
                                {this.displayHandOrNot(card.backgroundImage, 2)}
                            </div>
                        )
                    })
                        
                }</div>
                
            </div>
        );
    }
    
}