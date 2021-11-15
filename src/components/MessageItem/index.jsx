import { Container } from './styles';

export default function MessageItem({ message }) {
  return (
    <Container alignRight={message.sender.email === "luizoliveira2808@gmail.com" ? true : false}>
      <span>{message.sender.name}</span>
      <p>{message.message}</p>
      <label>13/11/2021 19:07</label>
    </Container>
  );
}