import { useState } from "react";
const Comp1 = () => {
  const [value, setValue] = useState(10);
  console.log("re-render");
  return (
    <div>
      <p>${value}</p>
      <button
        onClick={() => {
          setValue(value + 20);
        }}
      ></button>
    </div>
  );
};
export default Comp1;
