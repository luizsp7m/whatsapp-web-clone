import { useEffect, useState } from 'react';

import MessageItem from '../MessageItem';

import { useApp } from '../../hooks/useApp'

import { Container } from './styles';

export default function Messages({ group }) {

  const [messages, setMessages] = useState();

  useEffect(() => {
    const messagesFormatted = [];

    for(let id in group?.messages) {
      messagesFormatted.push({
        id: group.messages[id], ...group.messages[id]
      });

      setMessages(messagesFormatted);
    }
  }, [group]);

  return (
    <Container>
      {messages?.map((message, index) => <MessageItem
        key={index}
        message={message}
      />)}
    </Container>
  );
}