import { useState } from "react";

export default function Input() {
  const [palabra, setPalabra] = useState("Digita una palabra");

  return (
    <>
      <input
        placeholder={palabra}
        onChange={(pepito) => setPalabra(pepito.target.value)}
        type="text"
      ></input>
      <h1>{palabra}</h1>
    </>
  );
}
