export default function Formulario({ setAlert }) {
  function handleSubmit(e) {
    e.preventDefault();
    console.log("Has clickeado en submit y seteado un valor a alert");
    setAlert("valor cambiado desde formulario");
  }
  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
        <button type="submit">Enviar</button>
      </form>
    </>
  );
}
