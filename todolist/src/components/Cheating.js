// import React, { useEffect, useState } from "react";

// function Cheating() {
//   const [message, setMessage] = useState("No cheating detected");

//   const cheating = () => {
//     const isFullscreen = document.fullscreenElement != null;
//     if (isFullscreen) {
//       setMessage("No cheating detected");
//     } else {
//       setMessage("Cheating detected");
//     }
//   };

//   useEffect(() => {
//     document.addEventListener("fullscreenchange", cheating);
//     window.addEventListener("blur", () => setMessage("Cheating detected"));
//     window.addEventListener("focus", cheating);

//     return () => {
//       document.removeEventListener("fullscreenchange", cheating);
//       window.removeEventListener("blur", () => setMessage("Cheating detected"));
//       window.removeEventListener("focus", cheating);
//     };
//   }, []);

//   return (
//     <main>
//       <h1>{message}</h1>
//       <button
//         onClick={() => {
//           const elem = document.documentElement;
//           if (elem.requestFullscreen) {
//             elem.requestFullscreen();
//           }
//         }}
//       >
//         Enter Fullscreen
//       </button>
//     </main>
//   );
// }

// export default Cheating;

import React, { useEffect, useState } from "react";

function Cheating() {
  const [status, setStatus] = useState(false);
  const [online, setOnline] = useState(navigator.online);

  const handleOnline = () =>{
    setOnline(true);
  }
  const handleOffline = () =>{
    setOnline(false);
    setStatus(true);
  }
  const handleResize = () => {
    setStatus(true);
  };

  const handleNormal = () => {
    setStatus(false);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    window.addEventListener("online",handleOnline);
    window.addEventListener("offline",handleOffline);

    return () => {
      window.removeEventListener("resize", handleNormal);
      window.removeEventListener("online",handleNormal);
      window.removeEventListener("offline",handleNormal);
    };
  }, []);

  return (
    <main>
      <h1>{!status ? "No Cheating Detected" : "Cheating Detected"}</h1>
      <h1>{!online ? "you are offline": "back to online"}</h1>
    </main>
  );
}

export default Cheating;
