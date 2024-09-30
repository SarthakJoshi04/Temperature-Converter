{/* 
  KEY TAKEAWAYS
    - EVEN THOUGH THE INPUT TYPE IS NUMBER, WHEN ACCESSED USING JAVASCRIPT IT WILL BE TREATED AS A STRING.
    - MULTIPLICATION, DIVISION, AND SUBTRACTION IN JAVASCRIPT WILL IMPLICITLY CONVERT STRINGS TO NUMBERS.
    - ADDITION (+) REQUIRES EXPLICIT CONVERSION (E.G., USING PARSEFLOAT) WHEN WORKING WITH STRINGS TO AVOID CONCATENATION.
*/}

import { useState } from "react"

export default function Converter() {

  const [celsius, setCelsius] = useState("")
  const [fahrenheit, setFahrenheit] = useState("")
  const [kelvin, setKelvin] = useState("")

  const handleCelsiusChange = (event) => {
    const celsiusValue = event.target.value
    setCelsius(celsiusValue)
    setFahrenheit((celsiusValue !== "") ? (celsiusValue * 9/5 + 32).toFixed(2) : "")
    setKelvin((celsiusValue !== "") ? (parseFloat(celsiusValue) + 273.15).toFixed(2) : "")
  }

  const handleFahrenheitChange = (event) => {
    const fahrenheitValue = event.target.value
    setFahrenheit(fahrenheitValue);
    const celsiusValue = fahrenheitValue !== "" ? ((fahrenheitValue - 32) * 5/9).toFixed(2) : "";
    setCelsius(celsiusValue);
    setKelvin(celsiusValue !== "" ? (parseFloat(celsiusValue) + 273.15).toFixed(2) : "");
  }

  const handleKelvinChange = (event) => {
    const kelvinValue = event.target.value
    setKelvin(kelvinValue);
    const celsiusValue = kelvinValue !== "" ? (kelvinValue - 273.15).toFixed(2) : "";
    setCelsius(celsiusValue);
    setFahrenheit(celsiusValue !== "" ? (celsiusValue * 9/5 + 32).toFixed(2) : "");
  }

  return (
    <div className="main p-[25px] bg-slate-300 rounded-lg flex-col items-center">
        <h1 className="font-semibold text-center text-[30px] mb-3">Temperature Converter</h1>
        <div className="flex justify-between mb-2">
          <label htmlFor="celsius">Celsius(&deg;C):</label>
          <input type="number" name="celsius" id="celsius" value={celsius} placeholder="Enter Celsius" onChange={handleCelsiusChange} /></div>
        <div className="flex justify-between mb-2">
          <label htmlFor="fahrenheit">Fahrenheit(&deg;F):</label>
          <input type="number" name="fahrenheit" id="fahrenheit" value={fahrenheit} placeholder="Enter Fahrenheit" onChange={handleFahrenheitChange} />
        </div>
        <div className="flex justify-between mb-2">
          <label htmlFor="kelvin">Kelvin(K):</label>
          <input type="number" name="kelvin" id="kelvin" value={kelvin} placeholder="Enter Kelvin" onChange={handleKelvinChange} />
        </div>
    </div>
  )
}
