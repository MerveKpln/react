import React, { useState } from "react";
import { Button } from "react-bootstrap";

//1-Oncelikle useSatet import edilir

const State = () => {
  //2-useState Tanimlanmali
  //sayac degiskeni, degeri saklar, setSayac ise degeri degistiren methoddur

  const [sayac, setSayac] = useState(0);

  const artir = () => {
    setSayac(sayac + 1);
  };

  const azalt = () => {
    setSayac(sayac - 1);
  };

  const reset = () => {
    setSayac(sayac == "0");
  };

  //state yerine normal bir degisken ile yapilabilir mi?
  /* var sayac = 0;

  const artir = () => {
    sayac = sayac + 1;
    console.log(sayac);
  };
 */
  return (
    <div>
      <h1>Sayac Degeri : {sayac}</h1>
      <Button variant="info" onClick={artir}>
        +
      </Button>
    </div>
  );
};

export default State;
