import Button from "../../Atoms/Button";
import { useState } from "react";

export default function Accordion({children}){
  const [open, setOpen] = useState(false);
  return (
    <>
      <div>
        <div>
          <p>List</p>
          <Button padding={"10px 20px"} borderRadius={"10px"} background={"aqua"} onClick={() => {setOpen(!open)}}>{open ? "-" : "+"}</Button>
        </div>
        <div>
          { open &&
            <ul>
              <li>{children}</li>
            </ul>
          }
        </div>
      </div>
    </>
  )
}
