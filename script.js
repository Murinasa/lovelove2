
    

    // Surprise message toggle
    function toggleMessage() {
      const msg = document.getElementById("hiddenMessage");
      msg.style.display = msg.style.display === "none" ? "block" : "none";
    }

    setInterval(() => {
      const heart = document.createElement("div");
      heart.className = "heart";
      heart.style.left = Math.random() * 100 + "vw";
      heart.style.animationDuration = (Math.random() * 3 + 3) + "s";
      document.body.appendChild(heart);
      setTimeout(() => heart.remove(), 6000);
    }, 500);

    





const blinkText = document.querySelector('.blink-text');

function changeColor() {
  const colors = ['red', 'blue', 'green', 'yellow'];
  const randomIndex = Math.floor(Math.random() * colors.length);
  blinkText.style.color = colors[randomIndex];
}

setInterval(changeColor, 1000); // Change color every second

 
