onload = () =>{
        document.body.classList.remove("container");
};

const messages = [
  "Hi Saranya",
"I have something to tell you...",
"You smell",
"...like lavender",
"...but like an old one",
"I'm kidding lol",
"In reality you smell like these flowers down below",
"I lovee their smell",
"But I have no idea what they're called lol",
"In the same way,",
"I don't know a lot about you either",
"That has to change right?",
"So I was wondering...",
"Would you like to go on a date with me?",
"I promise to bring flowers ",
"(Real ones this time hehe)",
"~ from Shari"
];
let currentMessage = 0;


function showMessage() {
  const typewriterText = document.getElementById('typewriterText');
  typewriterText.classList.remove('fade-in');

  setTimeout(() => {
    typewriterText.textContent = messages[currentMessage];
    typewriterText.classList.add('fade-in');
    currentMessage = (currentMessage + 1) % messages.length;
  }, 2000); // This timeout should match the transition time
}

// Start the message display
showMessage();

// Change message every 4 seconds plus fade duration (adjust as needed)
setInterval(showMessage, 4000); // 2s for fade-in, 2s for visible, 2s for fade-out