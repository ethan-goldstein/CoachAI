// Background Switcher for Coach Selection Page
// This script handles the automatic stadium background switching

// Variable to track the background switching interval
let backgroundSwitchingInterval = null;

// Global variables for stadium tracking
let currentStadiumIndex = 0;
let previousStadiumIndex = 0;
let heroElement = null;

// Define stadiums globally so they're accessible to all functions
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
