import React, { useState } from "react";

function Listner() {
  const [change, setChange] = useState(false);
  console.log("Listner Component Rendered...");
  window.addEventListener("resize", () => {
    console.log("Window resize");
  });

  return (
    <main>
        <center>
      <div>Listner</div>
      <button onClick={() => setChange((prev) => !prev)}>Add</button>
</center>
    </main>
  );
}

export default Listner;
