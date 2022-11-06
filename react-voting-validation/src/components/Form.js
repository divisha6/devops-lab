import React, { useState } from "react";

function Form() {
  const [state, setState] = useState();
  const [eli, setEli] = useState("");

  const handleChange = (e) => {
    setState(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    state >= 18 ? setEli("You are eligible") : setEli("Too young");
    // let isEligible = state >= 18 ? "You are eligible" : "too young" ;
    // alert(isEligible);
  };

  return (
    <div>
      <h1>Here is a form to check whether you are elligible for voting:</h1>
      <form className="age-validation-form" onSubmit={handleSubmit}>
        <label for="age">Enter your current age:</label>
        <input
          type="number"
          id="age"
          name="age"
          value={state}
          onChange={handleChange}
        />

        <div>
          <button
            className="validate-button"
            type="submit"
            style={{
              marginTop: "30px",
              marginBottom: "30px",
              color: "#370752",
              width: "100px",
              height: "40px",
            }}
          >
            Know your eligibility
          </button>
        </div>
      </form>
      <p>{eli}</p>
    </div>
  );
}

export default Form;
