import "./Button.css";
import Button from "react-bootstrap/Button";

export default function Button2() {
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
    </>
  );
}

// export default Button;
