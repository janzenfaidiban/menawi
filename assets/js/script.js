const openChatBtn = document.getElementById('openChatBtn');
    const chatModal = new bootstrap.Modal(document.getElementById('chatModal'));
    const chatContent = document.getElementById('chatContent');
    const chatForm = document.getElementById('chatForm');
    const chatInput = document.getElementById('chatInput');

    openChatBtn.addEventListener('click', () => {
      chatModal.show();
      setTimeout(() => chatInput.focus(), 500);
    });

    chatForm.addEventListener('submit', e => {
      e.preventDefault();
      const userMsg = chatInput.value.trim();
      if (!userMsg) return;

      const userBubble = document.createElement('p');
      userBubble.textContent = userMsg;
      userBubble.className = 'bg-primary text-white rounded p-2 mb-2 ms-auto w-75';

      chatContent.appendChild(userBubble);
      chatInput.value = '';
      chatContent.scrollTop = chatContent.scrollHeight;

      setTimeout(() => {
        const botReply = document.createElement('p');
        botReply.textContent = `Balasan chatbot untuk: "${userMsg}"`;
        botReply.className = 'bg-secondary text-white rounded p-2 mb-2 w-75';
        chatContent.appendChild(botReply);
        chatContent.scrollTop = chatContent.scrollHeight;
      }, 1000);
    });