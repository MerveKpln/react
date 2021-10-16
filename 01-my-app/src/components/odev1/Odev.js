import React, { useState } from "react";
import { ButtonGroup, Button, ProgressBar } from "react-bootstrap";

const Odev = () => {
  const [sayac, setSayac] = useState(0);

  const arttir = () => {
    if (sayac < 100) setSayac(sayac + 10);
  };
  const azalt = () => {
    if (sayac > 0) setSayac(sayac - 10);
  };

  return (
    <div>
      <ButtonGroup aria-label="Basic example">
        <Button variant="primary" onClick={arttir}>
          +
        </Button>
        <Button variant="danger" onClick={azalt}>
          -
        </Button>
      </ButtonGroup>
      <div>
        <ProgressBar variant="info" now={sayac} label={`${sayac}%`} />
      </div>
    </div>
  );
};

export default Odev;
