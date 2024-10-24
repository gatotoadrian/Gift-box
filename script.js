// Smooth scroll to section when Shop Now button is clicked
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
}

// Show package details when a package is clicked
function showPackageDetails(packageId) {
    alert('Details for ' + packageId + ' package will be shown here.');
}

// Handle category navigation
function showCategory(category) {
    alert('Displaying ' + category + ' category.');
}

// Custom box form submission (example validation)
document.getElementById('custom-box-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting

    const flowers = document.getElementById('flowers').value;
    const wine = document.getElementById('wine').value;
    const message = document.getElementById('message').value;

    alert(`Your custom box: \nFlowers: ${flowers} \nWine: ${wine} \nMessage: ${message}`);
});

// Contact form validation and submission

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert('Thank you, ' + name + '! Your message has been sent.');
    } else {
        alert('Please fill in all fields.');
    }
});
