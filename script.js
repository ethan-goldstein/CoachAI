// Coach AI Application JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Store team logos
    const teamLogos = {};
    
    // MLB Stadium Backgrounds with placeholder images and team logos
    const stadiums = [
        {
            team: 'Arizona Diamondbacks',
            name: 'Chase Field',
            location: 'Phoenix',
            image: 'placeholder.jpg', // Replace with your stadium image path
            logo: 'placeholder.jpg'   // Replace with your team logo image path
        },
        {
            team: 'Atlanta Braves',
            name: 'Truist Park',
            location: 'Atlanta',
            image: 'placeholder.jpg', // Replace with your stadium image path
            logo: 'placeholder.jpg'   // Replace with your team logo image path
        },
        {
            team: 'Baltimore Orioles',
            name: 'Oriole Park at Camden Yards',
            location: 'Baltimore',
            image: 'placeholder.jpg', // Replace with your stadium image path
            logo: 'placeholder.jpg'   // Replace with your team logo image path
        },
        {
            team: 'Boston Red Sox',
            name: 'Fenway Park',
            location: 'Boston',
            image: 'Images/TeamStadium/fenwaypark.jpg.webp', // Stadium image path
            logo: 'Images/TeamLogo/REDSOXlogo.png'   // Team logo image path
        },
        {
            team: 'Chicago Cubs',
            name: 'Wrigley Field',
            location: 'Chicago',
            image: 'placeholder.jpg', // Replace with your stadium image path
            logo: 'placeholder.jpg'   // Replace with your team logo image path
        },
        {
            team: 'Chicago White Sox',
            name: 'Guaranteed Rate Field',
            location: 'Chicago',
            image: 'placeholder.jpg', // Replace with your stadium image path
            logo: 'placeholder.jpg'   // Replace with your team logo image path
        },
        {
            team: 'Cincinnati Reds',
            name: 'Great American Ball Park',
            location: 'Cincinnati',
            image: 'placeholder.jpg', // Replace with your stadium image path
            logo: 'placeholder.jpg'   // Replace with your team logo image path
        },
        {
            team: 'Cleveland Guardians',
            name: 'Progressive Field',
            location: 'Cleveland',
            image: 'placeholder.jpg', // Replace with your stadium image path
            logo: 'placeholder.jpg'   // Replace with your team logo image path
        },
        {
            team: 'Colorado Rockies',
            name: 'Coors Field',
            location: 'Denver',
            image: 'placeholder.jpg', // Replace with your stadium image path
            logo: 'placeholder.jpg'   // Replace with your team logo image path
        },
        {
            team: 'Detroit Tigers',
            name: 'Comerica Park',
            location: 'Detroit',
            image: 'placeholder.jpg', // Replace with your stadium image path
            logo: 'placeholder.jpg'   // Replace with your team logo image path
        },
        {
            team: 'Houston Astros',
            name: 'Minute Maid Park',
            location: 'Houston',
            image: 'placeholder.jpg', // Replace with your stadium image path
            logo: 'placeholder.jpg'   // Replace with your team logo image path
        },
        {
            team: 'Kansas City Royals',
            name: 'Kauffman Stadium',
            location: 'Kansas City',
            image: 'placeholder.jpg', // Replace with your stadium image path
            logo: 'placeholder.jpg'   // Replace with your team logo image path
        },
        {
            team: 'Los Angeles Angels',
            name: 'Angel Stadium',
            location: 'Anaheim',
            image: 'placeholder.jpg', // Replace with your stadium image path
            logo: 'placeholder.jpg'   // Replace with your team logo image path
        },
        {
            team: 'Los Angeles Dodgers',
            name: 'Dodger Stadium',
            location: 'Los Angeles',
            image: 'placeholder.jpg', // Replace with your stadium image path
            logo: 'placeholder.jpg'   // Replace with your team logo image path
        },
        {
            team: 'Miami Marlins',
            name: 'loanDepot park',
            location: 'Miami',
            image: 'placeholder.jpg', // Replace with your stadium image path
            logo: 'placeholder.jpg'   // Replace with your team logo image path
        },
        {
            team: 'Milwaukee Brewers',
            name: 'American Family Field',
            location: 'Milwaukee',
            image: 'placeholder.jpg', // Replace with your stadium image path
            logo: 'placeholder.jpg'   // Replace with your team logo image path
        },
        {
            team: 'Minnesota Twins',
            name: 'Target Field',
            location: 'Minneapolis',
            image: 'placeholder.jpg', // Replace with your stadium image path
            logo: 'placeholder.jpg'   // Replace with your team logo image path
        },
        {
            team: 'New York Mets',
            name: 'Citi Field',
            location: 'New York',
            image: 'placeholder.jpg', // Replace with your stadium image path
            logo: 'placeholder.jpg'   // Replace with your team logo image path
        },
        {
            team: 'New York Yankees',
            name: 'Yankee Stadium',
            location: 'New York',
            image: 'placeholder.jpg', // Replace with your stadium image path
            logo: 'placeholder.jpg'   // Replace with your team logo image path
        },
        {
            team: 'Philadelphia Phillies',
            name: 'Citizens Bank Park',
            location: 'Philadelphia',
            image: 'placeholder.jpg', // Replace with your stadium image path
            logo: 'placeholder.jpg'   // Replace with your team logo image path
        },
        {
            team: 'Pittsburgh Pirates',
            name: 'PNC Park',
            location: 'Pittsburgh',
            image: 'placeholder.jpg', // Replace with your stadium image path
            logo: 'placeholder.jpg'   // Replace with your team logo image path
        },
        {
            team: 'San Diego Padres',
            name: 'Petco Park',
            location: 'San Diego',
            image: 'placeholder.jpg', // Replace with your stadium image path
            logo: 'placeholder.jpg'   // Replace with your team logo image path
        },
        {
            team: 'San Francisco Giants',
            name: 'Oracle Park',
            location: 'San Francisco',
            image: 'placeholder.jpg', // Replace with your stadium image path
            logo: 'placeholder.jpg'   // Replace with your team logo image path
        },
        {
            team: 'Seattle Mariners',
            name: 'T-Mobile Park',
            location: 'Seattle',
            image: 'placeholder.jpg', // Replace with your stadium image path
            logo: 'placeholder.jpg'   // Replace with your team logo image path
        },
        {
            team: 'St. Louis Cardinals',
            name: 'Busch Stadium',
            location: 'St. Louis',
            image: 'placeholder.jpg', // Replace with your stadium image path
            logo: 'placeholder.jpg'   // Replace with your team logo image path
        },
        {
            team: 'Tampa Bay Rays',
            name: 'Tropicana Field',
            location: 'St. Petersburg',
            image: 'placeholder.jpg', // Replace with your stadium image path
            logo: 'placeholder.jpg'   // Replace with your team logo image path
        },
        {
            team: 'Texas Rangers',
            name: 'Globe Life Field',
            location: 'Arlington',
            image: 'placeholder.jpg', // Replace with your stadium image path
            logo: 'placeholder.jpg'   // Replace with your team logo image path
        },
        {
            team: 'Toronto Blue Jays',
            name: 'Rogers Centre',
            location: 'Toronto',
            image: 'placeholder.jpg', // Replace with your stadium image path
            logo: 'placeholder.jpg'   // Replace with your team logo image path
        },
        {
            team: 'Washington Nationals',
            name: 'Nationals Park',
            location: 'Washington, D.C.',
        }
    ];
    
    // Initialize variables
    const heroElement = document.getElementById('hero-background');
    const stadiumNameElement = document.getElementById('stadium-name');
    const stadiumLocationElement = document.getElementById('stadium-location');
    const teamLogoElement = document.getElementById('team-logo');
    const prevBgBtn = document.getElementById('prev-stadium');
    const nextBgBtn = document.getElementById('next-stadium');
    const contentElement = document.querySelector('.content');
    
    // Filter to only include stadiums with actual images (not placeholders)
    const validStadiums = stadiums.filter(stadium => 
        stadium.image && stadium.image !== 'placeholder.jpg' && 
        stadium.logo && stadium.logo !== 'placeholder.jpg'
    );
    
    // Initialize with a random stadium index
    let currentStadiumIndex = 0;
    
    if (validStadiums.length > 0) {
        // Choose a random valid stadium
        const randomValidStadium = validStadiums[Math.floor(Math.random() * validStadiums.length)];
        // Find its index in the original stadiums array
        currentStadiumIndex = stadiums.findIndex(stadium => stadium.team === randomValidStadium.team);
    }
    
    // Create default placeholder background
    heroElement.style.backgroundColor = '#333';
    
    // Initialize with first stadium
    updateStadiumDisplay();
    
    // Stadium navigation controls
    prevBgBtn.addEventListener('click', function() {
        currentStadiumIndex = (currentStadiumIndex - 1 + stadiums.length) % stadiums.length;
        updateStadiumDisplay();
    });
    
    nextBgBtn.addEventListener('click', function() {
        currentStadiumIndex = (currentStadiumIndex + 1) % stadiums.length;
        updateStadiumDisplay();
    });
    
    // No custom stadium upload needed
    
    // No upload event listeners needed
    
    // This function is no longer needed since we're using the logo field directly
    // Kept for reference
    
    function updateStadiumDisplay() {
        // Add transition class for blur effect
        document.body.classList.add('transitioning');
        contentElement.style.opacity = '0.5';
        
        // Fade out the current stadium info
        stadiumNameElement.style.opacity = '0';
        stadiumLocationElement.style.opacity = '0';
        document.querySelector('.location-divider').style.opacity = '0';
        teamLogoElement.style.opacity = '0';
        
        setTimeout(() => {
            const stadium = stadiums[currentStadiumIndex];
            
            // If using a placeholder, just use the background color instead of an image
            if (stadium.image === 'placeholder.jpg') {
                heroElement.style.backgroundImage = 'none';
            } else {
                heroElement.style.backgroundImage = `url(${stadium.image})`;
            }
            
            // Update stadium info
            stadiumNameElement.textContent = stadium.name;
            stadiumLocationElement.textContent = stadium.location;
            
            // Update team logo
            updateTeamLogo();
            
            // Fade in the new stadium info
            setTimeout(() => {
                stadiumNameElement.style.opacity = '1';
                stadiumLocationElement.style.opacity = '1';
                document.querySelector('.location-divider').style.opacity = '0.5';
                teamLogoElement.style.opacity = '1';
                contentElement.style.opacity = '1';
                document.body.classList.remove('transitioning');
            }, 400);
            
        }, 400);
    }
    
    function updateTeamLogo() {
        const stadium = stadiums[currentStadiumIndex];
        
        // Check if we have a logo for this stadium
        if (stadium.logo && stadium.logo !== 'placeholder.jpg') {
            // Set the background image
            teamLogoElement.style.backgroundImage = `url(${stadium.logo})`;
            teamLogoElement.style.backgroundColor = 'transparent';
            teamLogoElement.style.border = 'none';
        } else {
            // Reset to default placeholder
            teamLogoElement.style.backgroundImage = 'none';
            teamLogoElement.style.backgroundColor = 'rgba(255, 255, 255, 0.15)';
            teamLogoElement.style.border = '2px solid rgba(255, 255, 255, 0.5)';
        }
    }
    
    // Coach data
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
