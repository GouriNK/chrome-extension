import './popup.css';
import React from 'react';
import { createRoot } from 'react-dom/client';
import PopUpBody from './PopUpBody';

const test = (
    <div>
        <h1>Hello There!</h1>
        <PopUpBody/>
    </div>
);


const container = document.createElement('div');
document.body.appendChild(container);
const root = createRoot(container);
root.render(test);