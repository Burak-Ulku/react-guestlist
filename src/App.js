import React, { useState } from 'react';

function App() {
  const [guests, setGuests] = useState([]);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addGuest();
    }
  };

  const addGuest = () => {
    if (firstName && lastName) {
      const newGuest = {
        firstName,
        lastName,
        attending: false, // Not attending by default
      };

      setGuests([...guests, newGuest]);
      setFirstName('');
      setLastName('');
    }
  };

  return (
    <div>
      <h1>Guest List</h1>
      <div>
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          value={firstName}
          onChange={handleFirstNameChange}
        />
      </div>
      <div>
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          value={lastName}
          onChange={handleLastNameChange}
          onKeyPress={handleKeyPress}
        />
      </div>
      <button onClick={addGuest}>Add Guest</button>
      <div>
        {guests.map((guest, index) => (
          <div key={index} data-test-id="guest">
            <p>First Name: {guest.firstName}</p>
            <p>Last Name: {guest.lastName}</p>
            <p>Attending: {guest.attending ? 'Yes' : 'No'}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
