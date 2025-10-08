// Login
document.getElementById("loginForm")?.addEventListener("submit", function (e) {
  e.preventDefault();
  const username = document.getElementById("loginUsername").value.trim();
  const password = document.getElementById("loginPassword").value.trim();

  if (!username || !password) {
    document.getElementById("loginMessage").textContent = "Username dan password wajib diisi!";
    return;
  }

  const storedPassword = localStorage.getItem(username);
  if (storedPassword && storedPassword === password) {
    // Login berhasil, redirect ke home.html
    window.location.href = "home.html";
  } else {
    document.getElementById("loginMessage").textContent = "Username atau password salah!";
  }
});
