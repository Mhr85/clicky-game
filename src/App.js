import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import Card from "./components/Card";
import Footer from "./components/Footer";
import dog from "./dog.json";
import './App.css';


class App extends Component {
  state = {
    dog: dog,
    clickedDog: [],
    score: 0
  };

  imageClick = event => {
    const currentDog = event.target.alt;
    const DogAlreadyClicked =
      this.state.clickedDog.indexOf(currentDog) > -1;

    if (DogAlreadyClicked) {
      this.setState({
        dog: this.state.dog.sort(function (a, b) {
          return 0.5 - Math.random();
        }),
        clickedDog: [],
        score: 0
      });
      alert("Replay?");

    } else {
      this.setState(
        {
          dog: this.state.dog.sort(function (a, b) {
            return 0.5 - Math.random();
          }),
          clickedDog: this.state.clickedDog.concat(
            currentDog
          ),
          score: this.state.score + 1
          
        },
        () => {
          if (this.state.score === 12) {
            alert("You Win!");
            this.setState({
              dog: this.state.dog.sort(function (a, b) {
                return 0.5 - Math.random();
              }),
              clickedDog: [],
              score: 0
            });
          }
        }
      );
    }
  }


  render() {
    return (
      <div>
        <Navbar />
        <Jumbotron  score={this.state.score} />
        <div className= "wrapper row" >

          {this.state.dog.map(dog => (
            <Card

              imageClick={this.imageClick}
              id={dog.id}
              key={dog.id}
              image={dog.image}
            />
          ))}
        </div>
        {<Footer />}
      </div>
    );
  }
}
export default App;
