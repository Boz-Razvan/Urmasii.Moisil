import { React, useState } from "react";
import "./styles/Participanti.css";

const Participanti = () => {
  const [data, setData] = useState([
    ['Name', ' 1', ' 2', ' 3'],
    ['Cosmin', '1', '2',],
    ['Razvan', '4', '5', ],
    ['Ion al Glanetasului', '7', '8', ],
    ['Vasile Baciu', '7', '8', ],
    ['George Bulbuc', '7', '8', ],
    ['Lica Samadaul', '7', '82', ],
    ['Ghita Carcimarul', '7', '8', ],
    ['Felix', '7', '8', ],
    ['Mirecea Eliade', '7', '8', ],





  ]);

  const calculateVector = (row) => {
    const values = row.slice(1);
    const sumOfSquares = values.reduce((acc, value) => acc + value ** 2, 0);
    const magnitude = Math.sqrt(sumOfSquares);
    const vector = values.map((value) => value / magnitude);
    return vector;
  };
  
  return (
    <div className="table-container">
      <table className="table-with-vectors">
        <thead>
          <tr>
            {data[0].map((header) => (
              <th key={header}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody className="body-table">
          {data.slice(1).map((row, index) => (
            <tr key={index}>
              {row.map((cell, index) => (
                <td key={index}>{cell}</td>
              ))}
              <td>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );  
}

export default Participanti;
