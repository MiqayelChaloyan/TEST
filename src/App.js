import './App.css';
import uriGlb from './assets/sneakers.glb';


function App() {
  return (
    <>
      <div id='W2W_MODAL' className="modal">
        <div className="modal-dialog">
          <div className="modal-header">
            <h2>Wearify</h2>
          </div>
          <div className="modal-body">
            <model-viewer
              src={uriGlb}
              seamless-poster
              environment-image='neutral'
              shadow-intensity='1'
              autoplay
              ar
              ar-modes='webxr scene-viewer quick-look'
              camera-controls
              touch-action='pan-y'
              auto-rotate
              i
              nteraction-prompt-threshold='1500'
              enable-pan
              min-field-of-view='1deg'
              width='1800px'
              disable-zoom
              loading='eager'
            >
            </model-viewer>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
