import { useState } from 'react';
import countryData from '../resources/countryData.json';
import './App.css'

function CustomSearch() {
  const [searchText, setSearchText] = useState("");
  const [filteredData, setFilteredData] = useState(countryData);
  const [showSuggestions, setShowSuggestions] = useState(true);

  function handleChange(event) {
    setSearchText(event.target.value);
    const filtered = countryData.filter(item =>
      item.name.toLowerCase().startsWith(event.target.value.toLowerCase())
    );
    setFilteredData(filtered);
    setShowSuggestions(true);
  }

  function handleEscape(event) {
    if (event.keyCode === 27) {
      setShowSuggestions(false);
      console.log('Escape');
    }
  }

  return (
    <div className='custom-search-container'>
      <h1>Explore Countries❤️</h1>
      <div className="search-wrapper">
        <input type='text' onChange={handleChange} onKeyDown={handleEscape} list='suggestions' />
        <datalist id='suggestions'>
          {(showSuggestions || searchText) && filteredData.map((item, index) => (
            <option key={index} value={item.name}></option>
          ))}
        </datalist>
      </div>
      <button>Find</button>
    </div>
  );
}

export default CustomSearch;