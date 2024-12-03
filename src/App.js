import { useState } from "react";
import './App.css';

function App() {


  const closeModal = () => {
    document.getElementById('W2W_MODAL').style.display = 'none'
  }

  return (
    <>
      <div id='W2W_MODAL' className="modal">
        <div className="modal-dialog">
          <div className="modal-header">
            <h2>Modal in CSS?</h2>
            <button id="btn-close" className="btn-close" aria-label="Close">×</button>
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
