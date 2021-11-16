import { Container } from './styles';

import { RiSendPlaneFill } from 'react-icons/ri';

import { useApp } from '../../hooks/useApp';

import { firebase } from '../../services/firebase';

import { useState } from 'react';
import { useAuth } from '../../hooks/useAuth';

export default function ChatFooter() {

  const { showChatSidebar, groupSelected } = useApp();
  const { user } = useAuth();

  const [message, setMessage] = useState("");

  async function handleCreateMessage(event) {
    event.preventDefault();

    await firebase.database().ref(`/groups/${groupSelected}/messages`).push({
      message,
      sender: user,
    });

    setMessage("");
  }

  return (
    <Container onSubmit={handleCreateMessage} showChatSidebar={showChatSidebar}>
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