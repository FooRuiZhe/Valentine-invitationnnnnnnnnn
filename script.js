const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const catImg = document.getElementById("catImg");
const question = document.getElementById("question");

const sadCats = [
  "https://media.tenor.com/AjbmymbMBDEAAAAM/angry.gif",
  "https://media4.giphy.com/media/v1.Y2lkPTZjMDliOTUyczRkZXA3Y2xodXZkdG4zN2psdnAxcDNyNDVndXlmY3BldjgzODNrZCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/GAXXHdS0zXawVLOJLY/200w.gif",
  "https://media.tenor.com/aC4lUND6reYAAAAM/sullimvs-jinrinotes.gif"
];

const happyCat = "https://media.giphy.com/media/MDJ9IbxxvDUQM/giphy.gif";

let noClicks = 0;

// Mobile-friendly "No" button dodge
noBtn.addEventListener("click", () => {
  noClicks++;

  const x = Math.random() * 200 - 100;
  const y = Math.random() * 150 - 75;

  noBtn.style.transform = `translate(${x}px, ${y}px)`;

  catImg.src = sadCats[noClicks % sadCats.length];
  question.textContent = "I angry oredi! 🥺";
});


// YES = WIN 💖
yesBtn.addEventListener("click", () => {
  catImg.src = happyCat;
  question.textContent = "YAY!! See you on Valentine’s Day 💘🐾";
  
  document.getElementById("details").innerHTML = `
    📍 <strong>Venue:</strong> Secret! ☕<br>
    🕖 <strong>Time:</strong> 7:00 PM<br>
    🍰 <strong>Dress code:</strong> Bluewy! 👗💙
  `;
  noBtn.style.display = "none";
  yesBtn.textContent = "Love You!";
});
