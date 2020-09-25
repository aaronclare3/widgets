import React, { useState } from 'react'
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from './components/Route';
import Header from './components/Header';

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
            <Header />
            <Route path="/">
                <Accordion items={items} />
            </Route>
            <Route path="/translate">
                <Translate />
            </Route>
            <Route path="/dropdown">
                <Dropdown options={options} label="Select a color" selected={selected} onSelectedChange={setSelected} />
            </Route>
            <Route path="/list">
                <Search />
            </Route>

        </div>
    ) 
}