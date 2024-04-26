import Img from "../img/Img";
import "./H1.css";

function Title(props) {
  return (
    <>
      <h1 className="hola">{props.text}</h1>
      <Img url="https://img.freepik.com/free-photo/finger-pressing-circle_1112-663.jpg?t=st=1713496483~exp=1713500083~hmac=444117d49f69d5d04aaa732a2ea875330b5bcdece74f5f63fe1eb0b83ac78090&w=740" />
      <p className={props.className}>Mi nombre es {props.nombre}</p>
    </>
  );
}

export default Title;
