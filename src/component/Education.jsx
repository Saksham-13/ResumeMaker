import React, { useState } from 'react';
import "./Homepage.css";

const validateCGPA = (cgpa) => {
  const cgpaRegex = /^(\d+(\.\d{1,2})?|\d{2}(\.\d{1,2})?)%?/;

  if (cgpaRegex.test(cgpa)) {
    const numericCGPA = parseFloat(cgpa.replace('%', ''));
    if (cgpa.includes('%') && numericCGPA >= 0 && numericCGPA <= 100) {
      return true;
    } else if (!cgpa.includes('%') && numericCGPA >= 0 && numericCGPA <= 10) {
      return true;
    }
  }
  return false;
};

function Edu({ number, edu, setedu, school, course, from, to, cgpa, ach, id }) {
  const [cgpaMessage, setCGPAMessage] = useState('');

  const updateData = (id, field, data) => {
    let updatededu = edu[id];
    updatededu = {
      ...updatededu,
      [field]: data,
    };
    setedu({ ...edu, [id]: updatededu });

    // Validation and real-time message
    if (field === 'cgpa') {
      if (validateCGPA(data)) {
        setCGPAMessage('Valid CGPA');
      } else {
        setCGPAMessage('Invalid CGPA format or out of range');
      }
    }
  }

  return (
    <>
      <div className="form experience">
        <h2>Education #{number}</h2>
        <div className="input-box">
          <span className="details">School</span>
          <input type="text" placeholder="School Name" value={school} onChange={(e) => updateData(id, 'school', e.target.value)} />
        </div>
        <div className="input-box">
          <span className="details">Course</span>
          <input type="text" placeholder="Course Name" value={course} onChange={(e) => updateData(id, 'course', e.target.value)} />
        </div>
        <div className="input-box">
          <span className="details">From</span>
          <input type="text" placeholder="Your Subtitle" style={{ width: '50%', marginLeft: '1.3rem' }} value={from} onChange={(e) => updateData(id, 'from', e.target.value)} />
          <span className="details" style={{ marginLeft: '1rem', width: '20%' }}>To</span>
          <input type="text" placeholder="Your Subtitle" style={{ width: '50%', marginLeft: '0' }} value={to} onChange={(e) => updateData(id, 'to', e.target.value)} />
        </div>
        <div className="input-box">
          <span className="details">CGPA</span>
          <input type="text" placeholder="cgpa" value={cgpa} onChange={(e) => updateData(id, 'cgpa', e.target.value)} />
          <div className="message">{cgpaMessage}</div>
        </div>
        <div className="input-box">
          <span className="details">Achievements</span>
          <input type="text" placeholder="Achievements" value={ach} onChange={(e) => updateData(id, 'ach', e.target.value)} />
        </div>
      </div>
    </>
  );
}

function Education({ edu, setedu }) {
  const [index, setIndex] = useState(2);

  const createNewEdu = (edu, index) => {
    setedu({
      ...edu,
      [`edu_${index}`]: {
        school: '',
        course: '',
        from: '',
        to: '',
        cgpa: '',
        ach: '',
      },
    });
    setIndex((index) => index + 1);
  };

  return (
    <div className="form education">
      <h1 className="heading">Education</h1>
      {Object.keys(edu).map((eduid, index) => {
        return (
          <Edu
            key={index + 1}
            number={index + 1}
            edu={edu}
            id={eduid}
            school={edu[eduid].school}
            setedu={setedu}
            course={edu[eduid].course}
            from={edu[eduid].from}
            to={edu[eduid].to}
            cgpa={edu[eduid].cgpa}
            ach={edu[eduid].ach}
          ></Edu>
        );
      })}
      <button className="add-edu-button" onClick={() => createNewEdu(edu, index)} style={{ marginTop: '20px' }}>Add more Education</button>
    </div>
  );
}

export default Education;
