// Background Switcher for Coach AI
// Handles stadium background images and team information

document.addEventListener('DOMContentLoaded', function() {
    // Only run this script on the coaches page
    if (!document.querySelector('.coach-grid')) {
        return;
    }
    // Stadium and team data for all 30 MLB teams
    const stadiums = [
        // AL East
        {
            name: "Fenway Park",
            location: "Boston",
            team: "Boston Red Sox",
            logo: "Images/TeamLogo/REDSOXlogo.png",
            image: "Images/TeamStadium/FenwayPark.jpg.webp"
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

    // Preload all stadium images to prevent black flashes
    function preloadImages() {
        const imageCache = [];
        stadiums.forEach(stadium => {
            const img = new Image();
            img.src = stadium.image;
            imageCache.push(img);
        });
        return imageCache;
    }
    
    // Preload images when page loads
    const preloadedImages = preloadImages();
    
    // Keep track of current stadium to avoid repeats
    let currentStadiumIndex = -1;
    let nextStadiumIndex = -1;
    
    // Function to set background image and stadium info
    function setBackground() {
        // Get a random stadium (but not the same as current)
        do {
            nextStadiumIndex = Math.floor(Math.random() * stadiums.length);
        } while (nextStadiumIndex === currentStadiumIndex);
        
        const randomStadium = stadiums[nextStadiumIndex];
        currentStadiumIndex = nextStadiumIndex;
        
        // Set the background image with blur fade transition
        const heroElement = document.querySelector('.background-container .hero');
        if (heroElement) {
            // Add the fading-out class for blur effect
            heroElement.classList.add('fading-out');
            heroElement.classList.remove('fading-in');
            
            // After blur transition, change the background
            setTimeout(() => {
                // Change the background image - use preloaded image
                heroElement.style.backgroundImage = `url('${randomStadium.image}')`;
                heroElement.style.backgroundSize = 'cover';
                heroElement.style.backgroundPosition = 'center';
                
                // Switch to fading-in class
                heroElement.classList.remove('fading-out');
                heroElement.classList.add('fading-in');
            }, 350); // 350ms for the blur fade out transition - matches CSS timing
        }
        
        // Update stadium info
        const stadiumNameElement = document.getElementById('stadium-name');
        const stadiumLocationElement = document.getElementById('stadium-location');
        const teamNameElement = document.getElementById('team-name');
        const teamLogoElement = document.getElementById('team-logo');
        
        if (stadiumNameElement) stadiumNameElement.textContent = randomStadium.name;
        if (stadiumLocationElement) stadiumLocationElement.textContent = randomStadium.location;
        if (teamNameElement) teamNameElement.textContent = randomStadium.team;
        if (teamLogoElement) {
            teamLogoElement.style.backgroundImage = `url('${randomStadium.logo}')`;
        }
    }
    
    // Function to initialize the page with blur effect and fade in smoothly
    function initializeWithBlurEffect() {
        // Get a random stadium
        nextStadiumIndex = Math.floor(Math.random() * stadiums.length);
        const randomStadium = stadiums[nextStadiumIndex];
        currentStadiumIndex = nextStadiumIndex;
        
        // Get the hero element in the background container
        const heroElement = document.querySelector('.background-container .hero');
        
        if (heroElement) {
            // Set initial background image
            heroElement.style.backgroundImage = `url('${randomStadium.image}')`;
            heroElement.style.backgroundSize = 'cover';
            heroElement.style.backgroundPosition = 'center';
            
            // Start with blur effect
            heroElement.classList.add('fading-out');
            
            // Update stadium info
            const stadiumNameElement = document.getElementById('stadium-name');
            const stadiumLocationElement = document.getElementById('stadium-location');
            const teamNameElement = document.getElementById('team-name');
            const teamLogoElement = document.getElementById('team-logo');
            
            if (stadiumNameElement) stadiumNameElement.textContent = randomStadium.name;
            if (stadiumLocationElement) stadiumLocationElement.textContent = randomStadium.location;
            if (teamNameElement) teamNameElement.textContent = randomStadium.team;
            if (teamLogoElement) {
                teamLogoElement.style.backgroundImage = `url('${randomStadium.logo}')`;
            }
            
            // After a short delay, start the fade-in transition
            setTimeout(() => {
                // Remove blur
                heroElement.classList.remove('fading-out');
                heroElement.classList.add('fading-in');
                
                // Complete the background transition
                setTimeout(() => {
                    heroElement.classList.remove('fading-in');
                }, 200);
            }, 250);
        }
    }
    
    // Initialize with blur effect first
    initializeWithBlurEffect();
    
    // Start background switching exactly 5 seconds after page loads
    setTimeout(() => {
        // Trigger first background change
        setBackground();
        
        // Set up the interval for subsequent changes - exactly 5 seconds between each
        setInterval(setBackground, 5000);
    }, 5000); // First transition exactly 5 seconds after initialization
});
