import styles from "./App.module.css";
// import img1 from "./pexels-mali-maeder-101667.jpg"; // images have to be imported in react
// import img2 from "./pexels-simon-berger-1323550.jpg";
import { useState } from "react";
// import TestComponent from "./TestComponent";
// import Comp1 from "./Comp1";

function App() {
  const [name, setName] = useState("Javascript");
  return (
    <div className={styles.div}>
      {setName(name)}
    </div>
  );

}

export default App;
