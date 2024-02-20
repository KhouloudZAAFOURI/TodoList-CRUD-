import React, { useState } from 'react';


  export default function ApprendreArrayObject() {
    // AN ARRAY OF OBJECTS WITH NAME AND PRICE
    const [devices, setDevices] = useState([
      { name: "SAMSUNG", price: 500 },
      { name: "GALAXY", price: 600 },
      { name: "iPhone", price: 800 },
      { name: "Redmi", price: 300 },
    ]);
  
    // A Hook to manage the state of the new device added by the user
    const [newDeviceName, setNewDeviceName] = useState("");
    const [newDevicePrice, setNewDevicePrice] = useState(0);
  
    // ADD
    const addDevice = () => {
      if (newDeviceName.trim() !== '' && newDevicePrice > 0) {
        const newDeviceObject = {
           name: newDeviceName,
           price: newDevicePrice };
        setDevices([...devices, newDeviceObject]);
        // Clear the inputs after adding
        setNewDeviceName("");
        setNewDevicePrice(0);
      } else {
        alert("Enter a new device name and price");
      }
    };
  
    // DELETE
    const deleteDevice = (index) => {
      if (window.confirm("Are you sure you want to delete this device,"+ devices[index].name+ "?")) {
        const copy = [...devices];
        copy.splice(index, 1);
        setDevices(copy);
      }
    };
  
    // UPDATE
    const updateDevice = (index) => {
      const updatedName = prompt("Update the device name:", devices[index].name);
      const updatedPrice = prompt("Update the device price:", devices[index].price);
  
      if (updatedName !== null && updatedPrice !== null) {
        const copy = [...devices];
        copy[index] = { ...copy[index], name: updatedName, price: Number(updatedPrice) };
        setDevices(copy);
      }
    };
  
    const showDevices = devices.map((device, index) => (
      <li key={index}>
        {device.name} - ${device.price}
        <button
          style={{ backgroundColor: "red", color: "white", margin: "10px" }}
          onClick={() => deleteDevice(index)}
        >
          Delete
        </button>
  
        <button
          style={{ backgroundColor: "blue", color: "white", margin: "10px" }}
          onClick={() => updateDevice(index)}
        >
          Update
        </button>
      </li>
    ));
  
    return (
      <>
        <div>
  
          <div style={{ padding: "20PX", margin: "30px" }}>
            {showDevices}
  
            {/* How to read input typed by the user */}
            <input
              placeholder='Type a new device name'
              value={newDeviceName}
              onChange={(e) => setNewDeviceName(e.target.value)}
            ></input>
  
            <input
              type="number"
              placeholder='Type the device price'
              value={newDevicePrice}
              onChange={(e) => setNewDevicePrice(Number(e.target.value))}
            ></input>
  
            <button onClick={addDevice}> ADD </button>
          </div>
        </div>
      </>
    );
  }
  