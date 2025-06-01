// Script to handle icon hover effects for the entire contact method box
document.addEventListener('DOMContentLoaded', function() {
    // Set all icon backgrounds to white and icons to black initially
    const iconContainers = document.querySelectorAll('.method-icon');
    iconContainers.forEach(container => {
        container.style.color = '#ffffff'; // Keep container white
        container.style.transition = 'color 0.3s ease';
    });
    
    const iconElements = document.querySelectorAll('.method-icon i');
    iconElements.forEach(icon => {
        icon.style.color = '#000000'; // Make icons black
        icon.style.transition = 'color 0.3s ease';
    });
    
    // Create side bar elements for each contact method
    const contactMethods = document.querySelectorAll('a.contact-method');
    contactMethods.forEach(method => {
        // Create a pseudo-element for the side bar if it doesn't exist
        if (!method.querySelector('.side-bar')) {
            const sideBar = document.createElement('div');
            sideBar.className = 'side-bar';
            sideBar.style.position = 'absolute';
            sideBar.style.top = '0';
            sideBar.style.left = '0';
            sideBar.style.width = '3px';
            sideBar.style.height = '100%';
            sideBar.style.transition = 'all 0.3s ease';
            method.style.position = 'relative';
            method.style.overflow = 'hidden';
            method.appendChild(sideBar);
        }
    });
    
    // Add hover effects to each contact method
    contactMethods.forEach(method => {
        // Determine which icon type this contact method contains
        let iconClass = '';
        let hoverColor = '';
        
        if (method.querySelector('.instagram-icon')) {
            iconClass = 'instagram-icon';
            hoverColor = '#FF1493'; // Brighter pink/red for Instagram
        } else if (method.querySelector('.phone-icon')) {
            iconClass = 'phone-icon';
            hoverColor = '#00FF7F'; // Brighter green for Phone
        } else if (method.querySelector('.email-icon')) {
            iconClass = 'email-icon';
            hoverColor = '#A9A9A9'; // Brighter gray for Email
        } else if (method.querySelector('.linkedin-icon')) {
            iconClass = 'linkedin-icon';
            hoverColor = '#1E90FF'; // Brighter blue for LinkedIn
        }
        
        if (iconClass) {
            const sideBar = method.querySelector('.side-bar');
            sideBar.style.backgroundColor = '#ffffff';
            sideBar.style.opacity = '0.5';
            
            // Find the icons within this contact method
            const icons = method.querySelectorAll('.' + iconClass + ', .' + iconClass + ' i');
            
            // Add hover effect to the entire contact method
            method.addEventListener('mouseenter', function() {
                // Change the icon color
                const iconElements = method.querySelectorAll('.' + iconClass + ' i');
                iconElements.forEach(icon => icon.style.color = hoverColor);
                
                // Animate the side bar and change its color
                sideBar.style.width = '100%';
                sideBar.style.opacity = '0.1';
                sideBar.style.backgroundColor = hoverColor;
                
                // Add a glow effect to the contact method
                method.style.boxShadow = `0 5px 15px ${hoverColor}80`;
                method.style.borderColor = `${hoverColor}50`;
            });
            
            method.addEventListener('mouseleave', function() {
                // Reset icon color
                const iconElements = method.querySelectorAll('.' + iconClass + ' i');
                iconElements.forEach(icon => icon.style.color = '#000000');
                
                // Reset the side bar to white
                sideBar.style.width = '3px';
                sideBar.style.opacity = '0.5';
                sideBar.style.backgroundColor = '#ffffff';
                
                // Remove the glow effect
                method.style.boxShadow = '';
                method.style.borderColor = '';
            });
        }
    });
});
