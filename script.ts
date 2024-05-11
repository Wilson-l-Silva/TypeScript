document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("loginForm") as HTMLFormElement;

    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const usernameInput = document.getElementById("username") as HTMLInputElement;
        const passwordInput = document.getElementById("password") as HTMLInputElement;

        // Simulando lógica de validação de login
        if (usernameInput.value === "admin" && passwordInput.value === "admin123") {
            window.location.href = "cadastro.html";
        } else {
            alert("Login inválido. Por favor, tente novamente.");
        }
    });
});
