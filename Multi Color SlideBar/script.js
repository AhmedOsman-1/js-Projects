const dark = document.querySelector('.dark');
const night = document.querySelector('.night');
const light = document.querySelector('.light');
const sidebar = document.querySelector('.sidebar');

// Function to update sidebar theme
function updateTheme(theme) {
    sidebar.className = `sidebar ${theme}`;
    
    // Update active list item color
    document.querySelectorAll('.list-item.active').forEach(item => {
        item.className = `list-item active ${theme}`;
    });
}

// Event Listeners
dark.addEventListener("click", () => updateTheme(""));
night.addEventListener("click", () => updateTheme("night"));
light.addEventListener("click", () => updateTheme("light"));
