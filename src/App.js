
import React, { useEffect, useState } from 'react';

const App = () => {
  const [iframeData, setIframeData] = useState(null);

  useEffect(() => {
    // Handle messages from the iframe
    const handleMessage = (event) => {
      // Check the origin to ensure it's from a trusted source
      if (event.origin !== 'https://bear-jaguar-ma8y.squarespace.com') { // Replace with iframe's origin
        return; // Ignore the message if it comes from an untrusted origin
      }

      // Handle the data from the iframe
      console.log('Received message from iframe:', event.data);
      setIframeData(event.data);
    };

    // Add the event listener for messages
    window.addEventListener('message', handleMessage);

    // Cleanup the event listener when the component is unmounted
    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, []);

  return (
    <div>
      <h1>Parent Page</h1>
      <p>Data from iframe: {iframeData ? JSON.stringify(iframeData) : "No data received yet"}</p>
      
      {/* Embed iframe in the parent */}
      <iframe
           src={`https://style.clo-set.com/embed/2b0aae6007514254a9cca9f34296180b/1/c/0?bgColor=%23f5f5f5&ui=0&colorway=0&logo=none`}
           width="100%"
           height="420px"
           frameBorder="0"
           allowFullScreen
           title="Clo-set Embed"
      />
    </div>
  );
};

export default App;
