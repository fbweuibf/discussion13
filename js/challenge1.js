document.addEventListener('DOMContentLoaded', function() {
    const toggleCheckbox = document.getElementById('toggle');
    const emailBox = document.getElementById('emailBox');

    toggleCheckbox.addEventListener('change', function() {
        if (this.checked) {
            emailBox.classList.remove('hidden');
        } else {
            emailBox.classList.add('hidden');
        }
    });
});

