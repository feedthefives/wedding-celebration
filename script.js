document.getElementById("partner").addEventListener("change", function() {
  const partnerDetails = document.getElementById("partnerDetails");
  partnerDetails.classList.toggle("hidden", this.value !== "with-partner");
});

document.getElementById("rsvpForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Thank you for registering for our Wedding Celebration! 💖");
  this.reset();
  document.getElementById("partnerDetails").classList.add("hidden");
});
