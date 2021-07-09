import React, { useState } from 'react';
import './UserDetails.css';
import InputBox from './InputBox';

const PASSWORD_STRENGTHS = { WEAK: 'weak', MEDIUM: 'medium', STRONG: 'strong' };

const validateEmail = (email) => {
    console.log(email)
    if (!email || (email && email.length <= 2)) return false;
    //If whether email has @ character.
    if (email.indexOf("@") === -1) return false;

    let parts = email.split("@");
    let dot = parts[1].indexOf(".");
    let dotSplits = parts[1].split(".");
    let dotCount = dotSplits.length - 1;

    //Check whether Dot is present, and that too minimum 1 character after @.
    if (dot === -1 || dot < 2 || dotCount > 2) {
        return false;
    }

    //Check whether Dot is not the last character and dots are not repeated.
    for (let i = 0; i < dotSplits.length; i++) {
        if (dotSplits[i].length === 0) {
            return false;
        }
    }
    return true;
};

const checkPasswordMatch = (firstPassword, secondPassword) => {
    if (!firstPassword || !secondPassword) return false;
    if (firstPassword !== secondPassword) return false;
    return true;
};

const validatePasswordStrengths = (password) => {
    return PASSWORD_STRENGTHS.STRONG;
}

const UserDetails = () => {
    const [value, setValue] = useState("");

    const handleEmailEvents = (newValue) => {
        setValue(newValue);
    };
    
    return(
    <div className='parentDiv'>
        <InputBox textboxClass='email' id='email' labelClass='label' value={value} onChange={handleEmailEvents}/>
    </div>
    )
};

export {
    validateEmail,
    checkPasswordMatch,
    validatePasswordStrengths,
    UserDetails
}