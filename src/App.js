import "./App.css";
import { useState } from "react";

function App() {
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("false");
  const regex = /^\(?([5]{1})\)?([0-9]{9})$/;

  const telValid = (tel) => {
    tel.match(regex) ? setMessage("true") : setMessage("false");
  };

  return (
    <div className="container">
      <h4>Telefon doğrulama</h4>
      <input className="number " onChange={() => telValid()} />

      <p className="text">{message}</p>
    </div>
  );
}

export default App;
