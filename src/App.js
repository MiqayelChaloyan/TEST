import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [productId, setProductId] = useState(null);

  useEffect(() => {
    // Retrieve the product ID from localStorage
    const storedProductId = localStorage.getItem('product-id');
    
    // If a product ID is found in localStorage, set it to the state
    if (storedProductId) {
      setProductId(storedProductId);
    }
  }, []);

  return (
    <>
      <div id='W2W_MODAL' className="modal">
        <div className="modal-dialog">
          <h3>{productId}</h3>
          <div className="modal-body">
            <iframe
              src={`https://style.clo-set.com/embed/2b0aae6007514254a9cca9f34296180b/1/c/0?bgColor=%23f5f5f5&ui=0&colorway=0&logo=none${productId ? `&product_id=${productId}` : ''}`}
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
