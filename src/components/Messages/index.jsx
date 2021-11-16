import { useEffect, useState } from 'react';

import MessageItem from '../MessageItem';

import { Container } from './styles';

import { firebase } from '../../services/firebase';

import { useApp } from '../../hooks/useApp';

export default function Messages() {

  const { idGroupSelected } = useApp();

  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const groupRef = firebase.database().ref(`groups/${idGroupSelected}/messages`);
    groupRef.on("value", messages => {
      const data = messages.val();

      let arrayGroupMessages = [];

      for(let id in data) {
        arrayGroupMessages.push({
          id, ...data[id]
        });
      }

      setMessages(arrayGroupMessages);
    });
  }, [idGroupSelected]);

  return (
    <Container>
      { messages.map(message => <MessageItem
        key={message.id}
        message={message}
      />) }
    </Container>
  );
}