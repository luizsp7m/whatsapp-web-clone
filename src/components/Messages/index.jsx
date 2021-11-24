import { useEffect, useState } from 'react';

import MessageItem from '../MessageItem';

import { Container } from './styles';

import { useAuth } from '../../hooks/useAuth';

export default function Messages({ group }) {
  const [messages, setMessages] = useState([]);

  const { user } = useAuth();

  useEffect(() => {
    let parsedMessages = [];

    for (let id in group.messages) {
      parsedMessages.push({
        id, ...group.messages[id]
      });
    }

    setMessages(parsedMessages);
  }, [group]);

  useEffect(() => {
    const scrollBar = document.querySelector(".scrollBar");
    scrollBar.scrollTop = scrollBar.scrollHeight;
  }, [messages]);

  return (
    <Container className="scrollBar">
      {messages.map(message => <MessageItem
        key={message.id}
        message={message}
        mine={user.id === message.sender.id}
      />)}
    </Container>
  );
}