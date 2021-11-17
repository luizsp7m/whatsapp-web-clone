import { Container } from './styles';

export default function MessageItem({ message, alignRight }) {

  return (
    <Container alignRight={alignRight}>
      <span>{message.sender.name}</span>
      <p>{message.message}</p>
    </Container>
  );
}