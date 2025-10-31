document.addEventListener('DOMContentLoaded', function() {

    // === 1. FIXING THE CUSTOM TRADEMARK FOOTER (Main Content Area) ===
    
    // Target the wrapper of the existing footer buttons and text.
    const footerWrapper = document.querySelector('.rst-footer-buttons');
    
    if (footerWrapper && footerWrapper.parentElement) {
        // The main content footer area container
        const mainFooterContainer = footerWrapper.parentElement; 
        
        // Create the new div for your custom trademark text
        const customFooterDiv = document.createElement('div');
        customFooterDiv.className = 'custom-trademark-footer';
        
        // Set the inner HTML
        customFooterDiv.innerHTML = `
            Made with <span class="neon-heart">&hearts;</span> by 
            <a href="https://github.com/unnobatroo" target="_blank" rel="noopener">Jaloliddin Ismailov</a>, 2025.
        `;
        
        // Append the new div to the container (it will appear below the "Built with MkDocs" line)
        mainFooterContainer.appendChild(customFooterDiv);
    }


    // === 2. CHANGING THE SIDEBAR GITHUB BUTTON ===
    
    // Target the anchor tag (link) in the sidebar footer that goes to GitHub.
    // The selector targets a link inside the nav footer that has 'github' in the URL.
    const githubLink = document.querySelector('.rst-versions a[href*="github.com"]');

    if (githubLink) {
        // Change the text to your desired phrase
        githubLink.innerHTML = 'with :love: by Jaloliddin Ismailov';
        
        // Remove the default GitHub icon for a cleaner look
        const githubIcon = githubLink.querySelector('.fa-github');
        if (githubIcon) {
            githubIcon.remove();
        }
    }
});