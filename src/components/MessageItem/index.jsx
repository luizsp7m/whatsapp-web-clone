import { useAuth } from '../../hooks/useAuth';

import { Container } from './styles';

export default function MessageItem({ message }) {

  const { user } = useAuth();

  return (
    <Container alignRight={user.id === message.sender.id ? true : false}>
      <span>{message.sender.name}</span>
      <p>{message.message}</p>
      <label>13/11/2021 19:07</label>
    </Container>
  );
}