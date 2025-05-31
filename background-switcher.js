// Background Switcher for Coach Selection Page
// This script handles the automatic stadium background switching
// only for the coaches.html page

// Variable to track the background switching interval
let backgroundSwitchingInterval = null;

// Global variables for stadium tracking
let currentStadiumIndex = 0;
let previousStadiumIndex = 0;
let heroElement = null;

// Define stadiums globally so they're accessible to all functions
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
    }
];

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

// Function to update the stadium display with a smooth transition
function updateStadiumDisplay() {
    if (!heroElement) {
        heroElement = document.querySelector('.hero');
        if (!heroElement) {
            console.error('Hero element not found!');
            return;
        }
    }
    
    console.log('Updating stadium display to:', stadiums[currentStadiumIndex].name);
    
    // Get the current stadium
    const stadium = stadiums[currentStadiumIndex];
    
    // Fade out stadium info elements
    fadeOutElements();
    
    // 1. Add blur effect to background (fade out with blur)
    heroElement.classList.add('fading-out');
    heroElement.classList.remove('fading-in');
    
    // 2. Preload the next stadium image
    const img = new Image();
    img.src = stadium.image;
    
    // 3. Wait for the blur transition (300ms) before updating content
    setTimeout(() => {
        // Update the background image
        heroElement.style.backgroundImage = `url(${stadium.image})`;
        
        // Update stadium info
        updateStadiumInfo(stadium);
        
        // 4. After updating content, start the fade-in blur transition
        setTimeout(() => {
            heroElement.classList.remove('fading-out');
            heroElement.classList.add('fading-in');
            
            // Fade in stadium info elements
            fadeInElements();
            
            setTimeout(() => {
                heroElement.classList.remove('fading-in');
            }, 300); // Full blur transition time
            
        }, 50); // Short pause after content update
    }, 300); // Full blur transition time
}

// Function to update stadium info display
function updateStadiumInfo(stadium) {
    const stadiumNameElement = document.getElementById('stadium-name');
    const stadiumLocationElement = document.getElementById('stadium-location');
    const teamNameElement = document.getElementById('team-name');
    const teamLogoElement = document.getElementById('team-logo');
    
    if (stadiumNameElement) {
        stadiumNameElement.textContent = stadium.name;
    }
    
    if (stadiumLocationElement) {
        stadiumLocationElement.textContent = stadium.location;
    }
    
    if (teamNameElement) {
        teamNameElement.textContent = stadium.team;
    }
    
    if (teamLogoElement) {
        teamLogoElement.style.backgroundImage = `url(${stadium.logo})`;
    }
}

// Helper function to fade out stadium info elements
function fadeOutElements() {
    const stadiumNameElement = document.getElementById('stadium-name');
    const stadiumLocationElement = document.getElementById('stadium-location');
    const teamNameElement = document.getElementById('team-name');
    const teamLogoElement = document.getElementById('team-logo');
    const locationDivider = document.querySelector('.location-divider');
    
    if (stadiumNameElement) stadiumNameElement.style.opacity = '0';
    if (stadiumLocationElement) stadiumLocationElement.style.opacity = '0';
    if (teamNameElement) teamNameElement.style.opacity = '0';
    if (teamLogoElement) teamLogoElement.style.opacity = '0';
    if (locationDivider) locationDivider.style.opacity = '0';
    
    // Make sure coach content stays visible
    const coachContent = document.querySelector('.coach-content');
    if (coachContent) {
        coachContent.style.opacity = '1';
    }
}

// Helper function to fade in stadium info elements
function fadeInElements() {
    const stadiumNameElement = document.getElementById('stadium-name');
    const stadiumLocationElement = document.getElementById('stadium-location');
    const teamNameElement = document.getElementById('team-name');
    const teamLogoElement = document.getElementById('team-logo');
    const locationDivider = document.querySelector('.location-divider');
    
    if (stadiumNameElement) stadiumNameElement.style.opacity = '1';
    if (stadiumLocationElement) stadiumLocationElement.style.opacity = '1';
    if (teamNameElement) teamNameElement.style.opacity = '1';
    if (teamLogoElement) teamLogoElement.style.opacity = '1';
    if (locationDivider) locationDivider.style.opacity = '1';
    
    // Ensure coach content stays visible
    const coachContent = document.querySelector('.coach-content');
    if (coachContent) {
        coachContent.style.opacity = '1';
    }
    
    // Make sure coach grid and cards remain stable
    const coachGrid = document.querySelector('.coach-grid');
    if (coachGrid) {
        coachGrid.style.opacity = '1';
    }
}

// Initialize when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('Background switcher initialized');
    
    // Initialize hero element reference
    heroElement = document.querySelector('.hero');
    
    if (heroElement) {
        // Initialize with a random stadium
        currentStadiumIndex = Math.floor(Math.random() * stadiums.length);
        previousStadiumIndex = currentStadiumIndex;
        
        // Set the initial background image
        const currentStadium = stadiums[currentStadiumIndex];
        heroElement.style.backgroundImage = `url(${currentStadium.image})`;
        
        // Set the initial stadium info
        updateStadiumInfo(currentStadium);
        
        // Start background switching
        console.log('Starting automatic background switching');
        startBackgroundSwitching();
    } else {
        console.error('Hero element not found - background switching disabled');
    }
});
