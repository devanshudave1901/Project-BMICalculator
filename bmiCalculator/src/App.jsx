import { useState, useCallback, useEffect, useRef } from "react";

import "./App.css";

function App() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [resultElement, setResultElement] = useState(false);
  const [bmiResult, setBMIResult] = useState("");
  const [bmiCategory, setBMICategory] = useState("");

  let bmi;
  const setWeightChange = (e) => {
    setWeight(e.target.value);
  };
  const setHeightChange = (e) => {
    setHeight(e.target.value);
  };
  const handleButtonClick = () => {
    bmi = (weight / Math.pow(height / 100, 2)).toFixed(2);
    console.log(bmi);
    setBMIResult(bmi);
    setResultElement(true);
    let category1 = "Underweight";
    let category2 = "Healthy Weight";
    let category3 = "Overweight";
    let category4 = "Obese";

    if (bmi < 18.5) {
      setBMICategory(category1);
    } else if (bmi >= 18.5 || bmi <= 24.9) {
      setBMICategory(category2);
    } else if (bmi >= 25 || bmi <= 29.9) {
      setBMICategory(category3);
    } else if (bmi >= 30) {
      setBMICategory(category4);
    }
  };

  return (
    <>
      <div className="border-5 hover:shadow-indigo-500/40 bg-slate-800 rounded-lg shadow-xl shadow-cyan-500/80 m-60	">
        <h1 className="text-center	text-lime-500		truncate indent-3.5	text-wrap	mr-10 ml-10">
          BMI Calculator
        </h1>
        <div className="flex shadow rounded-lg overflow-hidden  m-10">
          <input
            type="text"
            className="outline-none w-full py-1 px-1 bg-slate-200 text-stone-950"
            placeholder="Weight"
            value={weight}
            onChange={setWeightChange}
            required
          />

          <label className="outline-none w-full py-1 px-1 bg-stone-400 ml-2	 text-gray-50	">
            kg
          </label>
        </div>

        <div className="flex shadow rounded-lg overflow-hidden  m-10">
          <input
            type="text"
            className="outline-none w-full py-1 px-1 bg-slate-200 text-stone-950"
            placeholder="Height"
            value={height}
            onChange={setHeightChange}
            required
          />
          <label className="outline-none w-full py-1 px-1 bg-stone-400 ml-2	 text-gray-50	">
            cm
          </label>
        </div>

        <div>
          <button
            type="submit"
            className="outline-none bg-blue-700 text-white px-3 py-0.5 my-5 shrink-0"
            onClick={handleButtonClick}
          >
            Submit
          </button>
        </div>
      </div>
      {resultElement && (
        <div className="border-5 bg-slate-800 rounded-lg  shadow-xl ring ring-green-500 shadow-green-500/80 m-5 bg-blend-exclusion	 ring-lime-950	hover:shadow-indigo-500/40">
          <h2 className="text-base antialiased line-clamp-4	text-centre	text-lime-500	truncate text-wrap indent-8	">
            Your Body Mass Index is:{" "}
            <span className=" text-rose-200	">{bmiResult}</span>
            <br />
            <br />
            This is considered:
            <span className="text-rose-200	"> {bmiCategory}</span>
          </h2>
        </div>
      )}
    </>
  );
}

export default App;
