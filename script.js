// ===== Splash Screen Transition =====
window.addEventListener("load", () => {
  const splash = document.getElementById("splash");
  const main = document.getElementById("mainContent");

  setTimeout(() => {
    splash.classList.add("fade-out");
    setTimeout(() => {
      splash.style.pointerEvents = "none"; // ✅ fully disables blocking
      splash.style.display = "none";       // ✅ hides it entirely
      main.classList.remove("hidden");
    }, 1000);
  }, 3500);
});

// ===== Partner Field Toggle =====
document.getElementById("partner").addEventListener("change", function () {
  const partnerDetails = document.getElementById("partnerDetails");
  partnerDetails.classList.toggle("hidden", this.value !== "with-partner");
});

// ===== RSVP Confirmation Popup =====
const popup = document.getElementById("popup");
const closePopup = document.getElementById("closePopup");

document.getElementById("rsvpForm").addEventListener("submit", function (e) {
  e.preventDefault();
  popup.classList.add("show");
  this.reset();
  document.getElementById("partnerDetails").classList.add("hidden");
});

closePopup.addEventListener("click", () => {
  popup.classList.remove("show");
});

// ===== Music Toggle =====
const music = document.getElementById("weddingMusic");
const toggle = document.getElementById("toggleMusic");

toggle.addEventListener("click", () => {
  if (music.muted) {
    music.muted = false;
    music.play();
    toggle.textContent = "⏸️ Pause Music";
  } else if (music.paused) {
    music.play();
    toggle.textContent = "⏸️ Pause Music";
  } else {
    music.pause();
    toggle.textContent = "🎵 Play Music";
  }
});
