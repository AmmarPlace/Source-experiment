document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  if (username && password) {
    // Simpan ke Local Storage
    localStorage.setItem("user", JSON.stringify({ username, password }));
    document.getElementById("message").textContent = "Login berhasil! Data disimpan.";
  } else {
    document.getElementById("message").textContent = "Isi semua kolom!";
  }
});
