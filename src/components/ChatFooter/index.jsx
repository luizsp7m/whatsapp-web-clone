import { Container } from './styles';

import { RiSendPlaneFill } from 'react-icons/ri';

import { useState } from 'react';

import { useApp } from '../../hooks/useApp';
import { useAuth } from '../../hooks/useAuth';

import { firebase } from '../../services/firebase';

export default function ChatFooter() {

  const { showChatSidebar, idGroupSelected } = useApp();
  const { user } = useAuth();

  const [message, setMessage] = useState("");

  async function createMessage(event) {
    event.preventDefault();

    const data = {
      message,
      sender: user
    }

    try {
      await firebase.database().ref(`/groups/${idGroupSelected}/messages`).push(data);
    } catch (error) {
      console.log(error);
    } finally {
      setMessage("");
    }
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