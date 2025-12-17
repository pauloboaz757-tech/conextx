self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("conextx-v1").then(cache => {
      return cache.addAll([
        "./",
        "./index.html",
        "./style.css",
        "./script.js"
      ]);
    })
  );
});