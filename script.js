document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Copy Gamertag Functionality
    const copyBtn = document.getElementById('copyBtn');
    if (copyBtn) {
        copyBtn.addEventListener('click', () => {
            const gamertagText = document.getElementById('tag').innerText;
            
            navigator.clipboard.writeText(gamertagText).then(() => {
                copyBtn.innerText = 'Copied!';
                copyBtn.style.backgroundColor = '#10b981'; // Green success color
                copyBtn.style.color = '#fff';
                
                setTimeout(() => {
                    copyBtn.innerText = 'Copy Tag';
                    copyBtn.style.backgroundColor = 'var(--accent-blue)';
                    copyBtn.style.color = '#000';
                }, 2000);
            }).catch(err => {
                console.error('Failed to copy text: ', err);
            });
        });
    }

    // 2. Simulated Live Player Counter
    const playerElement = document.getElementById('playerCount');
    if (playerElement) {
        setInterval(() => {
            // Generates slight fluctuations to make the server feel alive
            let currentPlayers = parseInt(playerElement.innerText.replace(',', ''));
            let fluctuation = Math.floor(Math.random() * 7) - 3; // Change by -3 to +3
            let newTotal = currentPlayers + fluctuation;
            playerElement.innerText = newTotal.toLocaleString();
        }, 4000);
    }

    // 3. Interactive Accordion (FAQ Section)
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const content = header.nextElementSibling;
            const icon = header.querySelector('span');
            
            // Toggle active item
            if (content.style.maxHeight && content.style.maxHeight !== '0px') {
                content.style.maxHeight = '0px';
                icon.innerText = '+';
            } else {
                // Close any open elements first (Optional accordion style rule)
                document.querySelectorAll('.accordion-content').forEach(item => item.style.maxHeight = '0px');
                document.querySelectorAll('.accordion-header span').forEach(sp => sp.innerText = '+');
                
                // Open clicked target
                content.style.maxHeight = content.scrollHeight + 'px';
                icon.innerText = '−';
            }
        });
    });

    // 4. Back To Top Button Control
    const scrollTopBtn = document.getElementById('scrollTopBtn');
    window.onscroll = function() {
        if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
            scrollTopBtn.style.display = "block";
        } else {
            scrollTopBtn.style.display = "none";
        }
    };

    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});

