// ==========================
// Splash Screen Animation
// ==========================
window.addEventListener("load", () => {
  const splash = document.getElementById("splash");
  const main = document.getElementById("mainContent");

  setTimeout(() => {
    splash.classList.add("fade-out");
    setTimeout(() => {
      splash.style.pointerEvents = "none"; // ✅ disables blocking
      splash.style.display = "none";       // ✅ hides splash
      main.classList.remove("hidden");
    }, 1000);
  }, 3500);
});

// ==========================
// Partner Field Toggle
// ==========================
document.getElementById("partner").addEventListener("change", function () {
  const partnerDetails = document.getElementById("partnerDetails");
  partnerDetails.classList.toggle("hidden", this.value !== "with-partner");
});

// ==========================
// RSVP Confirmation Popup
// ==========================
const popup = document.getElementById("popup");
const closePopup = document.getElementById("closePopup");

// ==========================
// RSVP Submission (Cloudflare Worker Integration)
// ==========================
document.getElementById("rsvpForm").addEventListener("submit", async function (e) {
  e.preventDefault();

  const form = e.target;
  const data = new FormData(form);

  try {
    // 🔗 Replace YOURNAME with your actual Worker subdomain
    const res = await fetch("https://wedding-rsvp-worker.YOURNAME.workers.dev/rsvp", {
      method: "POST",
      body: data,
    });

    const json = await res.json();

    if (json.success) {
      // ✅ Show popup confirmation after saving to D1
      popup.classList.add("show");
      form.reset();
      document.getElementById("partnerDetails").classList.add("hidden");
    } else {
      alert("❌ Something went wrong — please try again later.");
    }
  } catch (err) {
    console.error("RSVP submission failed:", err);
    alert("⚠️ Network error. Please check your connection and try again.");
  }
});

closePopup.addEventListener("click", () => {
  popup.classList.remove("show");
});

// ==========================
// Background Music Toggle
// ==========================
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
