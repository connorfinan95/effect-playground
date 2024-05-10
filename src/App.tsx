import React, { useState } from "react";
import "./App.css";
import { getDogImage, getNextPublicHolidays } from "./helpers";
import { DogImage, PublicHoliday } from "./models";

function App() {
  const [image, setImage] = useState<DogImage>();
  const [countryHoliday, setCountryHoliday] = useState<PublicHoliday>();
  const [error, setError] = useState<string>();

  const countryCode = "CO";

  const resetState = () => {
    setImage(undefined);
    setCountryHoliday(undefined);
    setError(undefined);
  };

  const handleFetchDogImageClick = () => {
    resetState();

    getDogImage().then(
      r => setImage(r),
      err => setError(JSON.parse(err.message)._tag)
    );
  };

  const handleFetchNextPublicHolidayClick = () => {
    resetState();

    getNextPublicHolidays(countryCode).then(
      r => setCountryHoliday(r),
      err => setError(JSON.parse(err.message)._tag)
    );
  };

  return (
    <div className="App">
      <header className="App-header">
        {error ? <p>{error}</p> : null}
        {image && image.status === "success" ? (
          <div>
            <img src={image.message} alt="dog" />
          </div>
        ) : null}
        {countryHoliday ? (
          <div className="text-container">
            <h2>({countryCode}) Next public holiday</h2>
            <p>
              <span>Holiday Name:</span> {countryHoliday.name} (
              {countryHoliday.localName})
            </p>
            <p>
              <span>Date:</span> {countryHoliday.date}
            </p>
            <p>
              <span>Location:</span> {countryHoliday.countryCode}
            </p>
          </div>
        ) : null}
        <button onClick={handleFetchDogImageClick}>Fetch Dog Image</button>
        <button onClick={handleFetchNextPublicHolidayClick}>
          Fetch Next Public Holiday
        </button>
      </header>
    </div>
  );
}

export default App;
