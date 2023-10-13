import React, { useState, useEffect } from 'react';
import "./Homepage.css";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from '@material-ui/icons/Delete';
import Skillitem from "./Skillitem";

function Skills({ input, skills, listofitems, deleteitems, setinput, setskills }) {
    const availableSkills = ["Machine Intelligence", "Software Engineering", "HCI", "Database MAnagement", "Graphy Theory"];

    const handleSkillSelection = (selectedSkill) => {
        setinput(selectedSkill);
        listofitems();
    };

    const filteredSkills = availableSkills.filter(skill =>
        skill.toLowerCase().includes(input.toLowerCase())
    );

    return (
        <div className="form">
            <h1 className="heading">Skills</h1>
            <div className="form">
                <div className="input-box">
                    <span className="details">Skills</span>
                    <input 
                        type="text" 
                        placeholder="Type Your Skills Here" 
                        value={input} 
                        onChange={e => setinput(e.target.value)} 
                        list="skills" 
                    />
                    <datalist id="skills">
                        {filteredSkills.map((skill, index) => (
                            <option 
                                value={skill} 
                                key={index} 
                                onClick={() => handleSkillSelection(skill)}
                            />
                        ))}
                    </datalist>
                    <IconButton 
                        onClick={listofitems}
                        disabled={input === "" ? true : false}
                    >+</IconButton>
                </div>
                <div className="skills-section">
                    {skills.map((item, index) => {
                        if (item.length > 0) {
                            return (
                                <Skillitem item={item} id={index} key={index} onSelect={deleteitems} />
                            );
                        }
                    })}
                </div>
            </div>
        </div>
    );
}

export default Skills;
