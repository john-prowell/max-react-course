import React from "react";
import Person from "./Person/Person";

/* Props Persons component is passed from App component */
// persons: persons array of objects from state
// clicked: deletePersonHandler
// changed: nameChangeHandler

// The Persons component takes in the persons array of person objects
// Iterates through each person
// Adds the props passed in to each person
// Then returns and displays the person component for each person passing on those props

const persons = props =>
  // placed  outside of the return so it returns for each person in array
  props.persons.map((person, index) => {
    return (
      <Person
        click={() => props.clicked(index)} // calls the deletePersonHandler with the index of the person that was clicked
        name={person.name} // grabbed off of each person
        age={person.age}
        key={person.id}
        // this function is executed on the onChange event passing in the event
        changed={event => props.changed(event, person.id)} // adds event handler to each person
        // that takes in the event and passes to the handler function
      />
    );
  });

export default persons;
