import { Container, Wrapper, Form, Image, Input } from './styles';

import { useAuth } from '../../hooks/useAuth';

import { useState } from 'react';

export default function Login() {

  const { signInWithGoogle } = useAuth();

  const [showCreateAccount, setShowCreateAccount] = useState(false);
  const [messageError, setMessageError] = useState(false);

  return (
    <Container>
      <Image>
        <img src="https://images.wallpaperscraft.com/image/single/forest_trees_needles_226197_1280x720.jpg" alt="Hero" />
      </Image>

      <Wrapper>
        {!showCreateAccount ? (
          <Form>
            <h1>Entrar</h1>

            <Input>
              <label>E-mail</label>
              <input type="email" />
            </Input>

            <Input>
              <label>Senha</label>
              <input type="email" />
            </Input>

            {messageError && <div className="messageError">Descrição do erro</div>}

            <button>Entrar</button>

            <span onClick={() => setShowCreateAccount(true)}>Não possui uma conta?</span>

            <hr />

            <button className="signInWithGoogle" onClick={signInWithGoogle}>
              <img src="/assets/iconGoogle.png" alt="Icon Google" />
              Google
            </button>
          </Form>
        ) : (
          <Form>
            <h1>Criar conta</h1>

            <Input>
              <label>E-mail</label>
              <input type="email" />
            </Input>

            <Input>
              <label>Nome</label>
              <input type="text" />
            </Input>

            <Input>
              <label>Senha</label>
              <input type="email" />
            </Input>

            {messageError && <div className="messageError">Descrição do erro</div>}

            <button>Entrar</button>

            <span onClick={() => setShowCreateAccount(false)}>Já possui uma conta?</span>
          </Form>
        )}
      </Wrapper>
    </Container>
  );
}