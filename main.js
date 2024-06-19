onload = () =>{
        document.body.classList.remove("container");
};

const messages = [
  "Hi",
  "Does this work?"



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