// Import necessary dependencies
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

// Define the App component
function App() {
  // State variables for quotes and current index
  const [quotes, setQuotes] = useState([]);
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  // Fetch quotes from the API on component mount
  useEffect(() => {
    const fetchQuotes = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/quotes');
        setQuotes(response.data);
        setLoading(false); // Set loading to false when quotes are fetched
      } catch (error) {
        console.error("Error fetching quotes!", error);
      }
    };

    fetchQuotes();
  }, []);

  // Rotate quotes at a 5-second interval
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
    }, 5000);

    // Cleanup effect by clearing interval when component unmounts
    return () => clearInterval(interval);
  }, [quotes]);

  // JSX structure for the component
  return (
    <div className="App">
      <header className="App-header">
        <h1>Quotes App</h1>
        {loading ? (
          <div className="Loader"></div>
        ) : (
          <div className="Quote-display">
            <p className="Rotating-quote">{quotes[currentQuoteIndex]}</p>
          </div>
        )}
      </header>
      <div className="Quotes-list">
        <h2>All Quotes</h2>
        <ul>
          {quotes.map((quote, index) => (
            <li key={index}>{quote}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// Export the App component
export default App;
