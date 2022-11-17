import { useState } from 'react';

export default function Searchbar({ onSubmit }) {
  const [searchbarValue, setSearchbarValue] = useState('');

  const handleChange = event => {
    setSearchbarValue(event.currentTarget.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (searchbarValue.trim() === '') {
      alert('Please enter image for search.');
      return;
    } else {
      onSubmit(searchbarValue);
    }
  };
  return (
    <header className="Searchbar">
      <form className="form" onSubmit={handleSubmit}>
        <button type="submit" className="button">
          <span className="button-label">Search</span>
        </button>
        <input
          value={searchbarValue}
          onChange={handleChange}
          className="input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
}
