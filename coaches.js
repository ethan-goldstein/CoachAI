// Coach Selection JavaScript

document.addEventListener('DOMContentLoaded', function() {
    const coachCards = document.querySelectorAll('.coach-card');
    
    // Add click event to each coach card
    coachCards.forEach(card => {
        const chatBtn = card.querySelector('.chat-btn');
        
        chatBtn.addEventListener('click', function() {
            const coachId = card.getAttribute('data-coach');
            // Store selected coach in session storage
            sessionStorage.setItem('selectedCoach', coachId);
            // Redirect to chat page
            window.location.href = 'chat.html';
        });
    });
});
