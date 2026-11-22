// Select the registration form
const form = document.getElementById("registrationForm");

// Select the message area
const message = document.getElementById("message");

// Handle form submission
form.addEventListener("submit", function(event) {

    // Prevent page reload
    event.preventDefault();

    // Get student name
    const studentName =
        document.getElementById("name").value;

    // Get email
    const email =
        document.getElementById("email").value;

    // Get department
    const department =
        document.getElementById("department").value;

    // Get selected gender
    const gender =
        document.querySelector(
            'input[name="gender"]:checked'
        ).value;

    // Get selected activities
    const activities = Array.from(
        document.querySelectorAll(
            'input[name="activities"]:checked'
        )
    ).map(function(item) {
        return item.value;
    });

    // Display success message
    message.textContent =
        "Registration successful! Welcome, " +
        studentName + ". Department: " +
        department + ". Gender: " +
        gender + ". Activities: " +
        (activities.length ? activities.join(", ") : "None selected") +
        ". Acknowledgement for " + email + ".";

    // Clear the form
    form.reset();

});