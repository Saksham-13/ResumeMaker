import React, { useState } from 'react';
import "./Homepage.css";

function Edu({ number, edu, setedu, school, course, from, to, ach, id, cgpa }) {
    const updateData = (id, field, data) => {
        let updatededu = edu[id];
        updatededu = {
            ...updatededu,
            [field]: data,
        };
        setedu({ ...edu, [id]: updatededu });
    }

    // Validation function for CGPA
    const validateCGPA = (value) => {
        const cgpaRegex = /^([0-9]{1,2}(\.[0-9]{1,2})?|100)$/;
        return cgpaRegex.test(value);
    }

    return (
        <>
            <div className="form experience">
  <h2>Education #{number}</h2>
  <div className="input-box">
    <span className="details">School</span>
    <input
      type="text"
      placeholder="School Name"
      value={school}
      onChange={(e) => updateData(id, 'school', e.target.value)}
    />
  </div>
  <div className="input-box">
    <span className="details">Course</span>
    <input
      type="text"
      placeholder="Course Name"
      value={course}
      onChange={(e) => updateData(id, 'course', e.target.value)}
    />
  </div>
  <div className="input-box">
    <span className="details">From</span>
    <input
      type="text"
      placeholder="From"
      style={{ width: '50%', marginLeft: '1.3rem' }}
      value={from}
      onChange={(e) => updateData(id, 'from', e.target.value)}
    />
    <span className="details" style={{ marginLeft: '1rem', width: '20%' }}>
      To
    </span>
    <input
      type="text"
      placeholder="To"
      style={{ width: '50%', marginLeft: '0' }}
      value={to}
      onChange={(e) => updateData(id, 'to', e.target.value)}
    />
  </div>
  <div className="input-box">
    <span className="details">CGPA</span>
    <input
      type="text"
      placeholder="CGPA"
      value={cgpa}
      onChange={(e) => updateData(id, 'cgpa', e.target.value)}
      onBlur={(e) => {
        if (!validateCGPA(e.target.value)) {
          // Handle invalid CGPA input, e.g., show an error message
          alert('Invalid CGPA. Please enter a valid CGPA.');
        }
      }}
    />
  </div>
  <div className="input-box">
    <span className="details">Achievements</span>
    <input
      type="text"
      placeholder="Achievements"
      value={ach}
      onChange={(e) => updateData(id, 'ach', e.target.value)}
    />
  </div>
</div>

        </>
    );
}

export default Edu;