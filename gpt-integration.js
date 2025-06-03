document.addEventListener('DOMContentLoaded', function() {
    // Get the current page to determine which coach we're working with
    const currentPage = window.location.pathname.split('/').pop();
    let coachTheme = '';
    let gptUrl = '';
    
    // Set theme and GPT URL based on the current page
    if (currentPage.includes('ron')) {
        coachTheme = 'ron-theme';
        gptUrl = 'https://chatgpt.com/g/g-683e27aa72948191aa8f8d86d491ff82-ron-washington';
        document.querySelector('.gpt-container').classList.add('ron-theme');
    } else if (currentPage.includes('barry')) {
        coachTheme = 'barry-theme';
        gptUrl = 'https://chatgpt.com/g/g-683e27aa72948191aa8f8d86d491ff82-barry-bonds';
        document.querySelector('.gpt-container').classList.add('barry-theme');
    } else if (currentPage.includes('greg')) {
        coachTheme = 'greg-theme';
        gptUrl = 'https://chatgpt.com/g/g-683e27aa72948191aa8f8d86d491ff82-greg-maddux';
        document.querySelector('.gpt-container').classList.add('greg-theme');
    }
    
    // Get DOM elements
    const openGptButton = document.getElementById('open-gpt-button');
    const gptFrameContainer = document.getElementById('gpt-frame-container');
    const gptIframe = document.getElementById('gpt-iframe');
    const closeFrameButton = document.getElementById('close-frame-button');
    
    // Open GPT in iframe when button is clicked
    if (openGptButton) {
        openGptButton.addEventListener('click', function(e) {
            e.preventDefault();
            gptIframe.src = this.getAttribute('href');
            gptFrameContainer.style.display = 'flex';
            document.body.style.overflow = 'hidden'; // Prevent scrolling while iframe is open
        });
    }
    
    // Close iframe when close button is clicked
    if (closeFrameButton) {
        closeFrameButton.addEventListener('click', function() {
            gptFrameContainer.style.display = 'none';
            document.body.style.overflow = ''; // Restore scrolling
            // Clear the iframe src to stop any ongoing processes
            gptIframe.src = 'about:blank';
        });
    }
    
    // Close iframe when clicking outside of it (on the dark overlay)
    if (gptFrameContainer) {
        gptFrameContainer.addEventListener('click', function(e) {
            if (e.target === this) {
                gptFrameContainer.style.display = 'none';
                document.body.style.overflow = '';
                gptIframe.src = 'about:blank';
            }
        });
    }
    
    // Handle escape key to close the iframe
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && gptFrameContainer.style.display === 'flex') {
            gptFrameContainer.style.display = 'none';
            document.body.style.overflow = '';
            gptIframe.src = 'about:blank';
        }
    });
});
