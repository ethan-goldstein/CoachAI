// Coach AI Application JavaScript

// Variable to track the background switching interval
let backgroundSwitchingInterval = null;

// Function to start automatic background switching
function startBackgroundSwitching() {
    console.log('Starting automatic background switching');
    // Clear any existing interval
    if (backgroundSwitchingInterval) {
        clearInterval(backgroundSwitchingInterval);
    }
    
    // Set interval to switch backgrounds every 5 seconds
    backgroundSwitchingInterval = setInterval(() => {
        console.log('Auto-switching to next stadium');
        // Store previous index for transition effects
        previousStadiumIndex = currentStadiumIndex;
        // Get the next stadium index
        currentStadiumIndex = (currentStadiumIndex + 1) % stadiums.length;
        // Update the stadium display
        updateStadiumDisplay();
    }, 5000);
}

// Function to stop automatic background switching
function stopBackgroundSwitching() {
    if (backgroundSwitchingInterval) {
        clearInterval(backgroundSwitchingInterval);
        backgroundSwitchingInterval = null;
    }
}

// Start with blur and fade in smoothly when the page loads
window.onload = function() {
    console.log('Window loaded - starting with blur transition');
    const hero = document.querySelector('.hero');
    const overlay = document.querySelector('.overlay');
    const stadiumNameElement = document.getElementById('stadium-name');
    const stadiumLocationElement = document.getElementById('stadium-location');
    const teamLogoElement = document.getElementById('team-logo');
    const contentElement = document.querySelector('.content');
    const locationDivider = document.querySelector('.location-divider');
    const stadiumInfo = document.querySelector('.stadium-info');
    const stadiumText = document.querySelector('.stadium-text');
    
    if (hero) {
        // Start with blur effect
        hero.classList.add('fading-out');
        hero.classList.remove('fading-in');
        
        // Hide content elements initially
        if (contentElement) contentElement.style.opacity = '0';
        if (stadiumNameElement) stadiumNameElement.style.opacity = '0';
        if (stadiumLocationElement) stadiumLocationElement.style.opacity = '0';
        if (teamLogoElement) teamLogoElement.style.opacity = '0';
        if (locationDivider) locationDivider.style.opacity = '0';
        if (stadiumInfo) stadiumInfo.style.opacity = '0';
        
        // After a shorter delay, start the fade-in transition faster
        setTimeout(() => {
            // Remove blur
            hero.classList.remove('fading-out');
            hero.classList.add('fading-in');
            
            // Fade in content elements
            setTimeout(() => {
                if (contentElement) contentElement.style.opacity = '1';
                if (stadiumNameElement) stadiumNameElement.style.opacity = '1';
                if (stadiumLocationElement) stadiumLocationElement.style.opacity = '1';
                if (teamLogoElement) teamLogoElement.style.opacity = '1';
                if (locationDivider) locationDivider.style.opacity = '1';
                if (stadiumInfo) stadiumInfo.style.opacity = '1';
                
                // Complete the transition
                setTimeout(() => {
                    hero.classList.remove('fading-in');
                }, 200); // Faster completion
            }, 150); // Faster content fade-in
        }, 250); // Shorter initial delay
        
        // Force the filter to be reset
        hero.style.filter = 'none';
    }
    
    // No overlay handling needed
    
    // Make sure all UI elements are visible
    if (stadiumNameElement) stadiumNameElement.style.opacity = '1';
    if (stadiumLocationElement) stadiumLocationElement.style.opacity = '1';
    if (locationDivider) locationDivider.style.opacity = '1';
    if (teamLogoElement) teamLogoElement.style.opacity = '1';
    if (contentElement) contentElement.style.opacity = '1';
    if (stadiumInfo) stadiumInfo.style.opacity = '1';
    if (stadiumText) stadiumText.style.opacity = '1';
    
    
// Helper function to fade out all UI elements simultaneously
function fadeOutElements() {
    // Directly set opacity for each element to ensure they're all hidden
    const stadiumName = document.getElementById('stadium-name');
    const stadiumLocation = document.getElementById('stadium-location');
    const teamLogo = document.getElementById('team-logo');
    const content = document.querySelector('.content');
    const locationDivider = document.querySelector('.location-divider');
    const stadiumInfo = document.querySelector('.stadium-info');
    const stadiumText = document.querySelector('.stadium-text');
    const logoContainer = document.querySelector('.logo-container');
    
    // Set the exact same transition for all elements
    const transitionValue = 'opacity 0.4s ease-in-out';
    if (stadiumName) stadiumName.style.transition = transitionValue;
    if (stadiumLocation) stadiumLocation.style.transition = transitionValue;
    if (teamLogo) teamLogo.style.transition = transitionValue;
    if (content) content.style.transition = transitionValue;
    if (locationDivider) locationDivider.style.transition = transitionValue;
    if (stadiumInfo) stadiumInfo.style.transition = transitionValue;
    if (stadiumText) stadiumText.style.transition = transitionValue;
    if (logoContainer) logoContainer.style.transition = transitionValue;
    
    // Hide all elements
    if (stadiumName) stadiumName.style.opacity = '0';
    if (stadiumLocation) stadiumLocation.style.opacity = '0';
    if (teamLogo) teamLogo.style.opacity = '0';
    if (content) content.style.opacity = '0';
    if (locationDivider) locationDivider.style.opacity = '0';
    if (stadiumInfo) stadiumInfo.style.opacity = '0';
    if (stadiumText) stadiumText.style.opacity = '0';
    if (logoContainer) logoContainer.style.opacity = '0';
}

// Helper function to fade in all UI elements simultaneously
function fadeInElements() {
    // Directly set opacity for each element to ensure they're all visible
    const stadiumName = document.getElementById('stadium-name');
    const stadiumLocation = document.getElementById('stadium-location');
    const teamLogo = document.getElementById('team-logo');
    const content = document.querySelector('.content');
    const locationDivider = document.querySelector('.location-divider');
    const stadiumInfo = document.querySelector('.stadium-info');
    const stadiumText = document.querySelector('.stadium-text');
    const logoContainer = document.querySelector('.logo-container');
    
    // Set the exact same transition for all elements
    const transitionValue = 'opacity 0.4s ease-in-out';
    if (stadiumName) stadiumName.style.transition = transitionValue;
    if (stadiumLocation) stadiumLocation.style.transition = transitionValue;
    if (teamLogo) teamLogo.style.transition = transitionValue;
    if (content) content.style.transition = transitionValue;
    if (locationDivider) locationDivider.style.transition = transitionValue;
    if (stadiumInfo) stadiumInfo.style.transition = transitionValue;
    if (stadiumText) stadiumText.style.transition = transitionValue;
    if (logoContainer) logoContainer.style.transition = transitionValue;
    
    // Make all elements visible
    if (stadiumName) stadiumName.style.opacity = '1';
    if (stadiumLocation) stadiumLocation.style.opacity = '1';
    if (teamLogo) teamLogo.style.opacity = '1';
    if (content) content.style.opacity = '1';
    if (locationDivider) locationDivider.style.opacity = '1';
    if (stadiumInfo) stadiumInfo.style.opacity = '1';
    if (stadiumText) stadiumText.style.opacity = '1';
    if (logoContainer) logoContainer.style.opacity = '1';
}
    
    // Update the initial stadium content
    if (typeof stadiums !== 'undefined' && stadiums.length > 0) {
        updateStadiumContent(stadiums[0]);
    }
};

document.addEventListener('DOMContentLoaded', function() {
    // Simplified stadium array with just 3 stadiums for testing
    const stadiums = [
        {
            team: 'Boston Red Sox',
            name: 'Fenway Park',
            location: 'Boston',
            image: 'Images/TeamStadium/FenwayPark.jpg.webp',
            logo: 'Images/TeamLogo/REDSOXlogo.png'
        },
        {
            team: 'Chicago Cubs',
            name: 'Wrigley Field',
            location: 'Chicago',
            image: 'Images/TeamStadium/WrigleyField.jpeg',
            logo: 'Images/TeamLogo/CubsLogo.png'
        },
        {
            team: 'Chicago White Sox',
            name: 'Guaranteed Rate Field',
            location: 'Chicago',
            image: 'Images/TeamStadium/WhiteSoxStadium.webp',
            logo: 'Images/TeamLogo/WhiteSoxLogo.png'
        },
        {
            team: 'Cincinnati Reds',
            name: 'Great American Ball Park',
            location: 'Cincinnati',
            image: 'Images/TeamStadium/RedsStadium.jpg',
            logo: 'Images/TeamLogo/RedsLogo.png'
        },
        {
            team: 'Cleveland Guardians',
            name: 'Progressive Field',
            location: 'Cleveland',
            image: 'Images/TeamStadium/GuardiansField.jpg',
            logo: 'Images/TeamLogo/Guardians.png'
        },
        {
            team: 'Colorado Rockies',
            name: 'Coors Field',
            location: 'Denver',
            image: 'Images/TeamStadium/RockiesField.jpg',
            logo: 'Images/TeamLogo/RockiesLogo.png'
        },
        {
            team: 'Detroit Tigers',
            name: 'Comerica Park',
            location: 'Detroit',
            image: 'Images/TeamStadium/DetroitField.jpg',
            logo: 'Images/TeamLogo/DetroitLogo.png'
        },
        {
            team: 'Houston Astros',
            name: 'Minute Maid Park',
            location: 'Houston',
            image: 'Images/TeamStadium/AstrosField.jpeg',
            logo: 'Images/TeamLogo/AstrosLogo.png'
        },
        {
            team: 'Kansas City Royals',
            name: 'Kauffman Stadium',
            location: 'Kansas City',
            image: 'Images/TeamStadium/KansasCityField.jpg',
            logo: 'Images/TeamLogo/RoyalsLogo.png'
        },
        {
            team: 'Los Angeles Angels',
            name: 'Angel Stadium',
            location: 'Anaheim',
            image: 'Images/TeamStadium/AnglesPark.jpg',
            logo: 'Images/TeamLogo/AngelsLogo.png'
        },
        {
            team: 'Los Angeles Dodgers',
            name: 'Dodger Stadium',
            location: 'Los Angeles',
            image: 'Images/TeamStadium/DodgerStadium1.jpg',
            logo: 'Images/TeamLogo/DodgersLogo.png'
        },
        {
            team: 'Miami Marlins',
            name: 'loanDepot park',
            location: 'Miami',
            image: 'Images/TeamStadium/MarlinsField.jpg',
            logo: 'Images/TeamLogo/MarlinsLogo.png'
        },
        {
            team: 'Milwaukee Brewers',
            name: 'American Family Field',
            location: 'Milwaukee',
            image: 'Images/TeamStadium/BrewersField.jpg',
            logo: 'Images/TeamLogo/BrewersLogo.svg'
        },
        {
            team: 'Minnesota Twins',
            name: 'Target Field',
            location: 'Minneapolis',
            image: 'Images/TeamStadium/TwinsStadium.jpg',
            logo: 'Images/TeamLogo/Twinslogo.png'
        },
        {
            team: 'New York Mets',
            name: 'Citi Field',
            location: 'New York',
            image: 'Images/TeamStadium/CitiField.jpeg',
            logo: 'Images/TeamLogo/MetsLogo.png'
        },
        {
            team: 'New York Yankees',
            name: 'Yankee Stadium',
            location: 'New York',
            image: 'Images/TeamStadium/YankeeStadium.jpg',
            logo: 'Images/TeamLogo/YanksLogo.png'
        },
        {
            team: 'Philadelphia Phillies',
            name: 'Citizens Bank Park',
            location: 'Philadelphia',
            image: 'Images/TeamStadium/PhilliesField.jpeg',
            logo: 'Images/TeamLogo/PhilliesLogo.png'
        },
        {
            team: 'Pittsburgh Pirates',
            name: 'PNC Park',
            location: 'Pittsburgh',
            image: 'Images/TeamStadium/PiratesStadium.jpg',
            logo: 'Images/TeamLogo/PiratesLogo.png'
        },
        {
            team: 'San Diego Padres',
            name: 'Petco Park',
            location: 'San Diego',
            image: 'Images/TeamStadium/PetcoPark.jpg',
            logo: 'Images/TeamLogo/PadresLogo.svg'
        },
        {
            team: 'San Francisco Giants',
            name: 'Oracle Park',
            location: 'San Francisco',
            image: 'Images/TeamStadium/OraclePark.jpg',
            logo: 'Images/TeamLogo/GiantsLogo.png'
        },
        {
            team: 'Seattle Mariners',
            name: 'T-Mobile Park',
            location: 'Seattle',
            image: 'Images/TeamStadium/T-MobilePark.jpg',
            logo: 'Images/TeamLogo/MarinersLogo.png'
        },
        {
            team: 'St. Louis Cardinals',
            name: 'Busch Stadium',
            location: 'St. Louis',
            image: 'Images/TeamStadium/CardinalsStadium.jpg',
            logo: 'Images/TeamLogo/CardinalsLogo.png'
        },
        {
            team: 'Tampa Bay Rays',
            name: 'Tropicana Field',
            location: 'St. Petersburg',
            image: 'Images/TeamStadium/TropicanaField.jpeg',
            logo: 'Images/TeamLogo/RaysLogo.png'
        },
        {
            team: 'Texas Rangers',
            name: 'Globe Life Field',
            location: 'Arlington',
            image: 'Images/TeamStadium/RangersStadium.jpg',
            logo: 'Images/TeamLogo/RangersLogo.png'
        },
        {
            team: 'Toronto Blue Jays',
            name: 'Rogers Centre',
            location: 'Toronto',
            image: 'Images/TeamStadium/BLUEJAYS.webp',
            logo: 'Images/TeamLogo/BlueJaysLogo.png'
        },
        {
            team: 'Washington Nationals',
            name: 'Nationals Park',
            location: 'Washington, D.C.',
            image: 'Images/TeamStadium/NATSPARK.webp',
            logo: 'Images/TeamLogo/NatsLogo.png'
        },
        {
            team: 'Oakland Athletics',
            name: 'Sutter Health Park',
            location: 'Oakland',
            image: 'Images/TeamStadium/Athletics.jpg',
            logo: 'Images/TeamLogo/OAKLANDLOGO.png'
        },
        {
            team: 'Arizona Diamondbacks',
            name: 'D-Backs Stadium',
            location: 'Phoenix',
            image: 'Images/TeamStadium/DBACKS.webp',
            logo: 'Images/TeamLogo/DBACKSLogo.png'
        },
        {
            team: 'Baltimore Orioles',
            name: 'Oriola Park',
            location: 'Baltimore',
            image: 'Images/TeamStadium/ORIOLESpark.jpg',
            logo: 'Images/TeamLogo/OriolesLogo.png'
        },
        {
            team: 'Atlanta Braves',
            name: 'Truist Park',
            location: 'Atlanta',
            image: 'Images/TeamStadium/BRAVESSTADIUM.webp',
            logo: 'Images/TeamLogo/BRAVESLOGO.webp'
        }
    ];
    
    // DOM Elements
    const heroElement = document.querySelector('.hero');
    const contentElement = document.querySelector('.content');
    const stadiumNameElement = document.getElementById('stadium-name');
    const stadiumLocationElement = document.getElementById('stadium-location');
    const teamLogoElement = document.getElementById('team-logo');
    const prevBgButton = document.getElementById('prev-bg');
    const nextBgButton = document.getElementById('next-bg');
    
    // Reset any transition classes that might be stuck
    heroElement.classList.remove('fading-out');
    heroElement.classList.remove('fading-in');
    
    // Initialize with a random stadium
    let currentStadiumIndex = Math.floor(Math.random() * stadiums.length);
    let previousStadiumIndex = 0;
    
    // Log the randomly selected stadium
    console.log('Starting with random stadium:', currentStadiumIndex, 'Stadium:', stadiums[currentStadiumIndex].name);
    
    // Make sure the hero element is in its default state
    heroElement.classList.remove('fading-out');
    heroElement.classList.remove('fading-in');
    
    // Set the initial content with the random stadium
    updateStadiumContent(stadiums[currentStadiumIndex]);
    
    // Make sure all elements are visible
    fadeInElements();
    
    // No automatic background switching on home page
    // Only manual navigation through buttons
    
    // Event listeners for navigation buttons
    prevBgButton.addEventListener('click', function() {
        // Store previous index before changing
        previousStadiumIndex = currentStadiumIndex;
        
        // Update index
        currentStadiumIndex = (currentStadiumIndex - 1 + stadiums.length) % stadiums.length;
        console.log('New stadium index:', currentStadiumIndex, 'Stadium:', stadiums[currentStadiumIndex].name);
        
        // Update display
        updateStadiumDisplay();
    });
    
    nextBgButton.addEventListener('click', function() {
        // Store previous index before changing
        previousStadiumIndex = currentStadiumIndex;
        
        // Update index
        currentStadiumIndex = (currentStadiumIndex + 1) % stadiums.length;
        console.log('New stadium index:', currentStadiumIndex, 'Stadium:', stadiums[currentStadiumIndex].name);
        
        // Update display
        updateStadiumDisplay();
    });
    
    // No upload event listeners needed
    
    // Function to update the stadium display with a super smooth transition
    function updateStadiumDisplay() {
        console.log('Updating stadium display to:', stadiums[currentStadiumIndex].name);
        
        // Get the current stadium
        const stadium = stadiums[currentStadiumIndex];
        
        // No overlay handling needed
        
        // 1. Start transition by fading out UI elements
        fadeOutElements();
        
        // 2. Add blur effect to background (fade out with blur)
        heroElement.classList.add('fading-out');
        heroElement.classList.remove('fading-in');
        
        // 3. Add glow effect to the navigation button that was clicked
        const clickedButton = currentStadiumIndex > previousStadiumIndex ? nextBgButton : prevBgButton;
        clickedButton.classList.add('button-clicked');
        
        // Remove button glow after animation completes
        setTimeout(() => {
            clickedButton.classList.remove('button-clicked');
        }, 500);
        
        // 4. Preload the next stadium image
        const img = new Image();
        img.src = stadium.image;
        
        // 5. Wait for the full blur transition time (400ms) before updating content
        // This ensures the image changes while fully blurred for a smoother transition
        setTimeout(() => {
            // Update all stadium content (image, name, location, logo)
            updateStadiumContent(stadium);
            
            // We'll let the fadeInElements function handle showing the text elements
            
            // 6. After updating content, start the fade-in blur transition
            // We don't remove fading-out class yet - we'll do a full blur cycle
            setTimeout(() => {
                heroElement.classList.remove('fading-out');
                heroElement.classList.add('fading-in');
                setTimeout(() => {
                    // Fade in all elements together in a single animation frame
                    fadeInElements();
                    setTimeout(() => {
                        heroElement.classList.remove('fading-in');
                        
                        // No overlay handling needed
                    }, 100);
                }, 300); // Wait until blur is mostly gone
            }, 50); // Short pause after content update
        }, 400); // Full blur transition time
    }
    
    // Helper function to update stadium content
    function updateStadiumContent(stadium) {
        console.log('Loading stadium:', stadium.name, 'with image:', stadium.image);
        
        // Update stadium info text first (this is instant)
        const stadiumNameElement = document.getElementById('stadium-name');
        const stadiumLocationElement = document.getElementById('stadium-location');
        const teamLogoElement = document.getElementById('team-logo');
        const logoContainer = document.querySelector('.logo-container');
        
        if (stadiumNameElement) stadiumNameElement.textContent = stadium.name;
        if (stadiumLocationElement) stadiumLocationElement.textContent = stadium.location;
        
        // Make sure all text elements are properly styled
        const locationDivider = document.querySelector('.location-divider');
        const stadiumInfo = document.querySelector('.stadium-info');
        const stadiumText = document.querySelector('.stadium-text');
        
        // Set the exact same transition for all elements
        const transitionValue = 'opacity 0.4s ease-in-out';
        if (stadiumNameElement) stadiumNameElement.style.transition = transitionValue;
        if (stadiumLocationElement) stadiumLocationElement.style.transition = transitionValue;
        if (teamLogoElement) teamLogoElement.style.transition = transitionValue;
        if (logoContainer) logoContainer.style.transition = transitionValue;
        if (locationDivider) locationDivider.style.transition = transitionValue;
        if (stadiumInfo) stadiumInfo.style.transition = transitionValue;
        if (stadiumText) stadiumText.style.transition = transitionValue;
        
        // Set up image loading with proper error handling
        const bgImg = new Image();
        
        // Set up error handling
        bgImg.onerror = function() {
            console.error('Failed to load stadium image:', stadium.image);
            // Set a fallback background color if image fails
            heroElement.style.backgroundImage = 'none';
            heroElement.style.backgroundColor = '#000';
        };
        
        // Set up successful load handler
        bgImg.onload = function() {
            // Only update the background once the image is fully loaded
            heroElement.style.backgroundImage = `url(${stadium.image})`;
        };
        
        // Start loading the image
        bgImg.src = stadium.image;
        
        // Handle logo loading with proper error handling
        const logoImg = new Image();
        
        // Set up error handling for logo
        logoImg.onerror = function() {
            console.error('Failed to load team logo:', stadium.logo);
            // Set a fallback for the logo
            teamLogoElement.style.backgroundImage = 'none';
            teamLogoElement.style.backgroundColor = '#333';
        };
        
        // Set up successful load handler for logo
        logoImg.onload = function() {
            // Only update the logo once the image is fully loaded
            teamLogoElement.style.backgroundImage = `url(${stadium.logo})`;
            teamLogoElement.style.backgroundColor = 'transparent';
            teamLogoElement.style.border = 'none';
        };
        logoImg.src = stadium.logo;
    }
    
    // Helper function to fade out elements
    function fadeOutElements() {
        // Fade out all UI elements with proper opacity values
        contentElement.style.opacity = '0';
        stadiumNameElement.style.opacity = '0';
        stadiumLocationElement.style.opacity = '0';
        
        // Make sure we have the location divider before trying to modify it
        const locationDivider = document.querySelector('.location-divider');
        if (locationDivider) {
            locationDivider.style.opacity = '0';
        }
        
        // Fade out the team logo
        teamLogoElement.style.opacity = '0';
        
        console.log('UI elements faded out');
    }
    
    // Helper function to fade in elements
    function fadeInElements() {
        // Fade in all UI elements with proper opacity values
        stadiumNameElement.style.opacity = '1';
        stadiumLocationElement.style.opacity = '1';
        
        // Make sure we have the location divider before trying to modify it
        const locationDivider = document.querySelector('.location-divider');
        if (locationDivider) {
            locationDivider.style.opacity = '0.5';
        }
        
        // Fade in the team logo and main content
        teamLogoElement.style.opacity = '1';
        contentElement.style.opacity = '1';
        
        console.log('UI elements faded in');
    }
    
    // Coach data for the chat interface
    const coaches = {
        mike: {
            name: 'Mike Johnson',
            title: 'Pitching & Mechanics Specialist',
            avatar: 'mike-image',
            greeting: "Hi there! I'm Mike Johnson, your pitching and mechanics specialist. How can I help improve your technique today?"
        },
        sarah: {
            name: 'Sarah Rodriguez',
            title: 'Batting Coach & former All-Star',
            avatar: 'sarah-image',
            greeting: "Hello! I'm Sarah Rodriguez, batting coach and former All-Star. Ready to work on your swing?"
        },
        david: {
            name: 'David Washington',
            title: 'Fielding Expert & Gold Glove winner',
            avatar: 'david-image',
            greeting: "Hey there! I'm David Washington, fielding expert and Gold Glove winner. Let's improve your defensive skills!"
        },
        lisa: {
            name: 'Lisa Chen',
            title: 'Strategy Specialist & Championship-winning Head Coach',
            avatar: 'lisa-image',
            greeting: "Welcome! I'm Lisa Chen, strategy specialist and championship-winning coach. How can I help with your game strategy?"
        }
    };

    // DOM elements
    const chatButtons = document.querySelectorAll('.chat-btn');
    const selectedCoachAvatar = document.getElementById('selected-coach-avatar');
    const selectedCoachName = document.getElementById('selected-coach-name');
    const selectedCoachTitle = document.getElementById('selected-coach-title');
    const chatMessages = document.getElementById('chat-messages');
    const userInput = document.getElementById('user-input');
    const sendBtn = document.getElementById('send-btn');
    
    let currentCoach = null;

    // Event listeners
    chatButtons.forEach(button => {
        button.addEventListener('click', function() {
            const coachId = this.getAttribute('data-coach');
            selectCoach(coachId);
            
            // Scroll to chat section
            document.getElementById('chat').scrollIntoView({ behavior: 'smooth' });
        });
    });

    sendBtn.addEventListener('click', sendMessage);
    userInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    });

    // Functions
    function selectCoach(coachId) {
        currentCoach = coaches[coachId];
        
        // Update coach info in chat header
        selectedCoachAvatar.style.backgroundImage = `url(${document.getElementById(currentCoach.avatar).style.backgroundImage.slice(4, -1).replace(/"/g, '')})`;
        selectedCoachName.textContent = currentCoach.name;
        selectedCoachTitle.textContent = currentCoach.title;
        
        // Clear previous messages
        chatMessages.innerHTML = '';
        
        // Add greeting message
        addCoachMessage(currentCoach.greeting);
    }

    function sendMessage() {
        const message = userInput.value.trim();
        
        if (message && currentCoach) {
            // Add user message
            addUserMessage(message);
            
            // Clear input
            userInput.value = '';
            
            // Simulate coach response (in a real app, this would call the GPT API)
            setTimeout(() => {
                generateCoachResponse(message);
            }, 1000);
        } else if (!currentCoach) {
            alert('Please select a coach first!');
        }
    }

    function addUserMessage(text) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message', 'user-message');
        messageElement.textContent = text;
        chatMessages.appendChild(messageElement);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    function addCoachMessage(text) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message', 'coach-message');
        messageElement.textContent = text;
        chatMessages.appendChild(messageElement);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    function generateCoachResponse(userMessage) {
        // This is a placeholder for the GPT API integration
        // In a real application, you would send the user message to the GPT API
        // along with context about the selected coach
        
        let response = '';
        
        // Simple keyword-based responses for demo purposes
        if (userMessage.toLowerCase().includes('pitch') || userMessage.toLowerCase().includes('throw')) {
            if (currentCoach.name === 'Mike Johnson') {
                response = "Great question about pitching! When working on your pitching mechanics, focus on your grip, stance, and follow-through. Remember that consistency is key.";
            } else {
                response = `That's a great question about pitching. Let me share my thoughts, although Mike Johnson is our pitching specialist and might have more detailed advice.`;
            }
        } else if (userMessage.toLowerCase().includes('bat') || userMessage.toLowerCase().includes('hit')) {
            if (currentCoach.name === 'Sarah Rodriguez') {
                response = "When it comes to batting, keep your eye on the ball and maintain a balanced stance. The power comes from your hips and core, not just your arms.";
            } else {
                response = `That's a good question about batting. I have some thoughts, but Sarah Rodriguez is our batting specialist and could give you more specific advice.`;
            }
        } else if (userMessage.toLowerCase().includes('field') || userMessage.toLowerCase().includes('catch')) {
            if (currentCoach.name === 'David Washington') {
                response = "Fielding is all about positioning and anticipation. Always stay on your toes and keep your glove down. Remember to use two hands when catching!";
            } else {
                response = `Good question about fielding. I can help with the basics, but David Washington is our fielding expert and could provide more specialized guidance.`;
            }
        } else if (userMessage.toLowerCase().includes('strategy') || userMessage.toLowerCase().includes('game plan')) {
            if (currentCoach.name === 'Lisa Chen') {
                response = "Game strategy depends on understanding both your team's strengths and your opponent's weaknesses. Always have a plan A, B, and C for different game situations.";
            } else {
                response = `That's a great question about strategy. I have some insights, but Lisa Chen is our strategy specialist and might have more comprehensive advice.`;
            }
        } else {
            // Generic responses based on coach specialty
            switch (currentCoach.name) {
                case 'Mike Johnson':
                    response = "That's an interesting question. From a pitching perspective, I'd recommend focusing on your form and consistency. Would you like specific advice about your pitching technique?";
                    break;
                case 'Sarah Rodriguez':
                    response = "Thanks for your question. As a batting coach, I always emphasize the importance of practice and proper technique. Would you like some specific batting drills to work on?";
                    break;
                case 'David Washington':
                    response = "Good question. When it comes to fielding, positioning and quick reactions are key. Would you like to discuss specific fielding scenarios or techniques?";
                    break;
                case 'Lisa Chen':
                    response = "That's a thoughtful question. From a strategic standpoint, it's important to analyze both your team's capabilities and your opponents' patterns. Would you like to discuss specific game situations?";
                    break;
            }
        }
        
        addCoachMessage(response);
    }
});
