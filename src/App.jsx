import { useState } from 'react';
import './App.css';

function App() {
  const [dob, setDob] = useState({ day: '', month: '', year: '' });
  const [age, setAge] = useState('');

  const calculateAge = () => {
    const { day, month, year } = dob;

    if (!day || !month || !year) {
      alert('Please fill all fields');
      return;
    }

    const birthDate = new Date(year, month - 1, day);
    const today = new Date();

    let calculatedAge = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();

    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      calculatedAge--;
    }

    setAge(calculatedAge);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDob({ ...dob, [name]: value });
  };

  return (
    <div className="app-container">
    <h1>Age Calculator </h1>
      <div className="input-container">
        <input
          type="number"
          name="day"
          placeholder="Day"
          value={dob.day}
          onChange={handleChange}
          min="1"
          max="31"
        />
        <input
          type="number"
          name="month"
          placeholder="Month"
          value={dob.month}
          onChange={handleChange}
          min="1"
          max="12"
        />
        <input
          type="number"
          name="year"
          placeholder="Year"
          value={dob.year}
          onChange={handleChange}
          min="1900"
          max={new Date().getFullYear()}
        />
      </div>
      <button onClick={calculateAge}>Calculate Age</button>
      {age && <h2>Your Age: {age} years</h2>}
    </div>
   
  );
}

export default App;
