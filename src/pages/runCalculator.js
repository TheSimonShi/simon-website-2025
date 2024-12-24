import React, { useState, useEffect} from "react";
import "./runCalculator.css";

const RunCalculator = () => {

  useEffect(() => {
    document.title = "Run Calculator - Simon Shi";
  }, []);

  const [pace, setPace] = useState(""); // User-entered pace
  const [isMinPerMile, setIsMinPerMile] = useState(true); // Toggle for min/mile or min/km
  const [results, setResults] = useState(null);
  const [error, setError] = useState(""); // Error message

  // Format time with hours if above 60 minutes
  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = Math.floor(seconds % 60);

    if (hours > 0) {
      return `${hours}:${minutes < 10 ? "0" : ""}${minutes}:${secs < 10 ? "0" : ""}${secs}`;
    } else {
      return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
    }
  };

  // Rounding function for 1 decimal place
  const roundTo1Decimal = (num) => Math.round(num * 10) / 10;

  // Validation function to check input format
  const validateInput = (value) => {
    if (/^\d+$/.test(value)) {
      // Single digit (assume mm:00)
      return `${value}:00`;
    } else if (/^\d{1,2}:\d{2}$/.test(value)) {
      // Proper mm:ss format
      return value;
    } else {
      return null; // Invalid input
    }
  };

  // Calculate times for races
  const calculateTimes = () => {
    const validPace = validateInput(pace);

    if (!validPace) {
      setError("Enter a valid pace in mm:ss format (e.g., 8:30).");
      setResults(null); // Clear results on error
      return;
    }

    // Clear error if input is valid
    setError("");

    // Parse valid pace (e.g., mm:ss)
    const [minutes, seconds] = validPace.split(":").map(Number);
    const totalSeconds = minutes * 60 + seconds;

    // Convert pace to min/mile if input is in min/km
    const convertedPace = isMinPerMile ? totalSeconds : totalSeconds * 1.609;

    const distances = {
      "1 Mile": convertedPace,
      "5K": convertedPace * 3.1,
      "10K": convertedPace * 6.2,
      "Half Marathon": convertedPace * 13.1,
      "Marathon": convertedPace * 26.2,
    };

    const formattedResults = Object.keys(distances).map((distance) => ({
      distance,
      time: formatTime(distances[distance]),
    }));

    setResults(formattedResults);
  };

  return (
    <div className="calculator-container">
      <h1>Run Pace Calculator</h1>

      {/* Input Section */}
      <div className="input-section">
        <label htmlFor="pace">
          Enter your pace ({isMinPerMile ? "min/mile" : "min/km"} - mm:ss):
        </label>
        <input
          type="text"
          id="pace"
          placeholder="e.g., 8:30"
          value={pace}
          onChange={(e) => setPace(e.target.value)}
        />

        {/* Toggle switch for min/mile vs min/km */}
        <div className="toggle-switch">
          <label className="switch">
            <input
              type="checkbox"
              checked={!isMinPerMile}
              onChange={() => setIsMinPerMile(!isMinPerMile)}
            />
            <span className="slider"></span>
          </label>
          <span className="switch-label">
            {isMinPerMile ? "min/mile" : "min/km"}
          </span>
        </div>

        <button onClick={calculateTimes}>Calculate</button>
        {error && <p className="error-text">{error}</p>}
      </div>

      {/* Results Section */}
      {results && (
        <div className="results-section">
          <h2>Your Race Times</h2>
          <div className="race-results">
            {results.map((result) => (
              <div key={result.distance}>
                <strong>{result.distance}:</strong> {result.time}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Pace Conversion Table */}
      <div className="chart-section">
        <h2>Race Pace Conversion Chart</h2>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Min/Mile</th>
                <th>MPH</th>
                <th>Min/KM</th>
                <th>KPH</th>
                <th>5K</th>
                <th>10K</th>
                <th>Half Marathon</th>
                <th>Marathon</th>
              </tr>
            </thead>
            <tbody>
              {[...Array(116)].map((_, i) => {
                const paceMin = Math.floor((4 * 60 + 30 + i * 5) / 60); // Starting at 4:30
                const paceSec = (4 * 60 + 30 + i * 5) % 60;
                const totalSeconds = paceMin * 60 + paceSec;

                const mph = roundTo1Decimal((60 / totalSeconds) * 60);
                const minPerKm = totalSeconds / 1.609;
                const kmh = roundTo1Decimal(60 / (minPerKm / 60));

                const times = {
                  "5K": formatTime(totalSeconds * 3.1),
                  "10K": formatTime(totalSeconds * 6.2),
                  "Half Marathon": formatTime(totalSeconds * 13.1),
                  "Marathon": formatTime(totalSeconds * 26.2),
                };

                return (
                  <tr key={i}>
                    <td>{`${paceMin}:${paceSec < 10 ? "0" : ""}${paceSec}`}</td>
                    <td>{mph}</td>
                    <td>
                      {`${Math.floor(minPerKm / 60)}:${
                        Math.floor(minPerKm % 60) < 10 ? "0" : ""
                      }${Math.floor(minPerKm % 60)}`}
                    </td>
                    <td>{kmh}</td>
                    <td>{times["5K"]}</td>
                    <td>{times["10K"]}</td>
                    <td>{times["Half Marathon"]}</td>
                    <td>{times["Marathon"]}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default RunCalculator;
