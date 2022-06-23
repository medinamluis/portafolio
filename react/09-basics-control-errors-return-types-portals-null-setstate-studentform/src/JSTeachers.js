import React from 'react';

// You can return an multiple sibling components as an array (e.g. list items) -- but give each a unique key prop:
const JSTeachers = () => [  // implicit return
    <li key="1">Treasure</li>,
    <li key="2">James</li>,
    <li key="3">Gil</li>
];

export default JSTeachers;