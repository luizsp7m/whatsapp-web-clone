import { useApp } from '../../hooks/useApp';

import { Container, Description, Header, CloseButton, Members, Wrapper } from './styles';

export default function ChatSidebar({ group }) {

  const { showChatSidebar, setShowChatSidebar } = useApp();

  return (
    <Container showChatSidebar={showChatSidebar}>
      <Header>
        <CloseButton size={18} onClick={() => setShowChatSidebar(false)} />
        <span>Dados do grupo</span>
      </Header>

      <Wrapper>
        <Description>
          <img src={group.image} alt={group.name} />

          <div>
            <h1>{group.name}</h1>
            <p>{group.description}</p>
          </div>
        </Description>

        {/* <Members>
          <h3>Participantes</h3>

          <div>
            <img src="https://avatars.dicebear.com/api/initials/Clone.svg" alt="Imagem" />
            <div>
              <span>Luiz</span>
              <label>luizoliveira2808@gmail.com</label>
            </div>
          </div>
        </Members> */}
      </Wrapper>
    </Container>
  );
}