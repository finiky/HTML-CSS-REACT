import styles from "./App.module.css";
import img1 from "./pexels-mali-maeder-101667.jpg"; // images have to be imported in react
import img2 from "./pexels-simon-berger-1323550.jpg";
import { useState, useEffect, useRef } from "react";
import TestComponent from "./TestComponent";
import Comp1 from "./Comp1";
function App() {
  const [value, setValue] = useState(true);
  const x = useRef(null); // to aid in preserving the value upon re-renders.
  /*
  'useEffect' to attach 'click' eventlistener to all the images 
  and an unordered list containing those images. program shows setting the 
  third parameter to false to control bubbling or capturing. used 
  'Array.from(nodeList)' to convert returned nodeList to array 
  'array.map' to attach event listeners to all the elemets returned using 
  'getElementsByclassName' 
  */
  useEffect(() => {
    console.log(x.current);
    let images = document.getElementsByClassName(styles.img);
    images = Array.from(images); // convert nodeList to an array
    // array.map to attach eventlistener to all the images
    images.map(
      (image) =>
        image.addEventListener(
          "click",
          (e) => {
            // e.stopPropagation(); //to stop triggering other events
            console.log("I got clicked at: ", e.timeStamp);
            console.log("I am", e.target);
          },
          false
        ) // 3rd paramaeter is false to set bubble propogation
      // can be set to true to allow capture propogation
    );
    document.getElementById("images").addEventListener(
      "click",
      (e) => {
        console.log(
          "I am an unordered list containing all the images",
          e.target
        );
        console.log(e.timeStamp);
      },
      false
    );
  }, [x.current]);
  return (
    
    <div className={styles.main}>
      <Comp1/>
      {/*Everytime the parent component gets rendered all the child components get rendered*/}
      <TestComponent />
      <ul id="images" className={styles.list}>
        <li>
          <div className={styles.imgDiv}>
            <img className={styles.img} src={img1} alt="horse" />
          </div>
        </li>
        <li>
          <div className={styles.imgDiv}>
            <img className={styles.img} src={img2} alt="mountains" />
          </div>
        </li>
      </ul>
      <div className={styles.buttonDiv}>
        <button
          onClick={() => {
            x.current += 1;
          }}
        >
          UseEffect
        </button>
        <button
          onClick={() => {
            setValue(!value);
          }}
        >
          UseState
        </button>
      </div>
    </div>
  );
}

export default App;
