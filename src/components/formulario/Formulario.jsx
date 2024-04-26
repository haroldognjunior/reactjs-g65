export default function Formulario() {
  function handleSubmit(e) {
    e.preventDefault();
    alert("Has clickeado en submit");
  }
  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
        <button type="submit">Enviar</button>
      </form>
    </>
  );
}
