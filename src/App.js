import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [productId, setProductId] = useState(null);

  useEffect(() => {
    // Log to check if localStorage is accessible
    if (typeof window !== "undefined") {
      console.log('localStorage accessible');
      const storedProductId = localStorage.getItem('product-id');
      console.log(storedProductId, 'storedProductId');
      
      if (storedProductId) {
        setProductId(storedProductId);
      }
    }
  }, []);

  useEffect(() => {
    if (productId !== null) {
      console.log('Updated productId:', productId);
    }
  }, [productId]);

  return (
    <>
      <div id='W2W_MODAL' className="modal">
        <div className="modal-dialog">
          <h3>{productId}</h3>
          <div className="modal-body">
            <iframe
              src={`https://style.clo-set.com/embed/2b0aae6007514254a9cca9f34296180b/1/c/0?bgColor=%23f5f5f5&ui=0&colorway=0&logo=none`}
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
