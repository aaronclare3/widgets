import React, { useState, useEffect, useRef } from 'react';

const Dropdown = ({ options, selected, onSelectedChange, label }) => {
    const [open, setOpen] = useState(false);
    const ref = useRef();

    useEffect(() => {
        // IF THE CURRENT ELEMENT THAT IS CLICKED ON IS 
        // INSIDE THE ITEM ELEMENT OF DROPDOWN 
        // COMPONENT, THEN JUST RETURN (BECAUSE WE ALREADY
        // HAVE AN ONCLICK FOR THAT). BUT IF CLICK IS 
        // ANYWHERE ELSE, THEN CLOSE THE DROPDOWN

        const onBodyClick = (e) => {
            if (ref.current.contains(e.target)) {
                return;
            }
            setOpen(false);
        }

        document.body.addEventListener('click', onBodyClick);


        return () => {
            document.body.removeEventListener('click', onBodyClick);
        };

    },[]);
 

    const renderedOptions = options.map((option) => {
        if(option.value === selected.value) {
            return null;
        }

        return (
            <div 
                key={option.value} 
                onClick={() => onSelectedChange(option)} 
                className="item"
                >
                {option.label}
            </div>
        )
    });

    return (
        <div className="ui form">
            <div className="field">
                <label className="label">Select a {label}</label>
                <div ref={ref} onClick={() => setOpen(!open)} className={`ui selection dropdown ${open ? 'visible active' : ''}`}>
                    <i className="dropdown icon"></i>
                    <div className="text">{selected.label}</div>
                    <div className={`menu ${open? 'visible transition': ''}`}>
                        {renderedOptions}
                    </div>
                </div>
            </div>
        </div>    
    )
}


export default Dropdown;