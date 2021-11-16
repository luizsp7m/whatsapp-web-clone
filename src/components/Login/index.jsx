import { Container } from './styles';

import { useAuth } from '../../hooks/useAuth';

export default function Login() {

  const { signInWithGoogle } = useAuth();

  return (
    <Container>
      <button onClick={signInWithGoogle}>Login</button>
    </Container>
  );
}