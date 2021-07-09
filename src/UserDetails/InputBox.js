import React from "react";

const InputBox = (props) => {

    const handleEmailEvents = (event) => props.onChange(event.target.value);

    return (
    <label className={props.labelClass}>
        email:
            <input 
                type="text" 
                className={props.textboxClass} 
                id={props.id} 
                value={props.value} 
                onChange={handleEmailEvents}
            />
    </label>
    )
};

export default InputBox;