// Coach AI Application JavaScript

// Variable to track the background switching interval
let backgroundSwitchingInterval = null;

// Function to start automatic background switching
function startBackgroundSwitching() {
    if (backgroundSwitchingInterval) {
        clearInterval(backgroundSwitchingInterval);
    }
    
    // Set interval to switch backgrounds every 5 seconds
    backgroundSwitchingInterval = setInterval(() => {

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
    const hero = document.querySelector('.hero');
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
    

    if (stadiumText) stadiumText.style.opacity = '1';
};

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

document.addEventListener('DOMContentLoaded', function() {
    // Simplified stadium array with just 3 stadiums for testing
    const stadiums = [
        {
            name: "Fenway Park",
            location: "Boston",
            team: "Boston Red Sox",
            logo: "Images/TeamLogo/REDSOXlogo.png",
            image: "Images/TeamStadium/FenwayPark.jpg"
        },
        {
            name: "Yankee Stadium",
            location: "New York",
            team: "New York Yankees",
            logo: "Images/TeamLogo/YanksLogo.png",
            image: "Images/TeamStadium/YankeeStadium.jpg"
        },
        {
            name: "Rogers Centre",
            location: "Toronto",
            team: "Toronto Blue Jays",
            logo: "Images/TeamLogo/BlueJaysLogo.png",
            image: "Images/TeamStadium/BLUEJAYS.webp"
        },
        {
            name: "Oriole Park at Camden Yards",
            location: "Baltimore",
            team: "Baltimore Orioles",
            logo: "Images/TeamLogo/OriolesLogo.png",
            image: "Images/TeamStadium/ORIOLESpark.jpg"
        },
        {
            name: "Tropicana Field",
            location: "Tampa Bay",
            team: "Tampa Bay Rays",
            logo: "Images/TeamLogo/RaysLogo.png",
            image: "Images/TeamStadium/TropicanaField.jpeg"
        },
        
        // AL Central
        {
            name: "Progressive Field",
            location: "Cleveland",
            team: "Cleveland Guardians",
            logo: "Images/TeamLogo/Guardians.png",
            image: "Images/TeamStadium/GuardiansField.jpg"
        },
        {
            name: "Comerica Park",
            location: "Detroit",
            team: "Detroit Tigers",
            logo: "Images/TeamLogo/DetroitLogo.png",
            image: "Images/TeamStadium/DetroitField.jpg"
        },
        {
            name: "Kauffman Stadium",
            location: "Kansas City",
            team: "Kansas City Royals",
            logo: "Images/TeamLogo/RoyalsLogo.png",
            image: "Images/TeamStadium/KansasCityField.jpg"
        },
        {
            name: "Target Field",
            location: "Minnesota",
            team: "Minnesota Twins",
            logo: "Images/TeamLogo/Twinslogo.png",
            image: "Images/TeamStadium/TwinsStadium.jpg"
        },
        {
            name: "Guaranteed Rate Field",
            location: "Chicago",
            team: "Chicago White Sox",
            logo: "Images/TeamLogo/WhiteSoxLogo.png",
            image: "Images/TeamStadium/WhiteSoxStadium.webp"
        },
        
        // AL West
        {
            name: "Minute Maid Park",
            location: "Houston",
            team: "Houston Astros",
            logo: "Images/TeamLogo/AstrosLogo.png",
            image: "Images/TeamStadium/AstrosField.jpeg"
        },
        {
            name: "Angel Stadium",
            location: "Anaheim",
            team: "Los Angeles Angels",
            logo: "Images/TeamLogo/AngelsLogo.png",
            image: "Images/TeamStadium/AnglesPark.jpg"
        },
        {
            name: "Oakland Coliseum",
            location: "Oakland",
            team: "Oakland Athletics",
            logo: "Images/TeamLogo/OaklandLogo.png",
            image: "Images/TeamStadium/Athletics.jpg"
        },
        {
            name: "T-Mobile Park",
            location: "Seattle",
            team: "Seattle Mariners",
            logo: "Images/TeamLogo/MarinersLogo.png",
            image: "Images/TeamStadium/T-MobilePark.jpg"
        },
        {
            name: "Globe Life Field",
            location: "Arlington",
            team: "Texas Rangers",
            logo: "Images/TeamLogo/RangersLogo.png",
            image: "Images/TeamStadium/RangersStadium.jpg"
        },
        
        // NL East
        {
            name: "Truist Park",
            location: "Atlanta",
            team: "Atlanta Braves",
            logo: "Images/TeamLogo/BRAVESLOGO.webp",
            image: "Images/TeamStadium/BRAVESSTADIUM.webp"
        },
        {
            name: "LoanDepot Park",
            location: "Miami",
            team: "Miami Marlins",
            logo: "Images/TeamLogo/MarlinsLogo.png",
            image: "Images/TeamStadium/MarlinsField.jpg"
        },
        {
            name: "Citi Field",
            location: "New York",
            team: "New York Mets",
            logo: "Images/TeamLogo/MetsLogo.png",
            image: "Images/TeamStadium/CitiField.jpeg"
        },
        {
            name: "Citizens Bank Park",
            location: "Philadelphia",
            team: "Philadelphia Phillies",
            logo: "Images/TeamLogo/PhilliesLogo.png",
            image: "Images/TeamStadium/PhilliesField.jpeg"
        },
        {
            name: "Nationals Park",
            location: "Washington",
            team: "Washington Nationals",
            logo: "Images/TeamLogo/NatsLogo.png",
            image: "Images/TeamStadium/NATSPARK.webp"
        },
        
        // NL Central
        {
            name: "Wrigley Field",
            location: "Chicago",
            team: "Chicago Cubs",
            logo: "Images/TeamLogo/CubsLogo.png",
            image: "Images/TeamStadium/WrigleyField.jpeg"
        },
        {
            name: "Great American Ball Park",
            location: "Cincinnati",
            team: "Cincinnati Reds",
            logo: "Images/TeamLogo/RedsLogo.png",
            image: "Images/TeamStadium/RedsStadium.jpg"
        },
        {
            name: "American Family Field",
            location: "Milwaukee",
            team: "Milwaukee Brewers",
            logo: "Images/TeamLogo/BrewersLogo.svg",
            image: "Images/TeamStadium/BrewersField.jpg"
        },
        {
            name: "PNC Park",
            location: "Pittsburgh",
            team: "Pittsburgh Pirates",
            logo: "Images/TeamLogo/PiratesLogo.png",
            image: "Images/TeamStadium/PiratesStadium.jpg"
        },
        {
            name: "Busch Stadium",
            location: "St. Louis",
            team: "St. Louis Cardinals",
            logo: "Images/TeamLogo/CardinalsLogo.png",
            image: "Images/TeamStadium/CardinalsStadium.jpg"
        },
        
        // NL West
        {
            name: "Chase Field",
            location: "Phoenix",
            team: "Arizona Diamondbacks",
            logo: "Images/TeamLogo/DBACKSlogo.png",
            image: "Images/TeamStadium/DBACKS.webp"
        },
        {
            name: "Coors Field",
            location: "Denver",
            team: "Colorado Rockies",
            logo: "Images/TeamLogo/RockiesLogo.png",
            image: "Images/TeamStadium/RockiesField.jpg"
        },
        {
            name: "Dodger Stadium",
            location: "Los Angeles",
            team: "Los Angeles Dodgers",
            logo: "Images/TeamLogo/DodgersLogo.png",
            image: "Images/TeamStadium/DodgerStadium1.jpg"
        },
        {
            name: "Petco Park",
            location: "San Diego",
            team: "San Diego Padres",
            logo: "Images/TeamLogo/PadresLogo.svg",
            image: "Images/TeamStadium/PetcoPark.jpg"
        },
        {
            name: "Oracle Park",
            location: "San Francisco",
            team: "San Francisco Giants",
            logo: "Images/TeamLogo/GiantsLogo.png",
            image: "Images/TeamStadium/OraclePark.jpg"
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
    if (heroElement) {
        heroElement.classList.remove('fading-out');
        heroElement.classList.remove('fading-in');
    }
    
    // Initialize with a random stadium
    let currentStadiumIndex = Math.floor(Math.random() * stadiums.length);
    let previousStadiumIndex = 0;
    
    // Update the stadium display with a super smooth transition
    function updateStadiumDisplay() {
        console.log('Updating stadium display to:', stadiums[currentStadiumIndex].name);
        
        // Get the current stadium
        const stadium = stadiums[currentStadiumIndex];
        
        // 1. Start transition by fading out UI elements
        fadeOutElements();
        
        // 2. Add blur effect to background (fade out with blur)
        if (heroElement) {
            heroElement.classList.add('fading-out');
            heroElement.classList.remove('fading-in');
        }
        
        // 3. Add glow effect to the navigation button that was clicked
        const clickedButton = currentStadiumIndex > previousStadiumIndex ? nextBgButton : prevBgButton;
        if (clickedButton) clickedButton.classList.add('button-clicked');
        
        // Remove button glow after animation completes
        setTimeout(() => {
            if (clickedButton) clickedButton.classList.remove('button-clicked');
        }, 500);
        
        // 4. Preload the next stadium image
        const img = new Image();
        img.src = stadium.image;
        
        // 5. Wait for the full blur transition time (400ms) before updating content
        setTimeout(() => {
            // Update all stadium content (image, name, location, logo)
            updateStadiumContent(stadium);
            
            // 6. After updating content, start the fade-in blur transition
            setTimeout(() => {
                if (heroElement) {
                    heroElement.classList.remove('fading-out');
                    heroElement.classList.add('fading-in');
                }
                setTimeout(() => {
                    // Fade in all elements together in a single animation frame
                    fadeInElements();
                    setTimeout(() => {
                        if (heroElement) heroElement.classList.remove('fading-in');
                    }, 100);
                }, 300); // Wait until blur is mostly gone
            }, 50); // Short pause after content update
        }, 400); // Full blur transition time
    }
    
    // Helper function to update stadium content
    function updateStadiumContent(stadium) {
        console.log('Loading stadium:', stadium.name, 'with image:', stadium.image);
        
        // Update stadium info text first (this is instant)
        if (stadiumNameElement) stadiumNameElement.textContent = stadium.name;
        if (stadiumLocationElement) stadiumLocationElement.textContent = stadium.location;
        
        // Set up image loading with proper error handling
        if (heroElement) {
            const bgImg = new Image();
            
            // Set up error handling
            bgImg.onerror = function() {

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
        }
        
        // Handle logo loading with proper error handling
        if (teamLogoElement) {
            const logoImg = new Image();
            
            // Set up error handling for logo
            logoImg.onerror = function() {

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
    }
    
    // Coach data for the chat interface
    const coaches = {
        barry: {
            name: 'Barry Bonds',
            title: 'Hitting Coach',
            avatar: 'barry-image',
            greeting: "Hi there! I'm Barry Bonds, your hitting coach. How can I help improve your technique today?"
        },
        ron: {
            name: 'Ron Washington',
            title: 'Fielding Coach',
            avatar: 'ron-image',
            greeting: "Hello! I'm Ron Washington, fielding coach. Ready to work on your defensive skills?"
        },
        greg: {
            name: 'Greg Maddux',
            title: 'Pitching Coach',
            avatar: 'greg-image',
            greeting: "Hey there! I'm Greg Maddux, pitching coach. Let's improve your pitching skills!"
        }
    };

    // Set up event listeners for navigation buttons if they exist
    if (prevBgButton && nextBgButton) {
        prevBgButton.addEventListener('click', function() {
            // Store previous index before changing
            previousStadiumIndex = currentStadiumIndex;
            
            // Update index
            currentStadiumIndex = (currentStadiumIndex - 1 + stadiums.length) % stadiums.length;

            
            // Update display
            updateStadiumDisplay();
        });
        
        nextBgButton.addEventListener('click', function() {
            // Store previous index before changing
            previousStadiumIndex = currentStadiumIndex;
            
            // Update index
            currentStadiumIndex = (currentStadiumIndex + 1) % stadiums.length;

            
            // Update display
            updateStadiumDisplay();
        });
    }
    
    // Initialize with the current stadium if elements exist
    if (heroElement && stadiums.length > 0) {
        updateStadiumContent(stadiums[currentStadiumIndex]);
        fadeInElements();
    }
});