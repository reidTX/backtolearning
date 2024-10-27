    function animateCar(event, targetUrl) {
        event.preventDefault(); // Prevent the default link behavior
        
        const carImage = document.getElementById('carImage');
        
        // Apply the animation class
        carImage.classList.add('shrink-and-move');
        
        // Wait for the animation to finish before navigating to the new page
        setTimeout(() => {
            window.location.href = targetUrl;
        }, 3000); // Match this time with the CSS animation duration
    }
