window.addEventListener("load", () => {
  const splash = document.getElementById("splash");
  const main = document.getElementById("mainContent");

  // Wait 3.5 seconds, fade out splash, then remove it completely
  setTimeout(() => {
    splash.classList.add("fade-out");
    setTimeout(() => {
      splash.style.display = "none"; // ✅ ensures splash no longer blocks clicks
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

  // Show popup instead of default alert
  popup.classList.remove("hidden");
  popup.classList.add("show");

  this.reset();
  document.getElementById("partnerDetails").classList.add("hidden");
});

closePopup.addEventListener("click", () => {
  popup.classList.remove("show");
  setTimeout(() => {
    popup.classList.add("hidden");
    popup.style.display = "none"; // ✅ completely removes popup from click layer
  }, 500);
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
