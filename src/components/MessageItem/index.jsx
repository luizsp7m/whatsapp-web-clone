import { Container } from './styles';

export default function MessageItem({ message }) {
  return (
    <Container alignRight={false}>
      <span>Nome</span>
      <p>Mensagem</p>
      <label>13/11/2021 19:07</label>
    </Container>
  );
}