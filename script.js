document.addEventListener('DOMContentLoaded', function() {
    const checkbox = document.getElementById('checkbox');
    const body = document.body;
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    checkbox.checked = isDarkMode;
    if (isDarkMode) {
        body.classList.add('dark-mode');
    }

    checkbox.addEventListener('change', function() {
        if (this.checked) {
            body.classList.add('dark-mode');
            localStorage.setItem('darkMode', true);
        } else {
            body.classList.remove('dark-mode');
            localStorage.setItem('darkMode', false);
        }
    });
});