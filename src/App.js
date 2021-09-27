import "./App.css";
import Box from "./components/Box";
import Navbar from "./components/Navbar";
import Alert from "./components/Alert";
import React, { useState } from "react";
function App() {
  const [myStyle, setMystyle] = useState({
    backgroundColor: "white",
    color: "black",
  });

  // Navbar darkmode Blue
  const [mode, setMode] = useState("light");
  const toggleModeBlue = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#082032";
      setMystyle({ color: "white" });
      showAlert("Dark mode activated", "Success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      setMystyle({ backgroundColor: "white", color: "black" });
      showAlert("Light mode activated", "Success");
    }
  };
  // Navbar Darkmode Green
  const toggleModeGreen = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#003638";
      setMystyle({ color: "white" });
      showAlert("Dark Green mode activated", "Success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      setMystyle({ backgroundColor: "white", color: "black" });
      showAlert("Light mode activated", "Success");
    }
  };

  // Alert section
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  return (
    <div style={myStyle}>
      <Navbar
        title="Text-Utils"
        mode={mode}
        toggleModeBlue={toggleModeBlue}
        toggleModeGreen={toggleModeGreen}
        showAlert={showAlert}
      />
      <Alert alert={alert} showAlert={showAlert} />
      <Box mode={mode} showAlert={showAlert} />
    </div>
  );
}

export default App;
