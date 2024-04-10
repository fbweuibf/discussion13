document.addEventListener('DOMContentLoaded', function() {
    const checkbox = document.querySelector('input[name="useBilling"]');
    const billingAddress = document.getElementById('billing');
    const homeAddress = document.getElementById('home');

    checkbox.addEventListener('change', function() {
        if (this.checked) {
            homeAddress.value = billingAddress.value;
        } else {
            homeAddress.value = '';
        }
    });
});
