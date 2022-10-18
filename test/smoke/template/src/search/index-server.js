'use strict'
// import React, { useState } from "react"
// import './index.less'
// import logo from './images/logo.png';
// import largeNumber from 'large-number'
const React = require('react');
const largeNumber = require('large-number');
const logo = require('./images/logo.png');
require('./index.less');
console.log(React);



function Search() {
    // const loadcomponent = () => {
    //     import('./text.js').then((text) => {
    //         setText(text.default)
    //         console.log(typeof text.default)
    //     })
    // }
    const addResult = largeNumber("99999", "9999999999999999999");
    console.log(addResult)
    return (
        <div className="search-text">
            Search Text12
            {/* {Text ? <Text /> : null} */}
            <img src={logo} />
        </div>
    )
}

module.exports = <Search/>;