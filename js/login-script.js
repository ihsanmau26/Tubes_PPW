$(document).ready(function() {
    $("form").on("submit", function(event) {
        event.preventDefault();

        const email = $("#email").val();
        const password = $("#password").val();

        $.getJSON("js/json/account.json", function(data) {
            const account = data.account.find(acc => acc.email === email && acc.password === password);

            if (account) {
                alert("Login successful!");
                window.location.href = "index.html";
            } else {
                alert("Invalid email or password.");
            }
        }).fail(function() {
            alert("Error loading account data.");
        });
    });
});
