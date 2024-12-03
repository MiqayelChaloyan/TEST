import { useState } from "react";
import './App.css';

function App() {


  const closeModal = () => {
    const iframeDiv = document.getElementById('my-modal');
    console.log(iframeDiv, '-> iframeDiv')
    if(iframeDiv) {
      iframeDiv.style.display = 'none'
    }
  }

  return (
    <>
      <div id='W2W_MODAL' className="modal">
        <div className="modal-dialog">
          <div className="modal-header">
            <h2>Modal in CSS?</h2>
            <button className="btn-close" onClick={closeModal} aria-label="Close">×</button>
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
