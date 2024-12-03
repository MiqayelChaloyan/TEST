import { useState } from "react";
import './App.css';

function App() {
  return (
    <>
      <div id='W2W_MODAL' className="modal">
        <div className="modal-dialog">
          <div className="modal-header">
            <h2>Modal in CSS?</h2>
            <button id='W2W_CLOSE' className="btn-close" aria-label="Close">×</button>
          </div>
          <div className="modal-body">
            <p>One modal example here! :D</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
