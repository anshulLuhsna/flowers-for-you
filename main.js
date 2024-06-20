onload = () =>{
        document.body.classList.remove("container");
};

const messages = [
  "Hey Saranya,",
  "I have something important to ask you.",
  "I don’t mean to sound cheesy or overly romantic",
  "but... ",
  "Would you like to be my tour guide and show me around Plymouth?",
  "Just kidding!",
  "I would love to get to know you better",
  "so would you go on a date with me?",
  "Also, the tour guide thing."
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