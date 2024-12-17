// import './App.css';
// import uriGlb from './assets/sneakers.glb';


// function App() {
//   return (
//     <>
//       <div id='W2W_MODAL' className="modal">
//         <div className="modal-dialog">
//           <div className="modal-body">
//             <iframe
//               src="https://style.clo-set.com/embed/2b0aae6007514254a9cca9f34296180b/1/c/0?bgColor=%23f5f5f5&ui=0&colorway=0&logo=none"
//               width="100%"
//               height="420px"
//               frameBorder="0"
//               allowFullScreen
//               title="Clo-set Embed"
//             />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default App;
import React, { useEffect, useState } from 'react';

function TryOnModal() {
  const [itemId, setItemId] = useState(null);

  useEffect(() => {
    // Extract the 'item_id' query parameter from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('data-item-id');
    if (productId) {
      setItemId(productId);
    }
  }, []);

  return (
    <div className="modal-content">
      {itemId ? (
        <div>
          <h2>Product ID: {itemId}</h2>
          <p>Show the product details or try-on options based on the ID.</p>
          {/* You can now use the itemId to fetch or display product details */}
        </div>
      ) : (
        <p>Loading product...</p>
      )}
    </div>
  );
}

export default TryOnModal;
