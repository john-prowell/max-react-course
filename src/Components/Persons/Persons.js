import React from "react";
import Person from "./Person/Person";

const persons = props =>
  props.persons.map((person, index) => {
    return (
      <Person
        click={() => props.clicked(index)}
        name={person.name}
        age={person.age}
        key={person.id}
        // this function is executed on the onChange event passing in the event
        changed={event => props.changed(event, person.id)} // adds event handler to each person
        // that takes in the event and passes to the handler function
      />
    );
  });

export default persons;
