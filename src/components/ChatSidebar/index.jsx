import { useApp } from '../../hooks/useApp';

import { Container, Description, Header, CloseButton, Members, Wrapper } from './styles';

export default function ChatSidebar() {

  const { showChatSidebar, setShowChatSidebar } = useApp();

  return (
    <Container showChatSidebar={showChatSidebar}>
      <Header>
        <CloseButton size={18} onClick={() => setShowChatSidebar(false)} />
        <span>Dados do grupo</span>
      </Header>

      <Wrapper>
        <Description>
          <img src="https://avatars.dicebear.com/api/initials/luiz.svg" alt="Grupo" />

          <div>
            <h1>Nome do grupo</h1>
            <p>Número de participantes</p>
          </div>

          <p>Descrição do grupo</p>
        </Description>

        <Members>
          <h3>Número de participantes</h3>

          <div>
            <img src="https://avatars.dicebear.com/api/initials/Clone.svg" alt="Imagem" />
            <div>
              <span>Luiz</span>
              <label>luizoliveira2808@gmail.com</label>
            </div>
          </div>
        </Members>
      </Wrapper>
    </Container>
  );
}