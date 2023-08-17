import Button from "../Button";

export default function Form() {
  function handleForm(e) {
    e.preventDefault();

    console.log("Test");
  }
  return (
    <>
      <div>
        <form onClick={handleForm}>
          <input type="text" />
          <Button />
        </form>
      </div>
    </>
  );
}
