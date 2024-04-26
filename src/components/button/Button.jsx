import "./Button.css";
import Button from "react-bootstrap/Button";

export default function Button2({ alert }) {
  return (
    <>
      <Button
        onClick={() => alert("hola, has clickeado")}
        className="buttonCss"
        type="button"
      >
        Click Me!
      </Button>
      <Button variant="danger">Peligro</Button>
      <p>{alert}</p>
    </>
  );
}

// export default Button;
