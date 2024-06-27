onload = () =>{
        document.body.classList.remove("container");
};

const messages = [
  "Hey Anurag",
  "I have a story I wanna tell you",
  "All my friends know this except you.",
  "I've been saving it for your bday",
  "So as a kid,",
  "Whenever I was asked to write a letter",
  "In marathi or english",
  "I always used to write it for...",
  "Someone named 'anurag'... ",
  "But I didn't know any Anurag back then...",
  "I just wanted to write to someone who is not real",
  "And I just picked 'anurag' everytime.",
  "And now that we're such good friends...",
  "It feels like I've manifested this friendship",
  "And you know when I realized all this?",
  "In the unit test of SEM 4...",
  "When we were sitting together and I wasn't writing",
  "I looked at you (You were attempting the paper atleast)",
  "And I was smiling like an idiot cuz of this flashback",
  "Inhi harkaton ki vajah se mujhe back lagte hai...",
  "But yeah that was the story",
  "Hope you liked the PHLOWERS",
  "Have an awesome birthday!",
  ""
];
let currentMessage = 0;


function showMessage() {
  const typewriterText = document.getElementById('typewriterText');
  const imageContainer = document.getElementById('imageContainer');
  if (currentMessage < messages.length) {
    typewriterText.classList.remove('fade-in');
    setTimeout(() => {
        typewriterText.textContent = messages[currentMessage];
        typewriterText.classList.add('fade-in');
        currentMessage++;
    }, 1750);
} else {
    // Hide the message text and show the image
    typewriterText.style.display = 'none';
    imageContainer.style.display = 'block';

    // Stop the interval to prevent further message updates
    clearInterval(intervalId);
}
}

// Start the message display
showMessage();

// Change message every 4 seconds plus fade duration (adjust as needed)
setInterval(showMessage, 3500); // 2s for fade-in, 2s for visible, 2s for fade-out