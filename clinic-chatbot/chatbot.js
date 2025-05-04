function handleUserInput(input) {
  const chatbox = document.getElementById('chatbox');

  let userMessage = document.createElement('div');
  userMessage.className = 'chat-message user';
  userMessage.innerText = input === 'book' ? "Book Appointment" : input === 'timings' ? "Timings" : "Services";
  chatbox.appendChild(userMessage);

  let botReply = document.createElement('div');
  botReply.className = 'chat-message bot';

  if (input === 'book') {
    botReply.innerHTML = "Great! Please share your <b>name</b>:";
    chatbox.appendChild(botReply);
    createInputField('name');
  } else if (input === 'timings') {
    botReply.innerText = "Clinic Timings: Mon–Sat, 10 AM – 1:30 PM, 5 PM – 8:30 PM.";
    chatbox.appendChild(botReply);
  } else if (input === 'services') {
    botReply.innerHTML = "We offer:<br>- Root Canal<br>- Smile Design<br>- Teeth Whitening<br>- Braces & Aligners";
    chatbox.appendChild(botReply);
  }
}

function createInputField(type) {
  const chatbox = document.getElementById('chatbox');
  const input = document.createElement('input');
  input.placeholder = `Enter your ${type}`;
  input.className = 'chat-input';
  input.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
      const reply = document.createElement('div');
      reply.className = 'chat-message user';
      reply.innerText = input.value;
      chatbox.appendChild(reply);

      if (type === 'name') {
        let botReply = document.createElement('div');
        botReply.className = 'chat-message bot';
        botReply.innerText = `Hi ${input.value}, when would you like to book your appointment?`;
        chatbox.appendChild(botReply);
        input.remove();
        createInputField('date');
      } else if (type === 'date') {
        let botReply = document.createElement('div');
        botReply.className = 'chat-message bot';
        botReply.innerText = `Got it! We'll contact you soon to confirm your slot. ✅`;
        chatbox.appendChild(botReply);
        input.remove();
      }
    }
  });
  chatbox.appendChild(input);
  input.focus();
}
