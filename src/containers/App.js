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

    person.name = event.target.value;

    // make copy of persons array
    const persons = [...this.state.persons];
    // update specific person object in array with new person object
    persons[personIndex] = person;

    this.setState({ persons: persons });
  };

  deletePersonHandler = personIndex => {
    // const persons = this.state.persons.slice(); // make copy array
    const persons = [...this.state.persons]; // spread operator make copy of persons array
    persons.splice(personIndex, 1); // edit it
    this.setState({ persons: persons }); // update state with new array
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    });
  };

  render() {
    let persons = null; // no persons showing
    if (this.state.showPersons) {
      // when button clicked and showPersons state updated to true
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangeHandler}
        />
      );
    }

    return (
      <div className={classes.App}>
        <Cockpit
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler}
        />
        {persons}
      </div>
    );
  }
}

export default App;
