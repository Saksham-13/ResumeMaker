import React, { useState } from 'react';
import "./info.css"
import './Homepage.css';
import { Component } from 'react';

import axios from 'axios';
const apikeys = require('./apikey.json');

function Info({photourl,setphotourl,name,setname,subtitle,setsubtitle,userdesc,setuserdesc,email,setemail,contact,contact1,setcontact,setcontact1,address,setaddress,github,setgithub,linkedin,setlinkedin,portfolio,setportfolio}) {
    const [photourl2, setPhotoUrl] = useState(null);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setPhotoUrl(file);
    }

    const handleFormSubmit = () => {
        // Access the private key from the imported JSON data
        const privateKey = apikeys.private_key;

        // Create a FormData object to send the data
        const formData = new FormData();
        formData.append('photo', photourl2);

        // Make the POST request to upload the file
        axios.post('https://www.googleapis.com/upload/drive/v3/files?uploadType=media', formData, {
            headers: {
                'Content-Type': photourl.type,
                'Authorization': `Bearer ${privateKey}`,
            },
        })
        .then((response) => {
            console.log('File uploaded successfully. Metadata:', response.data);
            // Handle the response as needed
        })
        .catch((error) => {
            console.error('Error:', error.response);
            // Handle errors
        });
    
    }
    
    return (
        <div>
            <div className="form">
                        <h1 className="heading" >Information</h1>
                        <div className="form">
                            <div className="input-box">
                                <span className="details">Photo</span>
                                <input type="file" onChange={setphotourl} title=" " style={{color:'transparent'}}className="custom-file-input" />
                            </div>
                            <div className="input-box">
                                <span className="details">Name</span>
                                <input type="text" placeholder="Your Name" value={name} onChange={e=>setname(e.target.value)}/>
                            </div>
                            <div className="input-box">
                                <span className="details">Subtitle</span>
                                <input type="text" placeholder="Your Subtitle" value={subtitle} onChange={e=>setsubtitle
                                    (e.target.value)}/>
                            </div>
                            <div className="input-box textarea">
                                <span className="details">Description</span>
                                <textarea type="text" placeholder="Description" value={userdesc} onChange={e=>setuserdesc(e.target.value)}/>
                            </div>
                        </div>
                        <h1 className="heading" >Extra Information</h1>
                        <div className="form">
                            <div className="input-box">
                                <span className="details">Email</span>
                                <input type="text" placeholder="Email Address" value={email} onChange={e=>setemail(e.target.value)} />
                            </div>
                            <div className="input-box">
                                <span className="details">Contact 1</span>
                                <input type="text" placeholder="Number" value={contact} onChange={e=>setcontact(e.target.value)}/>
                            </div>
                            <div className="input-box">
                                <span className="details">Contact 2</span>
                                <input type="text" placeholder="Number" value={contact1} onChange={e=>setcontact1(e.target.value)}/>
                            </div>
                            <div className="input-box">
                                <span className="details">Address</span>
                                <input type="text" placeholder="Address" value={address} onChange={e=>setaddress(e.target.value)} />
                            </div>
                            <div className="input-box">
                                <span className="details">Github</span>
                                <input type="text" placeholder="Url here" value={github} onChange={e=>setgithub(e.target.value)}/>
                            </div>
                            <div className="input-box">
                                <span className="details">Linkedin</span>
                                <input type="text" placeholder="Url here" value={linkedin} onChange={e=>setlinkedin(e.target.value)}/>
                            </div>
                            <div className="input-box">
                                <span className="details">Portfolio</span>
                                <input type="text" placeholder="Url here" value={portfolio} onChange={e=>setportfolio(e.target.value)}/>
                            </div>
                            <input
                            type="file"
                            onChange={handleFileChange}
                            title=" "
                            style={{ color: 'transparent' }}
                            className="custom-file-input"
                        />
                        <button onClick={handleFormSubmit}>Submit</button>
                        </div>
                    </div>
                    
        </div>
    )
}

export default Info
