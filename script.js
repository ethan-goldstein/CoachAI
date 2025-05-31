// Coach AI Application JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Simplified stadium array with just 3 stadiums for testing
    const stadiums = [
        {
            team: 'Boston Red Sox',
            name: 'Fenway Park',
            location: 'Boston',
            image: 'FenwayPark.jpg.webp',
            logo: 'REDSOXlogo.png'
        },
        {
            team: 'Chicago Cubs',
            name: 'Wrigley Field',
            location: 'Chicago',
            image: 'WrigleyField.jpeg',
            logo: 'CubsLogo.png'
        },
        {
            team: 'New York Yankees',
            name: 'Yankee Stadium',
            location: 'New York',
            image: 'YankeeStadium.jpg',
            logo: 'YanksLogo.png'
        },
        {
            team: 'Chicago White Sox',
            name: 'Guaranteed Rate Field',
            location: 'Chicago',
            image: 'WhiteSoxStadium.webp',
            logo: 'WhiteSoxLogo.png'
        },
        {
            team: 'Cincinnati Reds',
            name: 'Great American Ball Park',
            location: 'Cincinnati',
            image: 'RedsStadium.jpg',
            logo: 'RedsLogo.png'
        },
        {
            team: 'Cleveland Guardians',
            name: 'Progressive Field',
            location: 'Cleveland',
            image: 'GuardiansField.jpg',
            logo: 'GuardiansLogo.webp'
        },
        {
            team: 'Colorado Rockies',
            name: 'Coors Field',
            location: 'Denver',
            image: 'RockiesField.jpg',
            logo: 'RockiesLogo.png'
        },
        {
            team: 'Detroit Tigers',
            name: 'Comerica Park',
            location: 'Detroit',
            image: 'DetroitField.jpg',
            logo: 'DetroitLogo.png'
        },
        {
            team: 'Houston Astros',
            name: 'Minute Maid Park',
            location: 'Houston',
            image: 'AstrosField.jpeg',
            logo: 'AstrosLogo.png'
        },
        {
            team: 'Kansas City Royals',
            name: 'Kauffman Stadium',
            location: 'Kansas City',
            image: 'KansasCityField.jpg',
            logo: 'RoyalsLogo.png'
        },
        {
            team: 'Los Angeles Angels',
            name: 'Angel Stadium',
            location: 'Anaheim',
            image: 'AnglesStadium.jpg',
            logo: 'AngelsLogo.png'
        },
        {
            team: 'Los Angeles Dodgers',
            name: 'Dodger Stadium',
            location: 'Los Angeles',
            image: 'DodgerStadium.jpg',
            logo: 'DodgersLogo.png'
        },
        {
            team: 'Miami Marlins',
            name: 'loanDepot park',
            location: 'Miami',
            image: 'MarlinsField.jpg',
            logo: 'MarlinsLogo.png'
        },
        {
            team: 'Milwaukee Brewers',
            name: 'American Family Field',
            location: 'Milwaukee',
            image: 'BrewersField.jpg',
            logo: 'placeholder.jpg'
        },
        {
            team: 'Minnesota Twins',
            name: 'Target Field',
            location: 'Minneapolis',
            image: 'TwinsStadium.jpg',
            logo: 'Twinslogo.png'
        },
        {
            team: 'New York Mets',
            name: 'Citi Field',
            location: 'New York',
            image: 'CitiField.jpeg',
            logo: 'MetsLogo.png'
        },
        {
            team: 'New York Yankees',
            name: 'Yankee Stadium',
            location: 'New York',
            image: 'YankeeStadium.jpg',
            logo: 'YanksLogo.png'
        },
        {
            team: 'Philadelphia Phillies',
            name: 'Citizens Bank Park',
            location: 'Philadelphia',
            image: 'PhilliesField.jpeg',
            logo: 'PhilliesLogo.png'
        },
        {
            team: 'Pittsburgh Pirates',
            name: 'PNC Park',
            location: 'Pittsburgh',
            image: 'PNCPark.jpg',
            logo: 'PiratesLogo.png'
        },
        {
            team: 'San Diego Padres',
            name: 'Petco Park',
            location: 'San Diego',
            image: 'PetcoPark.jpg',
            logo: 'PadresLogo.svg'
        },
        {
            team: 'San Francisco Giants',
            name: 'Oracle Park',
            location: 'San Francisco',
            image: 'OracleParkjpg',
            logo: 'GiantsLogo.png'
        },
        {
            team: 'Seattle Mariners',
            name: 'T-Mobile Park',
            location: 'Seattle',
            image: 'T-MobilePark.jpg',
            logo: 'MarinersLogo.png'
        },
        {
            team: 'St. Louis Cardinals',
            name: 'Busch Stadium',
            location: 'St. Louis',
            image: 'CardinalsStadium.jpg',
            logo: 'CardinalsLogo.png'
        },
        {
            team: 'Tampa Bay Rays',
            name: 'Tropicana Field',
            location: 'St. Petersburg',
            image: 'TropicanaField.jpeg',
            logo: 'RaysLogo.png'
        },
        {
            team: 'Texas Rangers',
            name: 'Globe Life Field',
            location: 'Arlington',
            image: 'RangersStadium.jpg',
            logo: 'RangersLogo.png'
        },
        {
            team: 'Toronto Blue Jays',
            name: 'Rogers Centre',
            location: 'Toronto',
            image: 'BlueJaysField.jpg',
            logo: 'BlueJaysLogo.png'
        },
        {
            team: 'Washington Nationals',
            name: 'Nationals Park',
            location: 'Washington, D.C.',
            image: 'NatsPark.jpg',
            logo: 'NatsLogo.png'
        }
    ];
    
    // Get DOM elements
    const heroElement = document.querySelector('.hero');
    const stadiumNameElement = document.getElementById('stadium-name');
    const stadiumLocationElement = document.getElementById('stadium-location');
    const teamLogoElement = document.getElementById('team-logo');
    const prevBgBtn = document.getElementById('prev-bg');
    const nextBgBtn = document.getElementById('next-bg');
    const contentElement = document.querySelector('.content');
    
    // Initialize with a random stadium index
    let currentStadiumIndex = Math.floor(Math.random() * stadiums.length);
    console.log('Starting with stadium:', currentStadiumIndex, stadiums[currentStadiumIndex].name);
    
    // Initialize with first stadium
    updateStadiumDisplay();
    
    // Add event listeners for navigation buttons
    prevBgBtn.addEventListener('click', function() {
        console.log('Previous button clicked');
        currentStadiumIndex = (currentStadiumIndex - 1 + stadiums.length) % stadiums.length;
        console.log('New stadium index:', currentStadiumIndex, 'Stadium:', stadiums[currentStadiumIndex].name);
        updateStadiumDisplay();
    });
    
    nextBgBtn.addEventListener('click', function() {
        console.log('Next button clicked');
        currentStadiumIndex = (currentStadiumIndex + 1) % stadiums.length;
        console.log('New stadium index:', currentStadiumIndex, 'Stadium:', stadiums[currentStadiumIndex].name);
        updateStadiumDisplay();
    });
    
    // No upload event listeners needed
    
    // This function is no longer needed since we're using the logo field directly
    // Kept for reference
    
    // Function to update the stadium display
    function updateStadiumDisplay() {
        console.log('Updating stadium display to:', stadiums[currentStadiumIndex].name);
        
        // Fade out elements
        fadeOutElements();
        
        // After a short delay, update content
        setTimeout(() => {
            const stadium = stadiums[currentStadiumIndex];
            updateStadiumContent(stadium);
            
            // Fade in elements after update
            setTimeout(() => {
                fadeInElements();
            }, 400);
        }, 400);
    }
    
    // Helper function to fade out elements
    function fadeOutElements() {
        contentElement.style.opacity = '0.5';
        stadiumNameElement.style.opacity = '0';
        stadiumLocationElement.style.opacity = '0';
        document.querySelector('.location-divider').style.opacity = '0';
        teamLogoElement.style.opacity = '0';
    }
    
    // Helper function to update stadium content
    function updateStadiumContent(stadium) {
        console.log('Loading stadium:', stadium.name, 'with image:', stadium.image);
        
        // Update background image
        heroElement.style.backgroundImage = `url(${stadium.image})`;
        
        // Update stadium info text
        stadiumNameElement.textContent = stadium.name;
        stadiumLocationElement.textContent = stadium.location;
        
        // Update team logo
        teamLogoElement.style.backgroundImage = `url(${stadium.logo})`;
        teamLogoElement.style.backgroundColor = 'transparent';
        teamLogoElement.style.border = 'none';
    }
    
    // Helper function to fade in elements
    function fadeInElements() {
        stadiumNameElement.style.opacity = '1';
        stadiumLocationElement.style.opacity = '1';
        document.querySelector('.location-divider').style.opacity = '0.5';
        teamLogoElement.style.opacity = '1';
        contentElement.style.opacity = '1';
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
