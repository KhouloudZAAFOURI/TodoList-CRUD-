import React from 'react';
import { useState } from 'react';

export default function ApprendreArray() {

  // AN ARRAY
  const [devices, setDevices] = useState(["SAMSUNG", "GALAXY", "iPhone", "Redmi"]);

  // A Hook to manage the state of the new device added by the user
  const [newdevice, setnewdevice] = useState("");

  // ADD
  const ADD = () => {
    if (newdevice.trim() !== '') {
      setDevices([...devices, newdevice]);
      // Clear the input after adding
      setnewdevice("");
    } else {
      alert("Enter a new device");
    }
  };

  

  // Delete
  const DELETE = (index) => {
    if (window.confirm("Are you sure you want to delete," + devices[index] + "?")) {
    const copy = [...devices];
    copy.splice(index, 1);
    setDevices(copy);
  }};
  

  // Update
  const UPDATE = (index) => {
  const updatedValue = prompt(`Update the device:`, devices[index]);  
  if (updatedValue) {
    const copy = [...devices];
    copy[index] = updatedValue;
    setDevices(copy);
  }
};

  const showdevices = devices.map((device, index) => {
    return (
      <li key={index}>
        {device}
        <button
          style={{ backgroundColor: "red", color: "white", margin: "10px" }}
          onClick={() => DELETE(index)}
        >
          Delete
        </button>

        <button
          style={{ backgroundColor: "blue", color: "white", margin: "10px" }}
          onClick={() => UPDATE(index)}
        >
          Update
        </button>
      </li>
    );
  });

  return (
    <>
      <div>
        <div style={{ fontSize: "40px", display: "flex", alignItems: "center", justifyContent: "center", color: "Red", fontWeight: 'bold' }}>Apprendre </div>

        <div style={{ padding: "20PX", margin: "30px" }}>
          {showdevices}

          {/* How to read an input typed by the user */}
          <input
            placeholder='type a new device'
            value={newdevice}
            onChange={(e) => {
              setnewdevice(e.target.value);
            }}
          ></input>

          <button onClick={ADD}> ADD </button>
        </div>
      </div>
    </>
  );
}


