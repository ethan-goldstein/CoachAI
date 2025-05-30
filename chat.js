// Chat Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Get selected coach from session storage
    const selectedCoach = sessionStorage.getItem('selectedCoach') || 'mike';
    
    // Coach data
    const coaches = {
        mike: {
            name: 'Mike Johnson',
            title: 'Pitching & Mechanics Specialist',
            avatar: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
        },
        sarah: {
            name: 'Sarah Rodriguez',
            title: 'Batting Coach & former All-Star',
            avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
        },
        david: {
            name: 'David Washington',
            title: 'Fielding Expert & Gold Glove winner',
            avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
        },
        lisa: {
            name: 'Lisa Chen',
            title: 'Strategy Specialist & Championship-winning Head Coach',
            avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
        }
    };
    
    // Update coach info in the chat header
    const coach = coaches[selectedCoach];
    document.getElementById('selected-coach-name').textContent = coach.name;
    document.getElementById('selected-coach-title').textContent = coach.title;
    document.getElementById('selected-coach-avatar').style.backgroundImage = `url(${coach.avatar})`;
    
    // Handle sending messages
    const chatMessages = document.getElementById('chat-messages');
    const userInput = document.getElementById('user-input');
    const sendBtn = document.getElementById('send-btn');
    
    function sendMessage() {
        const message = userInput.value.trim();
        if (message === '') return;
        
        // Add user message to chat
        const userMessageElement = document.createElement('div');
        userMessageElement.classList.add('message', 'user-message');
        userMessageElement.textContent = message;
        chatMessages.appendChild(userMessageElement);
        
        // Clear input
        userInput.value = '';
        
        // Scroll to bottom
        chatMessages.scrollTop = chatMessages.scrollHeight;
        
        // Here you would normally call your AI API
        // For now, we'll just show a placeholder response
        setTimeout(() => {
            // This is where you would integrate with your ChatGPT API
            const responseElement = document.createElement('div');
            responseElement.classList.add('message', 'coach-message');
            responseElement.textContent = `As your ${coach.title}, I'd recommend focusing on your technique. Let me know if you have any specific questions!`;
            chatMessages.appendChild(responseElement);
            
            // Scroll to bottom again
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }, 1000);
    }
    
    // Send message on button click
    sendBtn.addEventListener('click', sendMessage);
    
    // Send message on Enter key (but allow Shift+Enter for new lines)
    userInput.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    });
});
