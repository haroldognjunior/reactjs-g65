import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Title from "./components/h1/H1";
import Card from "./components/card/Card";
import Button2 from "./components/button/Button";
import Input from "./components/input/Input";
import Formulario from "./components/formulario/Formulario";

function App() {
  return (
    <>
      <Input />
      <Formulario />
      <Title text="Buenas noches" nombre="Renata" className="" />
      <Button2 />
      <Title text="Vida" nombre="Renato" className="blue" />

      <Title text="Mundo" nombre="Lucas" className="pink" />
      <Title text="Juguete" nombre="Jorge" className="green" />
      <Title text="Planeta" className="black" />
      <div className="d-flex">
        <Card />
        <Card />
        <Card />
      </div>
      <div className="d-flex">
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
}

export default App;
