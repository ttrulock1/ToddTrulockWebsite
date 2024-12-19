document.addEventListener("DOMContentLoaded", () => {
    const emailLink = document.getElementById("emailLink");
    const thankYouMessage = document.getElementById("thankYouMessage");

    if (emailLink && thankYouMessage) {
        emailLink.addEventListener("click", (e) => {
            // Prevent default mailto link behavior for testing purposes
            e.preventDefault();

            // Display the thank you message
            thankYouMessage.style.display = "block";

            // Delay the mailto behavior to show the message
            setTimeout(() => {
                window.location.href = "mailto:toddstrulock@gmail.com";
            }, 500); // 0.5-second delay for smoother UX
        });
    } else {
        console.error("Email link or thank you message element not found.");
    }
});