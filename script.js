function myFunction(x) {
    x.classList.toggle("change");
  }

  /*function toggleChat() {
    const chatContainer = document.getElementById('chatContainer');
    if (chatContainer.style.display === 'none' || chatContainer.style.display === '') {
        chatContainer.style.display = 'block';
    } else {
        chatContainer.style.display = 'none';
    }
}

function userReply(reply) {
    const chatbox = document.getElementById('chatbox');
    const userMessage = document.createElement('div');
    userMessage.className = 'message user';
    userMessage.textContent = reply;
    chatbox.appendChild(userMessage);

    const botMessage = document.createElement('div');
    botMessage.className = 'message bot';
    const positiveReplies = [
        'Believe in yourself,and anything is possible',
        'Iam here to listen,and I care about you are going through',
        'You dont have to face this. Let me help you find support',
        'You are stronger than you think, and you can get through this difficult another way',
        'Self-care is essential'
    ];
    const randomReply = positiveReplies[Math.floor(Math.random() * positiveReplies.length)];
    botMessage.innerHTML = `<img src="download-removebg-preview.jpg" alt="Chatbot Icon" class="icon"> ${randomReply}`;
    chatbox.appendChild(botMessage);
}

function handleKeyPress(event) {
    if (event.key === 'Enter') {
        submitMessage();
    }
}

function submitMessage() {
    const userInput = document.getElementById('userInput');
    userReply(userInput.value);
    userInput.value = '';
}*/

