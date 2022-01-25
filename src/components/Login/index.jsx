import { Container, Wrapper, Form, Image, Input } from './styles';

import { useAuth } from '../../hooks/useAuth';

import { useEffect, useState } from 'react';

export default function Login() {

  const {
    signInWithGoogle,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
  } = useAuth();

  const [showCreateAccount, setShowCreateAccount] = useState(false);
  const [error, setError] = useState(null);

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  async function createUser(event) {
    event.preventDefault();
    createUserWithEmailAndPassword(email, name, password, showError);
  }

  async function signInWithEmail(event) {
    event.preventDefault();
    signInWithEmailAndPassword(email, password, showError);
  }

  function showError(message) {
    setError(message);
    setTimeout(() => {
      setError(null);
    }, 4000);
  }

  useEffect(() => {
    setEmail("");
    setName("");
    setPassword("");
    setError(null);
  }, [showCreateAccount]);

  return (
    <Container>
      <Wrapper>
        {!showCreateAccount ? (
          <Form onSubmit={signInWithEmail}>
            <h1>Entrar</h1>

            <Input>
              <label>E-mail</label>
              <input
                type="email"
                required={true}
                onChange={({ target }) => setEmail(target.value)}
                value={email}
              />
            </Input>

            <Input>
              <label>Senha</label>
              <input
                type="password"
                required={true}
                onChange={({ target }) => setPassword(target.value)}
                value={password}
              />
            </Input>

            {error && <div className="messageError">{error}</div>}

            <button type="submit">Entrar</button>

            <span onClick={() => setShowCreateAccount(true)}>Não possui uma conta?</span>

            <hr />

            <button className="signInWithGoogle" onClick={signInWithGoogle}>
              <img src="/assets/iconGoogle.png" alt="Icon Google" />
              Google
            </button>
          </Form>
        ) : (
          <Form onSubmit={createUser}>
            <h1>Criar conta</h1>

            <Input>
              <label>E-mail</label>
              <input
                type="email"
                required={true}
                onChange={({ target }) => setEmail(target.value)}
                value={email}
              />
            </Input>

            <Input>
              <label>Nome</label>
              <input
                type="text"
                required={true}
                onChange={({ target }) => setName(target.value)}
                value={name}
              />
            </Input>

            <Input>
              <label>Senha</label>
              <input
                type="password"
                required={true}
                onChange={({ target }) => setPassword(target.value)}
                value={password}
              />
            </Input>

            {error && <div className="messageError">{error}</div>}

            <button type="submit">Cadastrar</button>

            <span onClick={() => setShowCreateAccount(false)}>Já possui uma conta?</span>
          </Form>
        )}
      </Wrapper>
    </Container>
  );
}