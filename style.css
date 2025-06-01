/* Global Styles */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    margin: 0;
    padding: 0;
    font-family: 'Montserrat', sans-serif;
    color: #fff;
    background-color: #000;
    line-height: 1.6;
    overflow-x: hidden;
    overflow: hidden; /* Prevent scrollbars during transitions */
}

/* Black outline style for specific elements */
#stadium-name, #stadium-location, .location-divider, .tagline, p {
    text-shadow: 
       -1.5px -1.5px 0 #000,  
        1.5px -1.5px 0 #000,
       -1.5px  1.5px 0 #000,
        1.5px  1.5px 0 #000,
        0px 2px 4px rgba(0,0,0,0.8);
    letter-spacing: 4px;
}

a {
    text-decoration: none;
    color: #fff;
    transition: all 0.3s ease;
}

a:hover {
    opacity: 0.8;
}

/* Hero Section */
.hero {
    height: 100vh;
    width: 100vw; /* Use viewport width */
    background-size: cover;
    background-position: center;
    position: absolute; /* Use absolute instead of fixed */
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    overflow: hidden;
    transition: filter 0.4s ease-in-out, opacity 0.5s ease;
    background-color: #000;
    filter: none;
    will-change: filter, transform, opacity; /* Optimize for GPU acceleration */
    margin: 0; /* Remove margins */
    padding: 0; /* Remove padding */
    transform: translateZ(0); /* Force GPU rendering */
}

.hero.fading-out {
    filter: blur(15px) !important;
    transition: filter 0.35s ease-in-out !important;
}

.hero.fading-in {
    filter: blur(0px) !important;
    transition: filter 0.35s ease-in-out !important;
}

/* Separate layers for background and content */
.background-container {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
}

.content-container {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 10;
    pointer-events: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

/* Make sure all content is above the background and not affected by blur */
.coach-content, .coach-grid, .top-nav, .stadium-info {
    filter: none !important;
}

.hero > * {
    position: relative;
    z-index: 2;
}

.hero-footer {
    position: absolute;
    bottom: 10px;
    left: 0;
    width: 100%;
    text-align: center;
    color: rgba(255, 255, 255, 0.7);
    font-size: 0.8rem;
    letter-spacing: 1px;
    padding: 5px 0;
    z-index: 5;
}

.overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3); /* Subtle dark overlay */
    z-index: 5;
    pointer-events: none; /* Allow clicks to pass through */
}

/* Stadium Info Display */
.stadium-info {
    position: absolute;
    bottom: 60px;
    left: 0;
    right: 0;
    margin: 0 auto;
    width: 100%;
    z-index: 10;
    text-align: center;
    white-space: nowrap;
    transition: opacity 0.4s ease-in-out;
    opacity: 1;
}

/* Stadium Info on Coaches Page */
.coach-hero .stadium-info {
    display: none; /* Hide the stadium info completely on coaches page */
}

.coach-hero #stadium-name,
.coach-hero #stadium-location,
.coach-hero #team-name,
.coach-hero .location-divider {
    font-size: 0.8rem;
    font-weight: 600;
    letter-spacing: 1px;
    line-height: 1.2;
}

.coach-hero .logo-container {
    display: none; /* Hide the logo container on coaches page */
}

#stadium-name {
    font-size: 1rem;
    font-weight: 700;
    color: #fff;
    text-transform: uppercase;
    display: inline-block;
}

.stadium-text {
    display: block;
    text-align: center;
    font-size: 7rem;
    font-weight: 700;
    letter-spacing: 4px;
    text-transform: uppercase;
    padding: 0 20px;
    transition: opacity 0.4s ease-in-out;
    will-change: opacity;
    opacity: 1;
}

.location-divider {
    opacity: 1;
    color: rgba(255, 255, 255, 0.8);
    margin: 0 20px;
    font-size: 1rem;
    display: inline-block;
    transition: opacity 0.4s ease-in-out;
    vertical-align: baseline;
    position: relative;
    bottom: 0;
}

#stadium-location {
    font-size: 1rem;
    font-weight: 700;
    color: rgba(255, 255, 255, 1);
    white-space: nowrap;
    transition: opacity 0.4s ease-in-out;
    letter-spacing: 4px;
    opacity: 1;
    text-transform: uppercase;
    display: inline-block;
}

#stadium-location i {
    margin-right: 5px;
    color: #ff6b6b;
}

/* Background Controls */
.bg-controls {
    position: absolute;
    bottom: 50px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 20px;
    z-index: 10;
    transition: all 0.3s ease;
}

#prev-bg, #next-bg {
    width: 60px;
    height: 36px;
    border-radius: 4px;
    border: none;
    background-color: rgba(0, 0, 0, 0.2);
    color: white;
    font-size: 16px;
    cursor: pointer;
    transition: all 0.3s ease;
    backdrop-filter: blur(8px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    position: relative;
    overflow: hidden;
}

/* Button glow effect when clicked */
@keyframes button-glow {
    0% { box-shadow: 0 0 0 rgba(255, 255, 255, 0); }
    50% { box-shadow: 0 0 30px rgba(255, 255, 255, 0.9); }
    100% { box-shadow: 0 0 0 rgba(255, 255, 255, 0); }
}

.button-clicked {
    animation: button-glow 1s ease-out;
}

.bg-controls button:hover {
    background-color: rgba(0, 0, 0, 0.4);
    transform: translateY(-2px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
}

.main-nav {
    display: flex;
    justify-content: center;
    margin-top: 30px;
}

.chat-tab {
    display: inline-block;
    padding: 15px 40px;
    background-color: rgba(255, 255, 255, 0.15);
    color: white;
    text-decoration: none;
    border-radius: 30px;
    font-weight: 600;
    letter-spacing: 2px;
    transition: all 0.3s ease;
    backdrop-filter: blur(5px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.chat-tab:hover {
    background-color: rgba(255, 255, 255, 0.2);
    transform: translateY(-3px);
}

.logo-container {
    position: absolute;
    top: 80px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 10;
    transition: opacity 0.4s ease-in-out;
    opacity: 1;
}

.logo {
    width: 160px;
    height: 160px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.25);
    display: flex;
    justify-content: center;
    align-items: center;
    border: 3px solid rgba(255, 255, 255, 0.7);
    background-size: 65% 65%; /* Reduced from 80% to 65% */
    background-repeat: no-repeat;
    background-position: center;
    transition: all 0.4s ease;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(5px);
}

#team-logo {
    background-color: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(2px);
    transition: opacity 0.4s ease-in-out;
    width: 150px;
    height: 150px;
    background-size: 65% auto; /* Reduced from contain to 65% width */
    background-position: center;
    background-repeat: no-repeat;
    margin: 0 auto;
    margin-bottom: 20px;
    opacity: 1;
}

.content {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    z-index: 10;
    margin-top: 70px;
    transition: opacity 0.4s ease-in-out;
}

.content h1 {
    font-size: 4.5rem;
    font-weight: 700;
    margin-bottom: -0.5rem;
    color: white;
    letter-spacing: 3px;
    text-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
}

.coach-content h1 {
    font-size: 3.5rem;
    font-weight: 800;
    margin-bottom: 8px;
    letter-spacing: 8px;
    text-shadow: 0 4px 20px rgba(0, 0, 0, 0.8);
    text-transform: uppercase;
    line-height: 1;
    margin-top: 0;
    color: #ffffff;
    text-align: center;
    width: 100%;
}

.tagline {
    font-size: 0.8rem;
    font-weight: 600;
    margin-bottom: 1rem;
    color: #cccccc;
    letter-spacing: 4px;
    text-transform: uppercase;
    padding: 0 30px;
    transition: opacity 0.4s ease-in-out;
    text-align: center;
    width: 100%;
    text-shadow: -1.5px -1.5px 0 #000,  
                 1.5px -1.5px 0 #000,
                -1.5px  1.5px 0 #000,
                 1.5px  1.5px 0 #000,
                 0 0 5px rgba(255, 255, 255, 0.5),
                 0 0 10px rgba(255, 255, 255, 0.3),
                 0 0 15px rgba(255, 255, 255, 0.2);
    opacity: 1;
    position: relative;
    z-index: 20;
}

.coach-content .tagline {
    font-size: 1rem;
    font-weight: 500;
    margin-bottom: 25px;
    letter-spacing: 5px;
    color: rgba(255, 255, 255, 0.9);
    text-transform: uppercase;
    text-shadow: 0 2px 10px rgba(0, 0, 0, 0.7);
}

.divider {
    width: 60%;
    height: 1px;
    background-color: rgba(255, 255, 255, 0.5);
    margin: 10px auto;
}

.main-nav {
    display: flex;
    justify-content: center;
    gap: 30px;
}

.main-nav a {
    font-size: 0.9rem;
    letter-spacing: 2px;
    padding: 10px 15px;
    transition: all 0.3s ease;
}

.main-nav a:hover {
    border-bottom: 1px solid #fff;
}

/* Coaches Section */
.coaches-section {
    background-color: #f5f5f5;
    padding: 80px 20px;
    text-align: center;
    color: #333;
}

.coaches-section h2 {
    font-size: 2rem;
    margin-bottom: 50px;
    letter-spacing: 3px;
    position: relative;
    display: inline-block;
}

.coaches-section h2:after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 2px;
    background-color: #333;
}

.coach-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    max-width: 1000px;
    margin: 0 auto;
}

.coach-card {
    background-color: #fff;
    border-radius: 5px;
    overflow: hidden;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
}

.coach-card:hover {
    transform: translateY(-10px);
}

.coach-image {
    height: 120px;
    background-color: #ddd;
    background-size: cover;
    background-position: center;
}

#mike-image {
    background-image: url('https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80');
}

#sarah-image {
    background-image: url('https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80');
}

#david-image {
    background-image: url('https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80');
}

#lisa-image {
    background-image: url('https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80');
}

.coach-card h3 {
    margin-top: 12px;
    font-size: 1rem;
    color: #333;
}

.coach-card p {
    padding: 5px 10px;
    color: #666;
    font-size: 0.8rem;
    margin-bottom: 5px;
}

.chat-btn {
    background-color: #333;
    color: #fff;
    border: none;
    padding: 8px 15px;
    margin: 8px 0 12px;
    border-radius: 3px;
    cursor: pointer;
    transition: all 0.3s ease;
    font-family: 'Montserrat', sans-serif;
    font-size: 0.8rem;
}

.chat-btn:hover {
    background-color: #555;
}

/* Coach Selection Page */
.coach-hero {
    background-image: url('Images/stadium1.jpg');
    background-size: cover;
    background-position: center;
}

#greg-image {
    background-image: url('Images/Coaches/GregMaddux.webp');
    background-size: cover;
    background-position: center;
}

.coach-content {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    height: 100vh;
    margin: 0;
    padding: 0;
    padding-top: 180px; /* Move content down from top */
    z-index: 20; /* Ensure coach content stays above transitions */
    opacity: 1 !important; /* Force coach content to stay visible */
    transition: none; /* Disable transitions for coach content */
}

.coach-grid {
    display: block;
    text-align: center;
    width: 100%;
    margin: 40px auto;
    position: relative;
    z-index: 50;
    opacity: 1 !important;
    visibility: visible !important;
    pointer-events: auto !important;
}

.coach-card {
    background-color: rgba(0, 0, 0, 0.75);
    border-radius: 12px;
    padding: 20px;
    width: 220px;
    text-align: center;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    position: relative;
    z-index: 50;
    opacity: 1 !important;
    visibility: visible !important;
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.5);
    border: 1px solid rgba(255, 255, 255, 0.15);
    cursor: pointer;
    display: inline-block;
    margin: 0 15px;
}

.coach-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.4);
    background-color: rgba(0, 0, 0, 0.7);
}

.coach-image {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin: 0 auto 12px;
    background-size: cover;
    background-position: center;
    border: 2px solid rgba(255, 255, 255, 0.8);
    box-shadow: 0 0 15px rgba(255, 255, 255, 0.4);
}

#mike-image {
    background-image: url('Images/mike.jpg');
}

#barry-image {
    background-image: url('Images/Coaches/BarryBonds.webp');
}

#ron-image {
    background-image: url('Images/Coaches/RonWashington.webp');
}

#greg-image {
    background-image: url('Images/Coaches/GregMaddux.webp');
    background-size: cover;
    background-position: center;
}

#lisa-image {
    background-color: #9b59b6; /* Purple placeholder */
    background-image: linear-gradient(135deg, #9b59b6, #8e44ad);
}

.coach-card h3 {
    margin: 0 0 6px;
    font-size: 1.1rem;
    color: #ffffff;
    font-weight: 700;
    letter-spacing: 1px;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
}

.coach-card p {
    margin: 0;
    font-size: 0.85rem;
    color: rgba(255, 255, 255, 0.9);
    line-height: 1.3;
    text-transform: uppercase;
    letter-spacing: 1px;
}

.coach-card .chat-btn {
    background-color: rgba(255, 255, 255, 0.15);
    color: white;
    border: none;
    padding: 8px 15px;
    border-radius: 30px;
    cursor: pointer;
    font-size: 0.7rem;
    font-weight: 600;
    letter-spacing: 1px;
    transition: all 0.3s ease;
    backdrop-filter: blur(5px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    width: 100%;
}

.coach-card .chat-btn:hover {
    background-color: rgba(255, 255, 255, 0.25);
    transform: translateY(-2px);
}

.coach-nav {
    margin-top: 10px;
}

@media (max-width: 768px) {
    .coach-grid {
        grid-template-columns: 1fr;
        max-width: 400px;
    }
}

/* Chat Page */
.chat-body {
    background-color: #121212;
    color: #fff;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
}

.back-button {
    display: inline-flex;
    align-items: center;
    color: rgba(255, 255, 255, 0.7);
    margin-top: 30px;
    transition: all 0.3s ease;
    font-size: 0.9rem;
    letter-spacing: 1px;
}

.back-button i {
    margin-right: 8px;
}

.back-button:hover {
    color: #fff;
    transform: translateX(-5px);
}

/* Chat Section */
.chat-section {
    padding: 80px 20px;
    text-align: center;
    background-color: #fff;
    color: #333;
}

.chat-section h2 {
    font-size: 2rem;
    margin-bottom: 50px;
    letter-spacing: 3px;
    position: relative;
    display: inline-block;
}

.chat-section h2:after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 2px;
    background-color: #333;
}

.chat-container {
    max-width: 800px;
    margin: 0 auto;
    background-color: #f5f5f5;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.chat-header {
    background-color: #333;
    padding: 15px 20px;
    display: flex;
    align-items: center;
}

.selected-coach {
    display: flex;
    align-items: center;
    color: #fff;
}

.coach-avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #ddd;
    margin-right: 15px;
    background-size: cover;
    background-position: center;
    transition: opacity 0.4s ease-in-out;
}

.coach-info h3 {
    font-size: 1rem;
    margin-bottom: 5px;
}

.coach-info p {
    font-size: 0.8rem;
    opacity: 0.8;
}

.chat-messages {
    height: 400px;
    padding: 20px;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    gap: 15px;
    text-align: left;
}

.message {
    max-width: 80%;
    padding: 12px 15px;
    border-radius: 10px;
    line-height: 1.4;
}

.coach-message {
    background-color: #333;
    color: #fff;
    align-self: flex-start;
    border-bottom-left-radius: 0;
}

.user-message {
    background-color: #e6e6e6;
    color: #333;
    align-self: flex-end;
    border-bottom-right-radius: 0;
}

.chat-input {
    display: flex;
    padding: 15px;
    border-top: 1px solid #ddd;
}

#user-input {
    flex: 1;
    padding: 12px 15px;
    border: 1px solid #ddd;
    border-radius: 5px;
    resize: none;
    font-family: 'Montserrat', sans-serif;
    height: 50px;
}

#send-btn {
    background-color: #333;
    color: #fff;
    border: none;
    width: 50px;
    border-radius: 5px;
    margin-left: 10px;
    cursor: pointer;
    transition: all 0.3s ease;
}

#send-btn:hover {
    background-color: #555;
}

/* Responsive Design */
@media (max-width: 768px) {
    .content h1 {
        font-size: 2.5rem;
    }
    
    .tagline {
        font-size: 0.8rem;
    }
    
    .main-nav {
        flex-wrap: wrap;
        gap: 15px;
    }
    
    .coach-grid {
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    }
}

@media (max-width: 480px) {
    .content h1 {
        font-size: 2rem;
    }
    
    .logo {
        width: 50px;
        height: 50px;
    }
    
    .main-nav a {
        font-size: 0.8rem;
        padding: 8px 10px;
    }
}

@media (max-width: 480px) {
    .content h1 {
        font-size: 2rem;
    }
    
    .logo {
        width: 50px;
        height: 50px;
    }
    
    .main-nav a {
        font-size: 0.8rem;
        padding: 8px 10px;
    }
}
/* Navigation Styles */
.home-button, .back-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 8px 15px;
    background-color: rgba(0, 0, 0, 0.7);
    color: white;
    border-radius: 5px;
    text-decoration: none;
    font-weight: 600;
    transition: all 0.3s ease;
    margin-bottom: 15px;
    position: relative;
    z-index: 100;
}

.home-button:hover, .back-button:hover {
    background-color: rgba(255, 255, 255, 0.2);
}

.home-button i, .back-button i {
    margin-right: 5px;
}

.header-nav {
    display: flex;
    gap: 10px;
    margin-bottom: 15px;
}

.top-nav {
    position: absolute;
    top: 20px;
    left: 20px;
    z-index: 100;
}

.top-nav a {
    background-color: rgba(0, 0, 0, 0.6);
    padding: 10px 20px;
    border-radius: 30px;
    font-weight: 600;
    letter-spacing: 1px;
    display: inline-flex;
    align-items: center;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
    border: 1px solid rgba(255, 255, 255, 0.2);
}

.top-nav a:hover {
    background-color: rgba(0, 0, 0, 0.8);
    transform: translateY(-2px);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.4);
}

.top-nav a i {
    margin-right: 8px;
}

.contact-link {
    display: inline-flex;
    align-items: center;
    padding: 8px 15px;
    background-color: rgba(0, 0, 0, 0.7);
    color: white;
    border-radius: 5px;
    text-decoration: none;
    font-weight: 600;
    transition: all 0.3s ease;
}

.contact-link:hover {
    background-color: rgba(255, 255, 255, 0.2);
}

.contact-link i {
    margin-right: 5px;
}

/* Contact Page Styles */
.contact-page {
    background-color: #0a0a0a;
    color: #fff;
    font-family: 'Montserrat', sans-serif;
    margin: 0;
    padding: 0;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    position: relative;
    overflow-x: hidden;
}

/* Background Elements */
.tech-bg {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 50% 50%, #1a1a2e 0%, #0a0a1a 100%);
    z-index: -3;
}

.grid-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(rgba(25, 25, 35, 0.3) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(25, 25, 35, 0.3) 1px, transparent 1px);
    background-size: 20px 20px;
    z-index: -2;
    opacity: 0.4;
}

.glow-circle {
    position: fixed;
    border-radius: 50%;
    filter: blur(60px);
    z-index: -1;
}

.glow-circle-1 {
    top: 20%;
    left: 15%;
    width: 300px;
    height: 300px;
    background: rgba(0, 100, 255, 0.15);
}

.glow-circle-2 {
    bottom: 10%;
    right: 10%;
    width: 400px;
    height: 400px;
    background: rgba(255, 0, 100, 0.1);
}

/* Navigation */
.contact-nav {
    position: fixed;
    top: 20px;
    left: 20px;
    z-index: 100;
}

.home-button {
    display: flex;
    align-items: center;
    padding: 10px 15px;
    background: rgba(0, 0, 0, 0.4);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 30px;
    color: #fff;
    text-decoration: none;
    font-size: 0.9rem;
    font-weight: 500;
    transition: all 0.3s ease;
    backdrop-filter: blur(10px);
}

.home-button:hover {
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 0 0 15px rgba(255, 255, 255, 0.2);
}

.home-button i {
    margin-right: 8px;
}

/* Main Container */
.contact-container {
    max-width: 1000px;
    margin: 40px auto 80px;
    padding: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
    z-index: 10;
    gap: 0;
}

/* Header Styles */
.contact-header {
    text-align: center;
    margin-bottom: 10px;
    width: 100%;
}

.header-text {
    font-size: 3rem;
    font-weight: 700;
    margin: 0;
    letter-spacing: 2px;
    color: white;
    display: block;
    text-transform: uppercase;
    text-shadow: 0 0 15px rgba(255, 255, 255, 0.3);
    text-align: center;
}

.header-underline {
    width: 120px;
    height: 4px;
    background: linear-gradient(90deg, #ff3a3a 0%, #003bfe 100%);
    margin: 15px auto 25px;
    border-radius: 2px;
    display: block;
}

.contact-header p {
    font-size: 1.2rem;
    font-weight: 300;
    color: rgba(255, 255, 255, 0.8);
    margin: 20px 0 0;
}

/* Profile Section Styles */
.profile-section {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin: 0 0 25px;
    width: 100%;
    max-width: 950px;
    padding: 40px 60px;
    background: rgb(0, 0, 0);
    border-radius: 15px;
    backdrop-filter: blur(10px);
    border: 1px solid rgb(0, 0, 0);
    box-shadow: 0 0 25px rgb(0, 0, 0);
}

.profile-image {
    position: relative;
    width: 160px;
    height: 160px;
    margin-right: 30px;
    flex-shrink: 0;
    border-radius: 50%;
    overflow: hidden;
    background-color: rgb(0, 0, 0);
    padding: 0;
    border: 6px solid rgb(0, 0, 0);
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 0 30px rgb(0, 0, 0);
    outline: 2px solid rgb(0, 0, 0);
    outline-offset: 2px;
}

.profile-img {
    width: auto;
    height: auto;
    max-width: 150%;
    max-height: 150%;
    position: relative;
    top: -5px;
    transition: all 0.3s ease;
    transform: scale(0.8);
}

.profile-glow {
    position: absolute;
    top: -5px;
    left: -5px;
    right: -5px;
    bottom: -5px;
    border-radius: 50%;
    background: linear-gradient(45deg, #909090, #909090);
    opacity: 0.5;
    filter: blur(15px);
    z-index: -1;
    animation: pulse-glow 3s infinite alternate;
}

@keyframes pulse-glow {
    0% {
        opacity: 0.3;
        transform: scale(0.95);
    }
    100% {
        opacity: 0.6;
        transform: scale(1.05);
    }
}

.profile-info {
    text-align: left;
}

.profile-info h2 {
    font-size: 2.5rem;
    margin: 0 0 15px;
    font-weight: 700;
    background: linear-gradient(90deg, #fff, #e0e0e0);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    color: transparent;
    letter-spacing: 1px;
    text-shadow: 0 0 15px rgba(255, 255, 255, 0.2);
}

.profile-info p {
    font-size: 0.95rem;
    line-height: 1.6;
    margin: 12px 0;
    padding: 0 5px;
    color: rgba(255, 255, 255, 0.8);
    letter-spacing: 0.02em;
    max-width: 90%;
}

/* Contact Methods Styles */
.contact-methods-container {
    width: 100%;
    max-width: 950px;
    margin-top: 0;
    background: rgba(255, 255, 255, 0.02);
    border-radius: 15px;
    border: 1px solid rgba(255, 255, 255, 0.05);
    padding: 10px 0 20px;
}

.connect-header {
    text-align: center;
    margin-bottom: 20px;
}

.connect-text {
    font-size: 1rem;
    font-weight: 600;
    margin: 0;
    color: white;
    text-transform: uppercase;
    text-shadow: 0 0 10px rgba(255, 255, 255, 0.2);
    text-align: center;
    letter-spacing: 1.2px;
}

.connect-underline {
    width: 80px;
    height: 3px;
    background: linear-gradient(90deg, #ff3a3a 0%, #003bfe 100%);
    margin: 10px auto 0;
    border-radius: 2px;
    display: block;
}

.coach-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
    margin-top: 40px;
    max-width: 900px;
    width: 90%;
    margin-left: auto;
    margin-right: auto;
}

.contact-method {
    display: flex;
    align-items: center;
    padding: 15px 25px;
    background: rgba(255, 255, 255, 0.03);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.05);
    text-decoration: none;
    color: #fff;
    transition: all 0.3s ease;
    backdrop-filter: blur(5px);
    height: 60px;
    width: 100%;
    min-width: 350px;
}

.contact-method:hover {
    transform: translateY(-5px);
    background: rgba(255, 255, 255, 0.05);
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
    border-color: rgba(79, 172, 254, 0.3);
}

/* Simplified method-icon styles - hover effects now handled by JavaScript */
.method-icon {
    width: 45px;
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    margin-right: 15px;
    font-size: 1.2rem;
    background: white;
    position: relative;
    overflow: hidden;
    flex-shrink: 0;
    border: 1px solid rgba(0, 0, 0, 0.1);
}

.method-details {
    flex: 1;
}

.method-name {
    font-weight: 600;
    font-size: 1.1rem;
    margin-bottom: 5px;
}

.method-value {
    font-size: 0.85rem;
    color: rgba(255, 255, 255, 0.7);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 220px;
}

/* Default icon style - white */
.method-icon, .method-icon i {
    color: #ffffff;
    transition: color 0.3s ease;
}

/* Email icon specific style */
.email-icon:hover, .email-icon:hover i {
    color: #909090;
}

/* LinkedIn icon specific style */
.linkedin-icon:hover, .linkedin-icon:hover i {
    color: #0077B5;
}

/* Instagram icon specific style */
.instagram-icon:hover, .instagram-icon:hover i {
    color: #E1306C;
}

/* Phone icon specific style */
.phone-icon:hover, .phone-icon:hover i {
    color: #4CD964;
}

/* Footer Styles */
.contact-footer {
    text-align: center;
    padding: 20px;
    margin-top: auto;
    width: 100%;
    background: rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(10px);
    border-top: 1px solid rgba(255, 255, 255, 0.05);
    position: fixed;
    bottom: 0;
    left: 0;
}

.contact-footer p {
    font-size: 0.9rem;
    color: rgba(255, 255, 255, 0.6);
    margin: 0;
}

/* Responsive Design for Contact Page */
@media (max-width: 768px) {
    .contact-container {
        padding: 20px 15px;
        margin-top: 50px;
    }
    
    .contact-header h1 {
        font-size: 2.5rem;
    }
    
    .profile-section {
        flex-direction: column;
        text-align: center;
        padding: 20px 15px;
    }
    
    .profile-image {
        margin-right: 0;
        margin-bottom: 20px;
    }
    
    .profile-info {
        text-align: center;
    }
    
    .contact-methods {
        grid-template-columns: 1fr;
    }
}

@media (max-width: 480px) {
    .contact-container {
        padding: 15px 10px;
        margin-top: 40px;
    }
    
    .contact-header h1 {
        font-size: 2rem;
    }
    
    .header-underline {
        width: 60px;
    }
    
    .contact-header p {
        font-size: 1rem;
    }
    
    .profile-image {
        width: 100px;
        height: 100px;
    }
    
    .profile-info h2 {
        font-size: 1.5rem;
    }
    
    .profile-info p {
        font-size: 0.85rem;
        line-height: 1.5;
        margin: 8px 0;
    }
    
    .contact-methods-container h3 {
        font-size: 1.3rem;
    }
    
    .method-icon {
        width: 40px;
        height: 40px;
        font-size: 1.1rem;
    }
    
    .method-name {
        font-size: 1rem;
    }
    
    .method-value {
        font-size: 0.8rem;
    }
}

.contact-nav {
    position: absolute;
    top: 20px;
    left: 20px;
    z-index: 10;
}

/* Contact Page Styles - New Design */
.contact-body {
    background-color: #303030;
    color: #ffffff;
    font-family: 'Montserrat', sans-serif;
    height: 100vh;
    overflow: hidden;
    position: relative;
}

.contact-nav {
    position: absolute;
    top: 20px;
    left: 20px;
    z-index: 10;
}

.contact-main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    padding: 20px;
    position: relative;
    z-index: 1;
}

.contact-title {
    text-align: center;
    margin-bottom: 40px;
}

.contact-title h1 {
    font-size: 4rem;
    font-weight: 800;
    letter-spacing: 2px;
    color: white;
    text-transform: uppercase;
    text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
    margin-bottom: 10px;
}

.contact-tagline {
    font-size: 1.2rem;
    font-weight: 500;
    letter-spacing: 3px;
    margin-bottom: 30px;
    color: #f1c40f;
    text-shadow: 0 2px 10px rgba(0, 0, 0, 0.7);
    text-align: center;
    width: 100%;
}

.contact-title p {
    font-size: 1.2rem;
    color: #ffffff;
    font-weight: 500;
}

.profile-container {
    position: relative;
    width: 150px;
    height: 150px;
    margin: 0 auto 30px;
}

.emblem {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: #222222;
    border: 4px solid #ffffff;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
}

.emblem::before {
    content: "\f03e";
    font-family: "Font Awesome 5 Free";
    font-size: 50px;
    color: #444444;
}

/* Contact card - new design */
.contact-card {
    background-color: rgba(40, 40, 40, 0.6);
    backdrop-filter: blur(10px);
    border-radius: 15px;
    padding: 20px;
    width: 90%;
    max-width: 400px;
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
    border: 1px solid rgba(255, 255, 255, 0.1);
    margin: 0 auto;
}

.contact-methods {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 15px;
}

.contact-method {
    background-color: rgba(255, 255, 255, 0.05);
    border-radius: 10px;
    padding: 12px;
    display: flex;
    align-items: center;
    transition: transform 0.3s, background-color 0.3s;
    text-decoration: none;
    color: white;
    width: calc(50% - 8px);
    flex-grow: 0;
    flex-shrink: 0;
}

.contact-method:hover {
    transform: translateY(-5px);
    background-color: rgba(255, 255, 255, 0.1);
}

.method-icon {
    width: 40px;
    height: 40px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 15px;
    font-size: 1.2rem;
    flex-shrink: 0;
}

.email-icon {
    background-color: #000000;
}

.linkedin-icon {
    background-color: #000000;
}

.instagram-icon {
    background-color: #000000;
}

.github-icon {
    background-color: #000000;
}

.method-details {
    flex: 1;
    min-width: 0; /* Important for text overflow to work */
}

.method-name {
    font-size: 0.8rem;
    text-transform: uppercase;
    font-weight: 700;
    color: #ffffff;
    margin-bottom: 5px;
}

.method-value {
    font-size: 0.85rem;
    color: #fff;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.contact-footer {
    position: absolute;
    bottom: 20px;
    width: 100%;
    text-align: center;
    color: rgba(255, 255, 255, 0.4);
    font-size: 0.8rem;
}

/* Media Queries for Contact Page */
@media (max-width: 480px) {
    .contact-method {
        width: 100%;
    }
    
    .contact-title h1 {
        font-size: 3rem;
    }
    
    .profile-container {
        width: 120px;
        height: 120px;
    }
}

/* Sleek Black & White Contact Page with Glow Effects */
:root {
    --dark-bg: #000000;
    --card-bg: #0a0a0a;
    --accent: #ffffff;
    --text: #ffffff;
    --text-secondary: #aaaaaa;
    --card-hover: #151515;
    --glow-color: rgba(255, 255, 255, 0.7);
}

.contact-page {
    background-color: var(--dark-bg);
    background-image: 
        radial-gradient(circle at 10% 20%, rgba(255, 255, 255, 0.02) 0%, transparent 20%),
        radial-gradient(circle at 90% 80%, rgba(255, 255, 255, 0.02) 0%, transparent 20%);
    font-family: 'Montserrat', sans-serif;
    height: 100vh;
    display: flex;
    flex-direction: column;
    color: var(--text);
    position: relative;
    overflow: hidden;
}

/* Animated background elements */
.bg-element {
    position: absolute;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.02);
    box-shadow: 0 0 40px 10px rgba(255, 255, 255, 0.01);
    z-index: 0;
}

.bg-element-1 {
    width: 500px;
    height: 500px;
    top: -250px;
    left: -100px;
    animation: float 20s infinite alternate ease-in-out;
}

.bg-element-2 {
    width: 300px;
    height: 300px;
    bottom: -150px;
    right: -50px;
    animation: float 15s infinite alternate-reverse ease-in-out;
}

@keyframes float {
    0% { transform: translate(0, 0) rotate(0deg); }
    100% { transform: translate(30px, 30px) rotate(10deg); }
}

/* Contact Navigation */
.contact-nav {
    position: fixed;
    top: 10px;
    left: 10px;
    z-index: 10;
}

.contact-nav .home-button {
    background-color: rgba(255, 255, 255, 0.03);
    color: var(--accent);
    padding: 5px 15px;
    border-radius: 30px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    text-decoration: none;
    font-weight: 600;
    display: inline-flex;
    align-items: center;
    transition: all 0.3s ease;
    box-shadow: 0 0 15px rgba(255, 255, 255, 0.05);
    font-size: 0.9rem;
}

.contact-nav .home-button:hover {
    background-color: rgba(255, 255, 255, 0.1);
    color: var(--accent);
    transform: translateY(-2px);
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.15), 0 0 5px rgba(255, 255, 255, 0.1);
    text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
}

.contact-nav .home-button i {
    margin-right: 8px;
}

/* Contact Main Content */
.contact-container {
    max-width: 900px;
    width: 90%;
    margin: 0 auto;
    padding: 0;
    flex: 1;
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: calc(100vh - 40px); /* Subtract footer height */
}

/* Contact Header */
.contact-header {
    margin-bottom: 15px;
    text-align: center;
    width: 100%;
    padding-top: 15px;
    position: relative;
}

.contact-header h1 {
    font-size: 2.8rem;
    font-weight: 800;
    margin: 0 auto 8px;
    color: var(--accent);
    position: relative;
    display: block;
    text-shadow: 0 0 10px rgba(255, 255, 255, 0.3), 0 0 20px rgba(255, 255, 255, 0.1);
    letter-spacing: 2px;
    line-height: 1.1;
}

.contact-header h1::after {
    content: '';
    position: absolute;
    width: 60px;
    height: 2px;
    background: var(--accent);
    bottom: -8px;
    left: 50%;
    transform: translateX(-50%);
    box-shadow: 0 0 10px 1px var(--glow-color);
}

.contact-header p {
    font-size: 1rem;
    color: var(--text-secondary);
    text-shadow: 0 0 5px rgba(255, 255, 255, 0.1);
    margin: 0 auto;
    padding-top: 5px;
}

/* Profile Section */
.profile-section {
    display: flex;
    align-items: center;
    margin-bottom: 15px;
    background-color: var(--card-bg);
    border-radius: 15px;
    padding: 15px;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.5), 0 0 20px rgba(255, 255, 255, 0.05);
    position: relative;
    overflow: hidden;
    border: 1px solid rgba(255, 255, 255, 0.05);
    width: 100%;
}

.profile-section::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at top left, rgba(255, 255, 255, 0.03), transparent 60%);
    pointer-events: none;
}

.profile-image {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    overflow: hidden;
    margin-right: 30px;
    position: relative;
    flex-shrink: 0;
    background-color: #0a0a0a;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.05);
}

.profile-image::after {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    border-radius: 50%;
    border: 2px solid transparent;
    background: linear-gradient(45deg, var(--accent), transparent) border-box;
    -webkit-mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
    mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    animation: rotate-border 4s linear infinite;
}

@keyframes rotate-border {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

.profile-image i {
    font-size: 2.5rem;
    color: rgba(255, 255, 255, 0.2);
}

.profile-info {
    flex: 1;
}

.profile-info h2 {
    font-size: 1.4rem;
    margin-bottom: 5px;
    color: var(--accent);
    font-weight: 700;
    text-shadow: 0 0 10px rgba(255, 255, 255, 0.1);
}

.profile-info p {
    line-height: 1.6;
    color: var(--text-secondary);
    font-size: 0.9rem;
    max-height: none;
    overflow: visible;
    margin: 10px 0;
    padding: 0 5px;
    letter-spacing: 0.02em;
}

/* Contact Methods */
.contact-methods-container {
    background-color: var(--card-bg);
    border-radius: 15px;
    padding: 15px;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.5), 0 0 20px rgba(255, 255, 255, 0.05);
    position: relative;
    overflow: hidden;
    border: 1px solid rgba(255, 255, 255, 0.05);
    width: 100%;
}

.contact-methods-container::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at bottom right, rgba(255, 255, 255, 0.03), transparent 60%);
    pointer-events: none;
}

.contact-methods-container h3 {
    font-size: 1.4rem;
    margin-bottom: 15px;
    color: var(--text);
    position: relative;
    padding-bottom: 10px;
    font-weight: 700;
    text-shadow: 0 0 10px rgba(255, 255, 255, 0.1);
}

.contact-methods-container h3::after {
    content: '';
    position: absolute;
    width: 40px;
    height: 2px;
    background: var(--accent);
    bottom: 0;
    left: 0;
    border-radius: 2px;
    box-shadow: 0 0 10px 1px var(--glow-color);
}

.contact-methods {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
}

.contact-method {
    display: flex;
    align-items: center;
    padding: 12px;
    border-radius: 12px;
    transition: all 0.3s ease;
    text-decoration: none;
    color: var(--text);
    background-color: rgba(255, 255, 255, 0.02);
    border: 1px solid rgba(255, 255, 255, 0.05);
    position: relative;
    overflow: hidden;
}

/* Clean consolidated contact method styles */
.contact-method::before, .contact-method::after,
.contact-method:hover::before, .contact-method:hover::after {
    display: none;
}

.contact-method:hover {
    transform: translateY(-5px);
    background-color: var(--card-hover);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3), 0 0 15px rgba(255, 255, 255, 0.05);
    border-color: rgba(255, 255, 255, 0.1);
}

.method-icon {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 12px;
    color: var(--dark-bg);
    flex-shrink: 0;
    position: relative;
    z-index: 1;
    background-color: var(--accent);
    box-shadow: 0 0 15px rgba(255, 255, 255, 0.3);
}

/* Icon styles now fully handled by JavaScript */
.contact-method:hover .method-icon {
    background: white;
}

.method-details {
    flex: 1;
    z-index: 1;
}

.method-name {
    font-weight: 700;
    margin-bottom: 2px;
    color: var(--text);
    font-size: 0.9rem;
    text-transform: uppercase;
    letter-spacing: 1px;
}

.method-value {
    font-size: 0.8rem;
    color: var(--text-secondary);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 140px;
}

/* Contact Footer */
.contact-footer {
    background-color: transparent;
    color: var(--text-secondary);
    text-align: center;
    padding: 0;
    margin-top: auto;
    position: relative;
    z-index: 1;
    height: 30px;
    width: 100%;
    margin-bottom: 15px;
}

.contact-footer p {
    font-size: 0.9rem;
    text-shadow: 0 0 5px rgba(255, 255, 255, 0.1);
    color: rgba(255, 255, 255, 0.7);
    background-color: transparent;
}

/* Contact Media Queries */
@media (max-width: 768px) {
    .profile-section {
        flex-direction: column;
        text-align: center;
        padding: 10px;
    }
    
    .profile-image {
        margin-right: 0;
        margin-bottom: 10px;
        width: 80px;
        height: 80px;
    }
    
    .contact-methods {
        grid-template-columns: 1fr;
        gap: 10px;
    }
    
    .contact-header h1 {
        font-size: 1.8rem;
    }
    
    .contact-header {
        padding-top: 30px;
        margin-bottom: 8px;
    }
    
    .contact-container {
        height: calc(100vh - 30px);
    }
    
    .contact-methods-container {
        padding: 10px;
    }
    
    .contact-methods-container h3 {
        text-align: center;
        font-size: 1.1rem;
        margin-bottom: 10px;
    }
    
    .contact-methods-container h3::after {
        left: 50%;
        transform: translateX(-50%);
    }
    
    .contact-footer {
        height: 30px;
        padding: 5px 0;
    }
    
    .contact-footer p {
        font-size: 0.8rem;
    }
}