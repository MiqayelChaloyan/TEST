<script>
  document.addEventListener('DOMContentLoaded', function () {
    // Get the article element with the class ProductItem
    const articleElement = document.querySelector('article.ProductItem');
    
    if (articleElement) {
      // Retrieve the data-item-id from the article element
      const itemId = articleElement.getAttribute('data-item-id');
      
      // Get the button wrapper for the "Add to Cart" button
      const buttonWrapper = document.querySelector('.sqs-add-to-cart-button-wrapper');
      
      if (buttonWrapper) {
        // Create and configure the custom "Try On" button
        const customButton = document.createElement('button');
        customButton.classList.add('custom-try-on-button');
        customButton.textContent = "Try On";
        
        // Add the data-item-id as an attribute to the custom button
        if (itemId) {
          customButton.setAttribute('data-item-id', itemId);
        }
        
        // Add click event to open the Try On modal
        customButton.addEventListener('click', function () {
          openTryOnModal(itemId);
        });
        
        // Append the custom button to the wrapper
        buttonWrapper.appendChild(customButton);
      }
    }
    
    // Select all elements with the class 'ProductItem-gallery-slides-item'
    const slideItems = document.querySelectorAll('.ProductItem-gallery-slides-item');
    if (slideItems.length > 0) {
      // Replace the content of the last slide with a video
      const lastSlideItem = slideItems[slideItems.length - 1];
      replaceSlideWithVideo(lastSlideItem);
    }
  });
  
  // Function to open the Try On modal
  function openTryOnModal(itemId) {
    const modal = document.createElement('div');
    modal.classList.add('custom-modal');
    
    const iframe = document.createElement('iframe');
    iframe.src = 'https://style.clo-set.com/embed/2b0aae6007514254a9cca9f34296180b/1/c/0?bgColor=%23f5f5f5&ui=0&colorway=0&logo=none';
    iframe.frameBorder = "0";
    iframe.allowFullscreen = true;
    
    const modalContent = document.createElement('div');
    modalContent.classList.add('modal-content');
    modalContent.appendChild(iframe);
    
    // Create and configure the close button for the modal
    const closeButton = document.createElement('button');
    closeButton.textContent = "x";
    closeButton.classList.add('close-modal');
    closeButton.addEventListener('click', function () {
      modal.remove();
      // Re-enable controls and buttons when modal is closed
      toggleControlsAndButtons(true);
    });
    
    modalContent.appendChild(closeButton);
    modal.appendChild(modalContent);
    modal.classList.add('ProductItem-gallery-slides-item-image');
    
    const slideItems = document.querySelectorAll('.ProductItem-gallery-slides-item');
    if (slideItems.length > 0) {
      // Replace the content of the last slide with the modal
      const lastSlideItem = slideItems[slideItems.length - 2];
      lastSlideItem.appendChild(modal);
    }
    
  }
  
  // Function to replace the last slide content with a YouTube video
  function replaceSlideWithVideo(slideItem) {
    // Remove existing content inside the last slide
    slideItem.innerHTML = '';
    
    // Create an iframe for embedding the YouTube video
    const iframe = document.createElement('iframe');
    iframe.src = 'https://www.youtube.com/embed/GuO2RznvZBQ?si=o7bTC0YkI2V20Hk8'; // Replace with your YouTube video URL
    iframe.width = '100%'; // Set iframe width
    iframe.height = '100%'; // Set iframe height
    iframe.frameBorder = '0';
    iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
    iframe.allowFullscreen = true;
    
    // Append the iframe to the last slide
    slideItem.appendChild(iframe);
    
    console.log('YouTube video has been added to the last slide.');
  }

  
</script>
