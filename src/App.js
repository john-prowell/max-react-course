import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

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
    const style = {
      backgroundColor: "green",
      color: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
    };

    let persons = null; // no persons showing
    if (this.state.showPersons) {
      // when button clicked and showPersons state updated to true
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                name={person.name}
                age={person.age}
                key={person.id}
                click={this.deletePersonHandler.bind(this, index)}
                // this function is executed on the onChange event passing in the event
                changed={event => this.nameChangeHandler(event, person.id)} // adds event handler to each person
                // that takes in the event and passes to the handler function
              />
            );
          })}
          {/* <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}
          />
          <Person
            name={this.state.persons[1].name} // props
            age={this.state.persons[1].age} // props
            click={this.switchNameHandler.bind(this, "Max!")} // props efficient way
            changed={this.nameChangeHandler}
          >
            My Hobbies: Racing
          </Person>
          <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age}
          /> */}
        </div>
      );
      style.backgroundColor = "red";
    }

    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push("red"); // classes= ['red'];
    }

    if (this.state.persons.length <= 1) {
      classes.push("bold"); // classes= ['red', 'bold'];
    }

    return (
      <div className="App">
        <h1>Hi, I am a React App!</h1>
        <p className={classes.join(" ")}>This is really working!</p>
        <button
          style={style} // add style object
          onClick={this.togglePersonsHandler}
        >
          Toggle Persons
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
