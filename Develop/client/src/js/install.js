const btnInstall = document.getElementById("buttonInstall");

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener("beforeinstallprompt", (event) => {
  window.deferredPrompt = event;
  btnInstall.classList.toggle("hidden", false);
});

// TODO: Implement a click event handler on the `btnInstall` element
btnInstall.addEventListener("click", async () => {
  const Event = window.deferredPrompt;
  if (!Event) {
    return;
  }
  Event.prompt();

  window.deferredPrompt = null;

  btnInstall.classList.toggle("hidden", true);
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener("appinstalled", (event) => {
  window.deferredPrompt = null;
});
