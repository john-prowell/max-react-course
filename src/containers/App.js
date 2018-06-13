import React, { Component } from "react";
import classes from "./App.css";
import Persons from "../Components/Persons/Persons";
import Cockpit from "../Components/Cockpit/Cockpit";

class App extends Component {
  state = {
    persons: [
      { id: "0", name: "Max", age: 28 },
      { id: "1", name: "Manu", age: 29 },
      { id: "2", name: "Stephanie", age: 26 }
    ],
    otherState: "some other value",
    showPersons: false
  };

  // Called when typing into input to change the name
  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      // make copy of the person in state array of persons
      ...this.state.persons[personIndex] // use spread operator in front to fetch it
    };
    // alternative way to make copy of a specfic person object
    // const person = Object.assign(this.persons[personIndex]);

    // assign person.name the input value
    person.name = event.target.value;

    // make copy of persons array using the spread operator
    const persons = [...this.state.persons];

    // update specific person object in array with new person object
    persons[personIndex] = person;

    // replace the persons array with updated persons
    this.setState({ persons: persons });
  };

  // Called when name paragraph element is clicked on to delete person
  deletePersonHandler = personIndex => {
    // const persons = this.state.persons.slice(); // make copy array
    const persons = [...this.state.persons]; // spread operator make copy of persons array
    persons.splice(personIndex, 1); // edit it
    this.setState({ persons: persons }); // update state with new array
  };

  // toggles showPersons state (true/false) when button clicked
  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    });
  };

  render() {
    let persons = null; // no persons showing
    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          // when paragraph element of each person text clicked
          clicked={this.deletePersonHandler}
          // when input typed into to change the name
          changed={this.nameChangeHandler}
        />
      );
    }

    return (
      <div className={classes.App}>
        <Cockpit
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          // when button clicked and showPersons state updated to true
          clicked={this.togglePersonsHandler}
        />
        {/* persons component displayed */}
        {persons}
      </div>
    );
  }
}

export default App;
