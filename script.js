// Register
document.getElementById("registerForm")?.addEventListener("submit", function (e) {
  e.preventDefault();
  const username = document.getElementById("registerUsername").value.trim();
  const password = document.getElementById("registerPassword").value.trim();

  if (localStorage.getItem(username)) {
    document.getElementById("registerMessage").textContent = "Username sudah digunakan.";
  } else {
    localStorage.set
