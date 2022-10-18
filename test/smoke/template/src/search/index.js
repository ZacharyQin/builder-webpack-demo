'use strict'

import React, { useState } from "react"
import { createRoot } from "react-dom/client"
import './index.less'
import logo from './images/logo.png';
import { common } from '../../common';
import { a } from './tree-shaking';
import largeNumber from 'large-number'

function Search() {
    // debugger;
    common()
    const texta = a()
    const [Text, setText] = useState(null);
    const loadcomponent = () => {  
        import('./text.js').then((text) => {
            setText(text.default)
            console.log(typeof text.default)
        })
    }
    const addResult = largeNumber("99999", "9999999999999999999");
    console.log(addResult)
    return (
        <div className="search-text">
            Search Text
            {Text ? <Text /> : null}
            <img src={logo} onClick={loadcomponent} />
        </div>
    )
}

// ReactDOM.render(<Search />, document.getElementById('root'));
const container = document.getElementById('root');

const root = createRoot(container);

root.render(<Search />);