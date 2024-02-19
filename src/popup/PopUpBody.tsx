import './PopUpBody.css';
import React, { useState } from 'react';
import { RECORDING_OBJECT } from '../contentScript/utils';
import ObjectDisplay from './ObjectDisplay';
export default function PopUpBody() {

  const [recordingObject, setRecordingObject] = useState({});
  const [isStartEnabled, setIsStartEnabled] = useState(true);

  const handleStartRecording = (e) => {
    e.preventDefault();
    console.log('Clicked start!');
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const tab = tabs[0];
      if (tab && tab.id !== undefined) {
        chrome.tabs.sendMessage(tab.id, {
          action: 'startRecording',
        }).then((response) => {
          console.log(response);
          setRecordingObject({});
          setIsStartEnabled((prevIsStartEnabled) => !prevIsStartEnabled);
        });
      }
    });
  }

  const handleStopRecording = (e) => {
    e.preventDefault();
    console.log('Clicked stop!');
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const tab = tabs[0];
      if (tab && tab.id !== undefined) {
        chrome.tabs.sendMessage(tab.id, {
          action: 'stopRecording',
        }).then((response) => {
          console.log(response);
          chrome.storage.local.get(["status"]).then((result) => {
            console.log("Value is ");
            console.log(result.status)
            if (result.status) {
              setRecordingObject(prevObj => ({
                ...prevObj,
                url: result.status.url,
                userAgent: result.status.userAgent,
                screenSize: result.status.screenSize,
                steps: result.status.steps
                // You can add or modify other properties as needed
              }));
              setIsStartEnabled((prevIsStartEnabled) => !prevIsStartEnabled);
            }
          });
        });

      }
    });

  }

  return (
    <div className="container">
      <div className="item">
        <div className="button-container">
           <button className="button start" onClick={handleStartRecording}>Start</button> {/*disabled={!isStartEnabled} */}
           <button className="button stop" onClick={handleStopRecording} >Stop</button> {/*disabled={isStartEnabled} */}
        </div>
      </div>
      {/* {Object.keys(recordingObject).length > 0 && Object.keys(recordingObject).map((key, index) => (
        <div className="item" key={index}>
          <h3>{key}</h3>
          <p>{recordingObject[key]}</p>
        </div>
      ))} */}
      <ObjectDisplay recordingObj={recordingObject} />
    </div>

  )
}