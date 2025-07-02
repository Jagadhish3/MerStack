import React, { useEffect, useState } from "react";

function Cheating() {
  const [message, setMessage] = useState("No cheating detected");

  const cheating = () => {
    const isFullscreen = document.fullscreenElement != null;
    if (isFullscreen) {
      setMessage("No cheating detected");
    } else {
      setMessage("Cheating detected");
    }
  };

  useEffect(() => {
    document.addEventListener("fullscreenchange", cheating);
    window.addEventListener("blur", () => setMessage("Cheating detected"));
    window.addEventListener("focus", cheating);

    return () => {
      document.removeEventListener("fullscreenchange", cheating);
      window.removeEventListener("blur", () => setMessage("Cheating detected"));
      window.removeEventListener("focus", cheating);
    };
  }, []);

  return (
    <main>
      <h1>{message}</h1>
      <button
        onClick={() => {
          const elem = document.documentElement;
          if (elem.requestFullscreen) {
            elem.requestFullscreen();
          }
        }}
      >
        Enter Fullscreen
      </button>
    </main>
  );
}

export default Cheating;
