import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import data from "../../data/persons.json";
import Person from "./Person";

const Birthday = () => {
  const [persons, setPersons] = useState(data);

  const temizle = () => {
    setPersons([]);
  };
  const yukle = () => {
    setPersons(data);
  };
  return (
    <Card>
      <Card.Body>
        <h1>Bugun doganlar</h1>
        <p>Bugun dogan {persons.length} kisi bulundu</p>

        {persons.map((item) => {
          const { image, name, age, id } = item;
          return <Person image={image} name={name} age={age} key={id} />;
        })}

        <Button variant="danger" onClick={temizle}>
          Temizle
        </Button>
        <Button variant="success" onClick={yukle}>
          Yukle
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Birthday;
