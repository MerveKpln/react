import React, { useState, useEffect } from "react";

const ChangeTitle = () => {
  const [sayac, setsayac] = useState(0);

  const arttir = () => {
    setsayac(sayac + 1);
  };

  useEffect(() => {
    document.title = `${sayac} kere tiklandi`;
  }, [sayac]);
  return (
    <div>
      <h2>{sayac} kere tikladin</h2>
      <button onClick={arttir}>TIKLA</button>
    </div>
  );
};

export default ChangeTitle;
