document.addEventListener('DOMContentLoaded', function() {
    const existingFooter = document.querySelector('.rst-footer-buttons + div');
    
    if (existingFooter) {
        const customFooterDiv = document.createElement('div');
        customFooterDiv.className = 'custom-trademark-footer';
        
        customFooterDiv.innerHTML = `
            Made with <span class="neon-heart">&hearts;</span> by 
            <a href="YOUR_GITHUB_PROFILE_URL_HERE" target="_blank" rel="noopener">Jaloliddin Ismailov</a>, 2025.
        `;

        existingFooter.prepend(customFooterDiv);
    }
});