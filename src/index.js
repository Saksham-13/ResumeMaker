import React from 'react';

import ReactDOM from 'react-dom';
import {BrowserRouter as Router}  from "react-router-dom";
import './index.css';
import App from './App';
ReactDOM.render(
  <React.StrictMode>

    <Router>
    <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')

  
);
// Check for an existing token in local storage or generate a new one
let authToken = localStorage.getItem('authToken');
if (!authToken) {
    authToken = generateAuthToken();
    localStorage.setItem('authToken', authToken);
}

// Function to generate a random token (you should have a more secure implementation)
function generateAuthToken() {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}

// Save PDF Button Click Event
document.getElementById('savePdfBtn').addEventListener('click', () => {
    // Prompt user for PDF name
    const pdfName = prompt('Please enter a name for the PDF:');
    if (!pdfName) return; // Cancelled

    // Here, you would generate the PDF and then upload it to S3 using the authToken, pdfName, and a unique key.

    // Display a confirmation to the user
    alert('PDF saved successfully!');
});

// Retrieve PDFs Button Click Event
document.getElementById('retrievePdfBtn').addEventListener('click', () => {
    // Here, you would fetch a list of PDFs associated with the user's authToken from the server and populate the PDF list.

    // In this example, I'm just adding some dummy PDFs to the list:
    const pdfList = document.getElementById('pdfList');
    pdfList.innerHTML = ''; // Clear previous list

    // Dummy data (replace with actual data)
    const dummyPDFs = [
        { name: 'Resume 1', url: 's3-url-1' },
        { name: 'Resume 2', url: 's3-url-2' },
    ];

    dummyPDFs.forEach(pdf => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = pdf.url;
        a.textContent = pdf.name;
        li.appendChild(a);
        pdfList.appendChild(li);
    });
});
