import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [sayac, setSayac] = useState(0);

  useEffect(() => {
    fetch("https://restcountries.com/v2/all")
      .then((resp) => resp.json())
      .then((data) => {
        setCountries(data);
      });
    const sira = () => {
      setSayac(sayac + 1);
    };
  }, []);
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Bayrak</th>
          <th>Ulke</th>
          <th>Nufus</th>
          <th>Baskent</th>
        </tr>
      </thead>
      <tbody>
        {countries.map((country) => {
          return (
            <tr>
              <td>{sira}</td>
              <td>
                <img style={{ width: "10rem" }} src={country.flag} />
              </td>
              <td>{country.name}</td>
              <td>{country.population}</td>
              <td>{country.capital}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default Countries;
