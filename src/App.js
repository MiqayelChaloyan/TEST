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
            <iframe
              src="https://style.clo-set.com/embed/2b0aae6007514254a9cca9f34296180b/1/c/0?bgColor=%23f5f5f5&ui=0&colorway=0&logo=none"
              width="100%"
              height="420px"
              frameBorder="0"
              allowFullScreen
              title="Clo-set Embed"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
