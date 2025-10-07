// Register
document.getElementById("registerForm")?.addEventListener("submit", function (e) {
  e.preventDefault();
  const username = document.getElementById("registerUsername").value.trim();
  const password = document.getElementById("registerPassword").value.trim();

  if (!username || !password) {
    document.getElementById("registerMessage").textContent = "Username dan password wajib diisi!";
    return;
  }

  if (localStorage.getItem(username)) {
    document.getElementById("registerMessage").textContent = "Username sudah digunakan.";
  } else {
    // Simpan data user ke localStorage
    localStorage.setItem(username, password);
    document.getElementById("registerMessage").textContent = "Registrasi berhasil! Silakan login.";
    // Reset form
    document.getElementById("registerForm").reset();
  }
});
