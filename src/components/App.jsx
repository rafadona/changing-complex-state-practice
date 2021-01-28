import React from "react";

function App() {
  const [fName, setfName] = React.useState("");
  const [lName, setlName] = React.useState("");

  function handleChange(event) {
    setfName(event.target.value);
  }

  function handleChangelName(event) {
    setlName(event.target.value);
  }

  return (
    <div className="container">
      <h1>
        Hello {fName} {lName}
      </h1>
      <form>
        <input
          onChange={handleChange}
          name="fName"
          placeholder="First Name"
          value={fName}
        />
        <input
          onChange={handleChangelName}
          name="lName"
          placeholder="Last Name"
          value={lName}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
