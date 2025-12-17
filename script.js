const loginScreen = document.getElementById("loginScreen");
const appScreen = document.getElementById("appScreen");
const content = document.getElementById("content");

function login() {
  const username = document.getElementById("usernameInput").value;
  if (!username) return alert("Digite um nome");

  localStorage.setItem("user", username);
  startApp();
}

function startApp() {
  loginScreen.classList.add("hidden");
  appScreen.classList.remove("hidden");
}

function showTab(tab) {
  if (tab === "feed") content.innerHTML = "<h3>Feed</h3><p>Posts aqui</p>";
  if (tab === "friends") content.innerHTML = "<h3>Amigos</h3>";
  if (tab === "chat") content.innerHTML = "<h3>Chat</h3>";
  if (tab === "profile") content.innerHTML = "<h3>Perfil</h3>";
}

// Auto-login
if (localStorage.getItem("user")) {
  startApp();
}

// PWA
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("sw.js");
}