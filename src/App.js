import { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    // Function to handle messages from the iframe
    const handleIframeMessage = (event) => {
      // Ensure the message is from the correct source
      if (event.origin === 'https://bear-jaguar-ma8y.squarespace.com') {
        const data = event.data;
        if (data && data.productId) {
          console.log('Product ID from iframe:', data.productId);
          // Now you can use the productId for your purposes
        }
      }
    };

    // Add event listener to listen for messages
    window.addEventListener('message', handleIframeMessage);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('message', handleIframeMessage);
    };
  }, []);

  return (
    <>
      <div id='W2W_MODAL' className="modal">
        <div className="modal-dialog">
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
