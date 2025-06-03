// Coach AI Chat Interface - Modern Implementation

document.addEventListener('DOMContentLoaded', function() {
    // Coach system prompts for each coach
    const coachPrompts = {
        barry: "You are Barry Bonds, the greatest hitter of all time with 762 home runs. You're known for your incredible batting eye, power, and technique. Speak with confidence and authority. Use baseball terminology when giving advice about hitting. Your goal is to help players improve their batting skills with specific, actionable advice. Occasionally mention your achievements or experiences when relevant, but keep the focus on helping the player improve.",
        
        ron: "You are Ron Washington, a legendary MLB fielding coach known for your expertise in defensive mechanics and fundamentals. You have decades of experience coaching Gold Glove winners and are passionate about proper fielding technique. Speak with confidence, clarity, and coaching wisdom. Use baseball terminology and suggest specific fielding drills when giving advice. Your communication style is straightforward, sometimes colorful, and always focused on the fundamentals. Your goal is to help players improve their defensive skills with specific, actionable advice.",
        
        greg: "You are Greg Maddux, 4-time consecutive Cy Young winner and Hall of Fame pitcher known for your pinpoint control and pitching intelligence rather than overwhelming velocity. You're nicknamed 'The Professor' for your analytical approach to pitching and ability to outthink batters. Speak with calm confidence and deep knowledge. Use pitching terminology and concepts like sequencing, tunneling, and pitch movement in your advice. Your goal is to help pitchers develop their craft through precision, strategy, and understanding batter psychology rather than just throwing harder."
    };
    
    // Get current coach from the page URL
    const currentPage = window.location.pathname.split('/').pop();
    let currentCoach = 'ron'; // Default to Ron Washington
    
    if (currentPage.includes('barry')) {
        currentCoach = 'barry';
    } else if (currentPage.includes('greg')) {
        currentCoach = 'greg';
    }
    
    // Elements
    const chatMessages = document.getElementById('chat-messages');
    const userInput = document.getElementById('user-input');
    const sendButton = document.getElementById('send-button');
    
    // Chat history for context
    let chatHistory = [];
    
    // Initialize with the system prompt
    chatHistory.push({
        role: 'system',
        content: coachPrompts[currentCoach]
    });
    
    // Add the welcome message to history
    const welcomeMessage = chatMessages.querySelector('.coach-message .message-content p').textContent;
    chatHistory.push({
        role: 'assistant',
        content: welcomeMessage
    });
    
    // Function to add a message to the UI
    function addMessageToUI(content, isUser = false) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message');
        messageDiv.classList.add(isUser ? 'user-message' : 'coach-message');
        
        const avatarDiv = document.createElement('div');
        avatarDiv.classList.add('message-avatar');
        
        if (isUser) {
            const userAvatarDiv = document.createElement('div');
            userAvatarDiv.classList.add('user-avatar');
            userAvatarDiv.textContent = 'Y';
            avatarDiv.appendChild(userAvatarDiv);
        } else {
            const coachAvatarDiv = document.createElement('div');
            coachAvatarDiv.classList.add('coach-avatar');
            coachAvatarDiv.id = `${currentCoach}-avatar`;
            avatarDiv.appendChild(coachAvatarDiv);
        }
        
        const contentDiv = document.createElement('div');
        contentDiv.classList.add('message-content');
        
        const paragraph = document.createElement('p');
        paragraph.textContent = content;
        contentDiv.appendChild(paragraph);
        
        messageDiv.appendChild(avatarDiv);
        messageDiv.appendChild(contentDiv);
        
        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
    
    // Function to show typing indicator
    function showTypingIndicator() {
        const typingDiv = document.createElement('div');
        typingDiv.classList.add('message', 'coach-message', 'typing-indicator-container');
        typingDiv.id = 'typing-indicator';
        
        const avatarDiv = document.createElement('div');
        avatarDiv.classList.add('message-avatar');
        
        const coachAvatarDiv = document.createElement('div');
        coachAvatarDiv.classList.add('coach-avatar');
        coachAvatarDiv.id = `${currentCoach}-avatar`;
        avatarDiv.appendChild(coachAvatarDiv);
        
        const indicatorDiv = document.createElement('div');
        indicatorDiv.classList.add('typing-indicator');
        
        for (let i = 0; i < 3; i++) {
            const dot = document.createElement('div');
            dot.classList.add('typing-dot');
            indicatorDiv.appendChild(dot);
        }
        
        typingDiv.appendChild(avatarDiv);
        typingDiv.appendChild(indicatorDiv);
        
        chatMessages.appendChild(typingDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
    
    // Function to remove typing indicator
    function removeTypingIndicator() {
        const indicator = document.getElementById('typing-indicator');
        if (indicator) {
            indicator.remove();
        }
    }
    
    // Function to call OpenAI API
    async function callOpenAI(messages) {
        // This is where you would make the actual API call
        // For now, we'll simulate a response
        
        // In production, you would use:
        /*
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${YOUR_API_KEY}`
            },
            body: JSON.stringify({
                model: 'gpt-4',
                messages: messages,
                temperature: 0.7,
                max_tokens: 500
            })
        });
        
        const data = await response.json();
        return data.choices[0].message.content;
        */
        
        // Simulate API delay
        return new Promise((resolve) => {
            const coachResponses = {
                barry: [
                    "When I was playing, I focused on seeing the ball early. That's the key to hitting - tracking the ball from the pitcher's hand all the way to your bat. Try keeping your head still and let your eyes do the work.",
                    "Power comes from your legs and core, not just your arms. I'd recommend working on your hip rotation and weight transfer. That's where the real power is generated.",
                    "Patience at the plate is what separates good hitters from great ones. I walked over 2,500 times in my career because I knew which pitches I could drive and which ones to lay off. Study the pitcher and know your strike zone."
                ],
                ron: [
                    "The key to good fielding is getting in front of the ball. I always tell my players: 'It's your glove AND your body.' Position yourself properly and the play becomes routine.",
                    "Let's work on your footwork. Good fielders have quick, efficient movements. Try the ladder drill I used with my Gold Glovers - it'll improve your lateral quickness and precision.",
                    "Remember, the most important play is the one right in front of you. Don't worry about making the spectacular play - make the routine play every single time. Consistency wins championships."
                ],
                greg: [
                    "Velocity isn't everything. I won four Cy Youngs without a blazing fastball because I focused on location and movement. Work on hitting your spots consistently before worrying about adding velocity.",
                    "Study your opponents. Every batter has weaknesses. I kept mental notes on every hitter I faced. Notice their stance, how they react to different pitches, and exploit those patterns.",
                    "Changing speeds is crucial. The difference between a good pitcher and a great one is the ability to disrupt timing. Even a perfectly located fastball can be hit if the batter is timing it well."
                ]
            };
            
            // Get the user's last message
            const userMessage = messages.find(m => m.role === 'user').content;
            
            // Choose a response based on the coach and user input
            let response;
            const responses = coachResponses[currentCoach];
            
            if (userMessage.toLowerCase().includes('drill') || userMessage.toLowerCase().includes('practice')) {
                response = responses[1];
            } else if (userMessage.toLowerCase().includes('advice') || userMessage.toLowerCase().includes('tip')) {
                response = responses[2];
            } else {
                response = responses[0];
            }
            
            // Simulate API delay
            setTimeout(() => {
                resolve(response);
            }, 1500);
        });
    }
    
    // Send message function
    async function sendMessage() {
        const userMessage = userInput.value.trim();
        if (!userMessage) return;
        
        // Add user message to UI
        addMessageToUI(userMessage, true);
        
        // Add to chat history
        chatHistory.push({
            role: 'user',
            content: userMessage
        });
        
        // Clear input
        userInput.value = '';
        
        // Show typing indicator
        showTypingIndicator();
        
        try {
            // Call OpenAI API
            const response = await callOpenAI(chatHistory);
            
            // Remove typing indicator
            removeTypingIndicator();
            
            // Add response to UI
            addMessageToUI(response, false);
            
            // Add to chat history
            chatHistory.push({
                role: 'assistant',
                content: response
            });
            
            // Limit context window to last 10 messages (plus system prompt)
            if (chatHistory.length > 11) {
                chatHistory = [
                    chatHistory[0], // Keep system prompt
                    ...chatHistory.slice(chatHistory.length - 10)
                ];
            }
        } catch (error) {
            console.error('Error calling OpenAI API:', error);
            removeTypingIndicator();
            addMessageToUI('Sorry, I encountered an error. Please try again.', false);
        }
    }
    
    // Event listeners
    sendButton.addEventListener('click', sendMessage);
    
    userInput.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    });
    
    // Auto-resize textarea as user types
    userInput.addEventListener('input', function() {
        this.style.height = 'auto';
        this.style.height = (this.scrollHeight) + 'px';
    });
});
