import MessageItem from '../MessageItem';

import { Container } from './styles';

export default function Messages({ messages }) {
  return (
    <Container>
      {messages.map(message => <MessageItem
        key={message.id}
        message={message}
      />)}
    </Container>
  );
}