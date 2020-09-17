import React from "react";

export default function Form(props) {
  const { formValues, inputChange, onSubmit, disabled } = props;

  function onInputChange(evt) {
    const { name, value, type, checked } = evt.target;
    const valueToUse = type === "checkbox" ? checked : value;
    inputChange(name, valueToUse);
  }

  return (
    <div>
      <h1>header</h1>
      <form onSubmit={onSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name" // <--  This is the name of the input box itself. This string corresponds to the key in the formValues object in state that we are planning to change
            value={formValues.name}
            onChange={onInputChange}
          />
          <br />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formValues.email}
            onChange={onInputChange}
          />
          <br />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formValues.password}
            onChange={onInputChange}
          />
          <br />
        </label>
        <label>
          Accept Terms
          <input
            type="checkbox"
            name="checkbox"
            value={formValues.checkbox}
            onChange={onInputChange}
          />
          <br />
        </label>

        <button type="submit" disabled={disabled} class="submitButton">Submit</button>
      </form>
    </div>
  );
}
