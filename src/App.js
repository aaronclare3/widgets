import React, { useState } from 'react'
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';

const items = [
    {
        title: 'What is react?',
        content: 'react is a front end javascript framework'
    },
    {
        title: 'Why use React?',
        content: 'react is a favorite JS library among engineer'
    },
    {
        title: 'how do you use react?',
        content: 'you use react by creating components'
    }
];

const options = [
    {
        label: 'The Color Red',
        value: 'red'
    },
    {
        label: 'The Color Blue',
        value: 'blue'
    },
    {
        label: 'The Color Green',
        value: 'green'
    },
]

export default () => {
    const [selected, setSelected] = useState(options[0]);
    const [showDropdown, setShowDropdown] = useState(true);

    return (
        <div>
            {/* <Accordion items={items} /> */}
            {/* <Search /> */}
            {/* <Dropdown 
                selected={selected} 
                onSelectedChange={setSelected} 
                options={options} 
                label="Color"
            /> */}
            <Translate />
        </div>
    ) 
}