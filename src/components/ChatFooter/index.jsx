import { Container } from './styles';

import { RiSendPlaneFill } from 'react-icons/ri';

import { useState } from 'react';

import { useApp } from '../../hooks/useApp';

export default function ChatFooter() {

  const { showChatSidebar } = useApp();

  const [message, setMessage] = useState("");

  async function createMessage(event) {
    event.preventDefault();
  }

  return (
    <Container onSubmit={createMessage} showChatSidebar={showChatSidebar}>
      <input
        type="text"
        placeholder="Digite uma mensagem"
        required={true}
        onChange={({ target }) => setMessage(target.value)}
        value={message}
      />

      <button type="submit">
        <RiSendPlaneFill size={18} />
      </button>
    </Container>
  );
}