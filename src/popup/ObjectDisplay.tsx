import React, { useState } from 'react';

export default function ObjectDisplay({ recordingObj }) {

    const renderedElements = Object.entries(recordingObj).map(([key, value]) => {
        if (Array.isArray(value) && key === 'steps') {
            // If the value is an array and the key is "steps", render a list
            return (
                <div key={key}>
                    <h3>{key}</h3>
                    <ul>
                        {value.map((step, index) => (
                            <li key={index}>{step}</li>
                        ))}
                    </ul>
                </div>
            );
        } else {
            // Otherwise, render a key-value pair as h3 and p tags
            return (
                <div key={key}>
                    <h3>{key}</h3>
                    <p>{recordingObj[key]}</p>
                </div>
            );
        }
    });

    return (
        <div>
            {renderedElements}
        </div>
    )
}
