import Button from "../../Atoms/Button/index";

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
          <Button type="button" onClick={() => console.log("Test")}>Click</Button>
        </form>
      </div>
    </>
  );
}
