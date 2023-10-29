document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("login-form");
    const message = document.getElementById("message");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        // Make an AJAX request to check login
        const xhr = new XMLHttpRequest();
        xhr.open("POST", "check-login.php", true);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status === 200) {
                const response = JSON.parse(xhr.responseText);
                if (response.success) {
                    message.textContent = "Login successful!";
                } else {
                    message.textContent = "Login failed. Please check your username and password.";
                }
            }
        };

        const data = `username=${username}&password=${password}`;
        xhr.send(data);
    });
});
