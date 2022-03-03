import { Container, IconSend } from './styles';

import { useEffect, useState } from 'react';

import { useApp } from '../../hooks/useApp';
import { useAuth } from '../../hooks/useAuth';

import { firebase } from '../../services/firebase';

export default function ChatFooter() {

  const { showChatSidebar, groupSelected } = useApp();
  const { user } = useAuth();

  const [message, setMessage] = useState("");

  async function createMessage(event) {
    event.preventDefault();

    const date = new Date();

    firebase.database().ref(`/groups/${groupSelected}/messages`).push({
      message,
      sender: user,
      created_at: date.toISOString(),
    });

    setMessage("");
  }

  useEffect(() => {
    setMessage("");
  }, [groupSelected]);

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
        <IconSend size={22} />
      </button>
    </Container>
  );
}